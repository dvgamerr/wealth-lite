<script>
  import { fmtTHB, fmtPct } from '../lib/utils/format.js'
  export let holdings = []
  export let portfolio = { totalValue: 0 }
  export let cash = 0 // Allow parent to supply cash balance
  export let cashCurrency = 'USD Cash'

  const best = holdings.length ? [...holdings].sort((a, b) => b.pct - a.pct)[0] : null
  const worst = holdings.length ? [...holdings].sort((a, b) => a.pct - b.pct)[0] : null
  const totalAssets = holdings.length
  const profitableCount = holdings.filter((h) => h.pnl > 0).length
  const cashPct = portfolio.totalValue ? (cash / portfolio.totalValue) * 100 : 0

  // Helper to abbreviate big numbers (e.g., 198500 -> 198.5K)
  function abbreviateTHB(amount) {
    if (amount >= 1_000_000_000) return `${(amount / 1_000_000_000).toFixed(2)}B`
    if (amount >= 1_000_000) return `${(amount / 1_000_000).toFixed(2)}M`
    if (amount >= 100_000) return `${(amount / 1_000).toFixed(1)}K`
    return fmtTHB(amount)
  }
  const cashDisplay = abbreviateTHB(cash)
  const sign = (v) => (v > 0 ? '+' : v < 0 ? '-' : '')
</script>

<section class="grid grid-cols-1 sm:grid-cols-2 gap-4">
  <!-- Best Performer -->
  <div class="bg-zinc-900/95 backdrop-blur border border-zinc-800 rounded-lg p-5 relative overflow-hidden">
    <div class="flex items-start justify-between mb-2">
      <p class="text-zinc-400 text-[12px] font-medium">Best Performer</p>
      <div class="p-2 rounded-md bg-emerald-600/15 border border-emerald-500/30 text-emerald-400">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 21h8m-4-4v4m7 0H5m14-8.5c0 2.485-2.91 4.5-6.5 4.5S6 15.985 6 13.5 8.91 9 12.5 9s6.5 2.015 6.5 4.5zM12.5 9V5m0 0h-2m2 0h2"
          /></svg
        >
      </div>
    </div>
    {#if best}
      <div class="space-y-1">
        <div class="text-lg font-bold tracking-wide">{best.symbol}</div>
        <div class="{best.pct < 0 ? 'text-rose-400' : 'text-emerald-400'} font-semibold text-sm">{sign(best.pct)}{fmtPct(Math.abs(best.pct))}</div>
        <div class="text-zinc-500 text-xs mt-1">{sign(best.pnl)}{fmtTHB(Math.abs(best.pnl))}</div>
      </div>
    {:else}
      <p class="text-zinc-500 text-sm">-</p>
    {/if}
  </div>

  <!-- Worst Performer -->
  <div class="bg-zinc-900/95 backdrop-blur border border-zinc-800 rounded-lg p-5 relative overflow-hidden">
    <div class="flex items-start justify-between mb-2">
      <p class="text-zinc-400 text-[12px] font-medium">Worst Performer</p>
      <div class="p-2 rounded-md bg-rose-600/15 border border-rose-500/30 text-rose-400">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg
        >
      </div>
    </div>
    {#if worst}
      <div class="space-y-1">
        <div class="text-lg font-bold tracking-wide">{worst.symbol}</div>
        <div class="{worst.pct < 0 ? 'text-rose-400' : 'text-emerald-400'} font-semibold text-sm">{sign(worst.pct)}{fmtPct(Math.abs(worst.pct))}</div>
        <div class="text-zinc-500 text-xs mt-1">{sign(worst.pnl)}{fmtTHB(Math.abs(worst.pnl))}</div>
      </div>
    {:else}
      <p class="text-zinc-500 text-sm">-</p>
    {/if}
  </div>

  <!-- Total Assets -->
  <div class="bg-zinc-900/95 backdrop-blur border border-zinc-800 rounded-lg p-5 relative overflow-hidden">
    <div class="flex items-start justify-between mb-2">
      <p class="text-zinc-400 text-[12px] font-medium">Total Assets</p>
      <div class="p-2 rounded-md bg-emerald-600/15 border border-emerald-500/30 text-emerald-400">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7l9 4 9-4m-9 13V11" /></svg>
      </div>
    </div>
    <div class="text-xl font-bold leading-tight">{totalAssets}</div>
    <div class="text-emerald-400 text-xs font-medium">Holdings</div>
    <div class="text-zinc-500 text-xs mt-1">{profitableCount} Profitable</div>
  </div>

  <!-- Cash Position -->
  <div class="bg-zinc-900/95 backdrop-blur border border-zinc-800 rounded-lg p-5 relative overflow-hidden">
    <div class="flex items-start justify-between mb-2">
      <p class="text-zinc-400 text-[12px] font-medium">Cash Position</p>
      <div class="p-2 rounded-md bg-emerald-600/15 border border-emerald-500/30 text-emerald-400">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          /></svg
        >
      </div>
    </div>
    <div class="text-xl font-bold leading-tight">{cashDisplay}</div>
    <div class="text-emerald-400 text-xs font-medium">{cashCurrency}</div>
    <div class="text-zinc-500 text-xs mt-1">{cashPct.toFixed(1)}% of portfolio</div>
  </div>
</section>
