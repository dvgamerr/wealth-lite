// Format number in Thai locale without the THB currency symbol (request: remove ฿)
export const fmtTHB = (n) => new Intl.NumberFormat('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n)
export const fmtPct = (n) => `${n.toFixed(2)}%`
export const fmtDate = (iso) => new Date(iso).toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' })
