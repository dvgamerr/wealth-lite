export const toggle = (s, key) => ({ key, dir: s.key === key && s.dir === 'asc' ? 'desc' : 'asc' })
export const by = (key, dir) => (a, b) => {
  const k = { asset: 'symbol', price: 'price', value: 'value', pnl: 'pnl', pct: 'pct' }[key]
  const va = a[k]
  const vb = b[k]
  const mult = dir === 'asc' ? 1 : -1
  if (typeof va === 'string' && typeof vb === 'string') return mult * va.localeCompare(vb)
  return mult * (va - vb)
}
