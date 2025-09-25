export const fmtTHB = (n: number) => new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB', maximumFractionDigits: 2 }).format(n);
export const fmtPct = (n: number) => `${n.toFixed(2)}%`;
export const fmtDate = (iso: string) => new Date(iso).toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });