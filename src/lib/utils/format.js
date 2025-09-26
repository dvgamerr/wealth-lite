import numeral from 'numeral'

export const fmtTHB = (n) => {
  if (n == null || isNaN(n)) return '0.00'
  return numeral(n).format('0,0.00')
}

export const fmtPct = (n) => {
  if (n == null || isNaN(n)) return '0.00%'
  return `${numeral(n).format('0,0.00')}%`
}

export const fmtDate = (iso) => new Date(iso).toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' })
