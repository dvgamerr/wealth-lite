<script>
  // Keeping imports minimal & consistent with other components
  import { fmtTHB, fmtPct } from '../lib/utils/format.js'

  // Base data (could later be provided via props / store)
  const portfolioSummary = [
    { category: 'DIME', weight: 47.45, cost: 469_673.91, value: 484_043.24 },
    { category: 'SSF', weight: 12.14, cost: 120_140.0, value: 140_385.83 },
    { category: 'GOLD', weight: 40.41, cost: 400_000.0, value: 562_130.48 },
  ]

  // Derive per-row P&L metrics (immutably)
  const rowsWithPnL = portfolioSummary.map((r) => {
    const pnl = r.value - r.cost
    const pnlPct = r.cost ? (pnl / r.cost) * 100 : 0
    return { ...r, pnl, pnlPct }
  })

  // Aggregate totals programmatically to prevent divergence
  const totals = rowsWithPnL.reduce(
    (acc, r) => ({
      weight: 100, // explicit (weights assumed to already sum to 100)
      cost: acc.cost + r.cost,
      value: acc.value + r.value,
      pnl: acc.pnl + r.pnl,
    }),
    { weight: 100, cost: 0, value: 0, pnl: 0 },
  )
  const totalRow = {
    category: 'Total',
    weight: 100,
    cost: totals.cost,
    value: totals.value,
    pnl: totals.pnl,
    pnlPct: totals.cost ? (totals.pnl / totals.cost) * 100 : 0,
  }

  const allRows = [...rowsWithPnL, totalRow]

  // Utility for dynamic text color (reuse same semantic classes as other tables if available)
  const gainClass = (n) => (n >= 0 ? 'text-gain' : 'text-loss')
</script>

<section class="card overflow-hidden">
  <div class="overflow-x-auto">
    <table class="w-full text-sm">
      <thead>
        <tr class="text-[11px] uppercase tracking-wide text-zinc-500 dark:text-zinc-400 bg-zinc-50/60 dark:bg-zinc-900/70 backdrop-blur">
          <th class="py-2 px-3 text-left font-medium">Asset</th>
          <th class="py-2 px-3 text-right font-medium">Weight</th>
          <th class="py-2 px-3 text-right font-medium">Cost</th>
          <th class="py-2 px-3 text-right font-medium">Value</th>
          <th class="py-2 px-3 text-right font-medium">Gain / Loss</th>
          <th class="py-2 px-3 text-right font-medium">P&L %</th>
        </tr>
      </thead>
      <tbody>
        {#each allRows as row}
          <tr
            class="border-t border-zinc-100 dark:border-zinc-800/80 transition-colors {row.category !== 'Total' ? 'hover:bg-zinc-50/60 dark:hover:bg-zinc-800/40' : ''} {row.category === 'Total'
              ? 'bg-zinc-100/70 dark:bg-zinc-800/70 font-semibold'
              : ''}"
          >
            <td class="py-2 px-3 font-medium whitespace-nowrap text-zinc-700 dark:text-zinc-200">{row.category}</td>
            <td class="py-2 px-3 font-numbers">
              {#if row.category === 'Total'}
                <div class="text-right">{row.weight.toFixed(2)}%</div>
              {:else}
                <div class="flex items-center gap-2 justify-end">
                  <span>{row.weight.toFixed(2)}%</span>
                  <div class="h-2 w-24 bg-zinc-200 dark:bg-zinc-800 rounded overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-emerald-500/80 via-cyan-400/70 to-blue-400/70" style={`width:${row.weight}%`}></div>
                  </div>
                </div>
              {/if}
            </td>
            <td class="py-2 px-3 font-numbers text-right tabular-nums">{fmtTHB(row.cost)}</td>
            <td class="py-2 px-3 font-numbers text-right tabular-nums">{fmtTHB(row.value)}</td>
            <td class="py-2 px-3 font-numbers text-right tabular-nums {gainClass(row.pnl)}">{row.pnl >= 0 ? '+' : ''}{fmtTHB(row.pnl)}</td>
            <td class="py-2 px-3 font-numbers text-right tabular-nums {gainClass(row.pnlPct)}">{row.pnlPct >= 0 ? '+' : ''}{fmtPct(row.pnlPct)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
