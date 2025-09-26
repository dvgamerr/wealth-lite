// Sample data reflecting user notes, including Thai stock SCC on BKK
export const holdings = [
  {
    symbol: 'SCC',
    name: 'Siam Cement',
    exchange: 'BKK',
    qty: 400,
    price: 222.0,
    cost: 205.0,
    value: 88800,
    pnl: 6800,
    pct: 8.29,
    category: 'DIME_THAI_EQUITY',
    dividends: [
      { date: '2025-08-28', amountTHB: 900 },
      { date: '2025-02-28', amountTHB: 800 },
      { date: '2024-08-28', amountTHB: 800 },
      { date: '2024-02-28', amountTHB: 750 },
      { date: '2023-08-28', amountTHB: 750 },
      { date: '2023-02-28', amountTHB: 700 },
    ],
    scheduleHint: 'semiannual',
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    exchange: 'NASDAQ',
    qty: 20,
    price: 215.5,
    cost: 170.0,
    value: 4310,
    pnl: 910,
    pct: 26.56,
    category: 'DIME_GROWTH_GLOBAL',
    dividends: [
      { date: '2025-08-15', amountTHB: 120 },
      { date: '2025-05-15', amountTHB: 115 },
      { date: '2025-02-15', amountTHB: 110 },
      { date: '2024-11-15', amountTHB: 110 },
      { date: '2024-08-15', amountTHB: 105 },
      { date: '2024-05-15', amountTHB: 100 },
      { date: '2024-02-15', amountTHB: 95 },
      { date: '2023-11-15', amountTHB: 95 },
      { date: '2023-08-15', amountTHB: 90 },
      { date: '2023-05-15', amountTHB: 85 },
      { date: '2023-02-15', amountTHB: 80 },
    ],
    scheduleHint: 'quarterly',
  },
  {
    symbol: 'JEPI',
    name: 'JPMorgan Equity Premium Income',
    exchange: 'NYSE',
    qty: 54.7884492,
    price: 56.88,
    cost: 56.94,
    value: 3116.37,
    pnl: -3.28,
    pct: -0.11,
    category: 'DIME_INCOME',
    dividends: [
      { date: '2025-09-03', amountTHB: 1235 },
      { date: '2025-08-02', amountTHB: 1200 },
      { date: '2025-07-03', amountTHB: 1180 },
      { date: '2025-06-03', amountTHB: 1150 },
      { date: '2025-05-02', amountTHB: 1120 },
      { date: '2025-04-03', amountTHB: 1100 },
      { date: '2025-03-03', amountTHB: 1080 },
      { date: '2025-02-03', amountTHB: 1050 },
      { date: '2025-01-03', amountTHB: 1020 },
      { date: '2024-12-03', amountTHB: 1000 },
      { date: '2024-11-02', amountTHB: 980 },
      { date: '2024-10-03', amountTHB: 960 },
      { date: '2024-09-03', amountTHB: 940 },
      { date: '2024-08-02', amountTHB: 920 },
      { date: '2024-07-03', amountTHB: 900 },
      { date: '2024-06-03', amountTHB: 880 },
      { date: '2024-05-02', amountTHB: 860 },
      { date: '2024-04-03', amountTHB: 840 },
      { date: '2024-03-03', amountTHB: 820 },
      { date: '2024-02-03', amountTHB: 800 },
      { date: '2024-01-03', amountTHB: 780 },
      { date: '2023-12-03', amountTHB: 760 },
      { date: '2023-11-02', amountTHB: 740 },
      { date: '2023-10-03', amountTHB: 720 },
    ],
    scheduleHint: 'monthly',
  },
  {
    symbol: 'DASH',
    name: 'DoorDash',
    exchange: 'NYSE',
    qty: 10,
    price: 120.0,
    cost: 140.0,
    value: 1200,
    pnl: -200,
    pct: -12.5,
    category: 'DIME_GROWTH_GLOBAL',
  },
  {
    symbol: 'K-US500X-A(A)',
    name: 'K US500X-A(A)',
    qty: 757.2363,
    price: 14.0958,
    cost: 13.7342,
    value: 10673.85,
    pnl: 273.77,
    pct: 2.63,
    category: 'DIME_DCA10',
    dividends: [
      { date: '2025-06-15', amountTHB: 85 },
      { date: '2024-12-15', amountTHB: 120 },
      { date: '2024-06-15', amountTHB: 95 },
      { date: '2023-12-15', amountTHB: 100 },
      { date: '2023-06-15', amountTHB: 75 },
    ],
    scheduleHint: 'semiannual',
  },
  {
    symbol: 'SCBLCM-SSF',
    name: 'SCBLCM-SSF',
    qty: 1642.8184,
    price: 16.0307,
    cost: 12.1742,
    value: 26335.53,
    pnl: 6329.47,
    pct: 31.68,
    category: 'DIME_SSF',
    dividends: [
      { date: '2025-03-28', amountTHB: 450 },
      { date: '2024-03-28', amountTHB: 380 },
      { date: '2023-03-28', amountTHB: 320 },
    ],
    scheduleHint: 'annual',
  },
]

