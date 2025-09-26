<script>
  import { fmtTHB } from '../lib/utils/format.js'
  export let totalValue = 0
  export let totalCost = 0
  export let todayChange = 0
  const pnl = totalValue - totalCost
  const pnlPct = totalCost ? (pnl / totalCost) * 100 : 0
  const todayChangePct = totalValue ? (todayChange / totalValue) * 100 : 0
</script>

<section class="bg-zinc-900 border border-zinc-700/50 rounded-lg p-6">
  <div class="space-y-4">
    <div>
      <h2 class="text-zinc-400 text-sm font-medium mb-2">Portfolio Value</h2>
      <div class="flex items-baseline gap-3">
        <span class="text-3xl font-bold text-white">{fmtTHB(totalValue)}</span>
        <div class="flex items-center gap-1">
          <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span class="text-emerald-400 font-semibold">+{pnlPct.toFixed(2)}%</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div>
        <p class="text-zinc-400 text-sm">Total Gain/Loss</p>
        <p class="text-emerald-400 font-semibold">+{fmtTHB(pnl)}</p>
      </div>
      <div>
        <p class="text-zinc-400 text-sm">Today's Change</p>
        <p class="text-emerald-400 font-semibold">+{fmtTHB(todayChange)} (+{todayChangePct.toFixed(2)}%)</p>
      </div>
    </div>
  </div>
</section>
