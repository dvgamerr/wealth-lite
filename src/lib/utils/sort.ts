export type SortKey = 'asset' | 'price' | 'value' | 'pnl' | 'pct';
export type SortState = { key: SortKey; dir: 'asc' | 'desc' };
export const toggle = (s: SortState, key: SortKey): SortState => ({ key, dir: s.key === key && s.dir === 'asc' ? 'desc' : 'asc' });
export const by = (key: SortKey, dir: 'asc' | 'desc') => (a: any, b: any) => {
  const k = { asset: 'symbol', price: 'price', value: 'value', pnl: 'pnl', pct: 'pct' }[key];
  const va = a[k];
  const vb = b[k];
  const mult = dir === 'asc' ? 1 : -1;
  if (typeof va === 'string' && typeof vb === 'string') return mult * va.localeCompare(vb);
  return mult * (va - vb);
};