export const portfolio = {
  currency: 'THB',
  totalValue: holdings.reduce((s, h) => s + h.value, 0),
  totalCost: holdings.reduce((s, h) => s + h.qty * h.cost, 0),
  todayChange: 2150, // mock daily change in THB
}

export const categories = [
  { key: 'DIME_DCA10', label: 'DCA 10 Years [DIME]' },
  { key: 'DIME_GROWTH_GLOBAL', label: 'Global Growth [DIME]' },
  { key: 'DIME_INCOME', label: 'Income Fund [DIME]' },
  { key: 'DIME_THAI_EQUITY', label: 'Thai Equity [DIME]' },
  { key: 'DIME_SSF', label: 'SSF Fund [DIME]' },
]

export const dividendSummary = () => {
  // Compute last paid, next estimate, ytd amount, annualized estimate by schedule
  const all = holdings.filter((h) => h.dividends && h.dividends.length)
  const now = new Date()
  return all.map((h) => {
    const paid = [...(h.dividends ?? [])].sort((a, b) => (a.date < b.date ? 1 : -1))
    const last = paid[0]
    const ytd = paid.filter((d) => new Date(d.date).getFullYear() === now.getFullYear()).reduce((s, d) => s + d.amountTHB, 0)
    const estAnnual = (() => {
      const sched = h.scheduleHint
      if (!sched) return ytd // fallback
      const freq = { monthly: 12, quarterly: 4, semiannual: 2, annual: 1 }[sched] ?? 1
      const recent = paid.slice(0, Math.min(paid.length, freq))
      const avg = recent.length ? recent.reduce((s, d) => s + d.amountTHB, 0) / recent.length : 0
      return avg * freq
    })()
    // naive next-date guess by schedule
    const nextDate = (() => {
      if (!last || !h.scheduleHint) return null
      const d = new Date(last.date)
      const add = h.scheduleHint === 'monthly' ? 1 : h.scheduleHint === 'quarterly' ? 3 : h.scheduleHint === 'semiannual' ? 6 : 12
      d.setMonth(d.getMonth() + add)
      return d.toISOString().slice(0, 10)
    })()
    return { symbol: h.symbol, name: h.name, last, ytd, estAnnual, nextDate }
  })
}

export const yearlyDividendSummary = () => {
  // Get all dividend-paying holdings
  const all = holdings.filter((h) => h.dividends && h.dividends.length)

  // Get all unique years from dividend data
  const allYears = new Set()
  all.forEach((h) => {
    h.dividends.forEach((d) => {
      allYears.add(new Date(d.date).getFullYear())
    })
  })

  const years = [...allYears].sort((a, b) => b - a) // Sort descending (newest first)

  return years.map((year) => {
    const stockSummaries = all
      .map((h) => {
        const yearDividends = h.dividends.filter((d) => new Date(d.date).getFullYear() === year)
        const total = yearDividends.reduce((sum, d) => sum + d.amountTHB, 0)
        const count = yearDividends.length

        return {
          symbol: h.symbol,
          name: h.name,
          total,
          count,
          dividends: yearDividends.sort((a, b) => new Date(b.date) - new Date(a.date)),
        }
      })
      .filter((s) => s.total > 0) // Only include stocks that paid dividends that year

    const yearTotal = stockSummaries.reduce((sum, s) => sum + s.total, 0)

    return {
      year,
      total: yearTotal,
      stocks: stockSummaries,
    }
  })
}
