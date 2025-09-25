<script lang="ts">
  import type { Holding } from '../lib/data/mock'
  import { fmtTHB, fmtPct } from '../lib/utils/format'
  export let holdings: Holding[] = []

  const best = [...holdings].sort((a, b) => b.pct - a.pct)[0]
  const worst = [...holdings].sort((a, b) => a.pct - b.pct)[0]
  const totalAssets = holdings.length
  const cash = 0 // placeholder for integration
</script>

<section class="grid grid-cols-2 gap-4">
  <div class="card">
    <div class="card-title">Best Performer</div>
    <div class="card-value text-gain">{best ? `${best.symbol} · ${fmtPct(best.pct)}` : '-'}</div>
  </div>
  <div class="card">
    <div class="card-title">Worst Performer</div>
    <div class="card-value text-loss">{worst ? `${worst.symbol} · ${fmtPct(worst.pct)}` : '-'}</div>
  </div>
  <div class="card">
    <div class="card-title">Total Assets</div>
    <div class="card-value">{totalAssets}</div>
  </div>
  <div class="card">
    <div class="card-title">Cash Position</div>
    <div class="card-value">{fmtTHB(cash)}</div>
  </div>
</section>
