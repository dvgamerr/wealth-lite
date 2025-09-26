<script>
  import { fmtTHB } from '../lib/utils/format.js'
  export let totalValue = 0
  export let totalCost = 0
  export let todayChange = 0
  const pnl = totalValue - totalCost
  const pnlPct = totalCost ? (pnl / totalCost) * 100 : 0
  const todayChangePct = totalValue ? (todayChange / totalValue) * 100 : 0

  // Dynamic style helper classes (ensure both variants exist in markup for Tailwind JIT)
  $: performanceClasses = pnlPct >= 0 ? 'bg-emerald-600/15 border border-emerald-500/30 text-emerald-300' : 'bg-rose-600/15 border border-rose-500/30 text-rose-300'
  $: pnlTextClass = pnl >= 0 ? 'text-emerald-400' : 'text-rose-400'
  $: todayTextClass = todayChange >= 0 ? 'text-emerald-400' : 'text-rose-400'
</script>

<section class="bg-zinc-900/95 backdrop-blur border border-zinc-800 rounded-xl p-5 md:p-6 shadow-lg shadow-black/15">
  <div class="flex items-start justify-between mb-5">
    <h2 class="text-white text-base font-semibold tracking-wide">Portfolio Summary</h2>
  </div>

  <div class="space-y-6">
    <!-- Main Value Row -->
    <div class="flex items-start justify-between gap-4">
      <div class="flex flex-col gap-1">
        <p class="text-zinc-400 text-[11px] uppercase tracking-wide font-medium">Portfolio Value</p>
        <div class="flex items-baseline gap-3">
          <span class="text-2xl md:text-3xl font-bold text-white leading-tight">{fmtTHB(totalValue)}</span>
          <div class={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium ${performanceClasses}`}>
            <svg class={`w-3.5 h-3.5 transition-transform ${pnlPct < 0 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span>{pnlPct >= 0 ? '+' : ''}{pnlPct.toFixed(2)}%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-2 gap-3">
      <div class="bg-zinc-800/40 border border-zinc-700/60 rounded-lg p-3 flex flex-col gap-1.5">
        <p class="text-zinc-400 text-[11px] uppercase tracking-wide">Total Gain/Loss</p>
        <p class={`font-semibold text-sm ${pnlTextClass}`}>{pnl >= 0 ? '+' : ''}{fmtTHB(pnl)}</p>
      </div>
      <div class="bg-zinc-800/40 border border-zinc-700/60 rounded-lg p-3 flex flex-col gap-1.5">
        <p class="text-zinc-400 text-[11px] uppercase tracking-wide">Today's Change</p>
        <p class={`font-semibold text-sm ${todayTextClass}`}>{todayChange >= 0 ? '+' : ''}{fmtTHB(todayChange)} ({todayChange >= 0 ? '+' : ''}{todayChangePct.toFixed(2)}%)</p>
      </div>
    </div>
  </div>
</section>
