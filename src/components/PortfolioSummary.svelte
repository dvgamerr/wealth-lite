<script lang="ts">
  import { fmtTHB } from '../lib/utils/format'
  export let totalValue = 0
  export let totalCost = 0
  export let todayChange = 0
  const pnl = totalValue - totalCost
  const pnlPct = totalCost ? (pnl / totalCost) * 100 : 0
</script>

<section class="card">
  <div class="flex items-start justify-between">
    <div>
      <div class="card-title">Portfolio Value</div>
      <div class="card-value">{fmtTHB(totalValue)}</div>
    </div>
    <div class="text-right">
      <div class="card-title">Total Gain/Loss</div>
      <div class="card-value {pnl >= 0 ? 'text-gain' : 'text-loss'}">{fmtTHB(pnl)} <span class="text-sm">({pnlPct.toFixed(2)}%)</span></div>
    </div>
  </div>
  <div class="mt-3 text-sm">
    <span class="card-title">Today's Change:</span>
    <span class="ml-2 {todayChange >= 0 ? 'text-gain' : 'text-loss'} font-medium">{fmtTHB(todayChange)}</span>
  </div>
</section>
