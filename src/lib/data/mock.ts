export type Holding = {
  symbol: string;
  name: string;
  exchange?: string; // e.g., BKK, NASDAQ
  qty: number;
  price: number; // current
  cost: number;  // average cost per unit
  value: number; // derived: qty * price
  pnl: number;   // value - qty*cost
  pct: number;   // pnl / (qty*cost) * 100
  category: 'DIME_DCA10' | 'DIME_GROWTH_GLOBAL' | 'DIME_INCOME' | 'DIME_THAI_EQUITY';
  dividends?: { date: string; amountTHB: number }[]; // historical paid
  scheduleHint?: 'monthly' | 'quarterly' | 'semiannual' | 'annual' | 'irregular';
};

// Sample data reflecting user notes, including Thai stock SCC on BKK
export const holdings: Holding[] = [
  {
    symbol: 'BKK:SCC', name: 'Siam Cement', exchange: 'BKK', qty: 100, price: 240.0, cost: 220.0,
    value: 24000, pnl: 2000, pct: 9.09,
    category: 'DIME_THAI_EQUITY',
    dividends: [
      { date: '2025-08-28', amountTHB: 500 },
      { date: '2025-03-15', amountTHB: 400 }
    ],
    scheduleHint: 'semiannual'
  },
  {
    symbol: 'AAPL', name: 'Apple Inc.', exchange: 'NASDAQ', qty: 20, price: 215.5, cost: 170.0,
    value: 4310, pnl: 910, pct: 26.56,
    category: 'DIME_GROWTH_GLOBAL',
    dividends: [{ date: '2025-08-15', amountTHB: 120 }],
    scheduleHint: 'quarterly'
  },
  {
    symbol: 'JEPI', name: 'JPMorgan Equity Premium Income', exchange: 'NYSE', qty: 50, price: 55.1, cost: 54.0,
    value: 2755, pnl: 55, pct: 2.04,
    category: 'DIME_INCOME',
    dividends: [
      { date: '2025-09-03', amountTHB: 420 },
      { date: '2025-08-02', amountTHB: 410 },
      { date: '2025-07-03', amountTHB: 405 }
    ],
    scheduleHint: 'monthly'
  },
  {
    symbol: 'DASH', name: 'DoorDash', exchange: 'NYSE', qty: 10, price: 120.0, cost: 140.0,
    value: 1200, pnl: -200, pct: -12.5,
    category: 'DIME_GROWTH_GLOBAL'
  },
  {
    symbol: 'K-US500X-A(A)', name: 'K US500X-A(A)', qty: 100, price: 17.8, cost: 16.2,
    value: 1780, pnl: 160, pct: 9.88,
    category: 'DIME_DCA10',
    dividends: [], scheduleHint: 'irregular'
  }
];

export const portfolio = {
  currency: 'THB',
  totalValue: holdings.reduce((s, h) => s + h.value, 0),
  totalCost: holdings.reduce((s, h) => s + h.qty * h.cost, 0),
  todayChange: 1250, // mock daily change in THB
};

export const categories = [
  { key: 'DIME_DCA10', label: 'DCA 10 ปี [DIME]' },
  { key: 'DIME_GROWTH_GLOBAL', label: 'เติบโตต่างประเทศ [DIME]' },
  { key: 'DIME_INCOME', label: 'รายได้ต่อเนื่อง [DIME]' },
  { key: 'DIME_THAI_EQUITY', label: 'หุ้นไทย [DIME]' }
] as const;

export const dividendSummary = () => {
  // Compute last paid, next estimate, ytd amount, annualized estimate by schedule
  const all = holdings.filter(h => h.dividends && h.dividends.length);
  const now = new Date();
  return all.map(h => {
    const paid = [...(h.dividends ?? [])].sort((a, b) => a.date < b.date ? 1 : -1);
    const last = paid[0];
    const ytd = paid.filter(d => new Date(d.date).getFullYear() === now.getFullYear()).reduce((s, d) => s + d.amountTHB, 0);
    const estAnnual = (() => {
      const sched = h.scheduleHint;
      if (!sched) return ytd; // fallback
      const freq = { monthly: 12, quarterly: 4, semiannual: 2, annual: 1 }[sched] ?? 1;
      const recent = paid.slice(0, Math.min(paid.length, freq));
      const avg = recent.length ? recent.reduce((s, d) => s + d.amountTHB, 0) / recent.length : 0;
      return avg * freq;
    })();
    // naive next-date guess by schedule
    const nextDate = (() => {
      if (!last || !h.scheduleHint) return null;
      const d = new Date(last.date);
      const add = h.scheduleHint === 'monthly' ? 1 : h.scheduleHint === 'quarterly' ? 3 : h.scheduleHint === 'semiannual' ? 6 : 12;
      d.setMonth(d.getMonth() + add);
      return d.toISOString().slice(0, 10);
    })();
    return { symbol: h.symbol, name: h.name, last, ytd, estAnnual, nextDate };
  });
};