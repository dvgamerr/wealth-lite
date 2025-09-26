<script>
  import { fmtTHB } from '../lib/utils/format.js'
</script>

<section class="bg-zinc-900/95 backdrop-blur border border-zinc-800 rounded-xl p-5 md:p-6 shadow-lg shadow-black/20">
  <!-- Header -->
  <div class="flex items-center justify-between mb-5">
    <div class="flex items-center gap-1.5">
      <svg class="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
        />
      </svg>
      <h2 class="text-white text-base font-semibold tracking-wide">Dividend Tracking</h2>
    </div>
    <a href="/dividends" class="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-emerald-600 text-xs font-medium transition-colors group">
      History
      <svg class="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </a>
  </div>

  <div class="space-y-5">
    <!-- Main Figures -->
    <div class="flex items-start justify-between gap-4">
      <div>
        <p class="text-zinc-400 text-[11px] uppercase tracking-wide font-medium mb-1">Annual Dividend (Est.)</p>
        <p class="text-emerald-400 text-2xl md:text-3xl font-bold leading-tight">29,134.84</p>
      </div>
      <div class="text-right">
        <p class="text-zinc-500 text-[11px] uppercase tracking-wide font-medium mb-1">Yield %</p>
        <p class="text-emerald-400 text-sm font-semibold">2.51%</p>
      </div>
    </div>

    <!-- Mini Stat Cards -->
    <div class="grid grid-cols-2 gap-3">
      <div class="bg-zinc-800/40 border border-zinc-700/60 rounded-lg p-3 flex flex-col gap-1.5">
        <p class="text-zinc-400 text-[11px] flex items-center gap-1.5 tracking-wide">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Next Dividend
        </p>
        <p class="text-rose-400 font-semibold text-sm">11 ต.ค.</p>
      </div>
      <div class="bg-zinc-800/40 border border-zinc-700/60 rounded-lg p-3 flex flex-col gap-1.5">
        <p class="text-zinc-400 text-[11px] flex items-center gap-1.5 tracking-wide">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
            />
          </svg>
          Last Received
        </p>
        <p class="text-emerald-400 font-semibold text-sm">12,500</p>
      </div>
    </div>

    <!-- Monthly Avg Row -->
    <div class="flex items-center justify-between pt-1 border-t border-zinc-800/80 mt-1">
      <p class="text-zinc-500 text-[11px] uppercase tracking-wide font-medium">Monthly Avg.</p>
      <p class="text-zinc-300 text-sm font-medium tabular-nums">2,427.903</p>
    </div>
  </div>
</section>
