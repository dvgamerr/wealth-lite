<script>
  import { fmtTHB } from '../lib/utils/format.js'

  // Mock data for Portfolio Breakdown
  const breakdown = [
    { name: 'DIME (US Stocks & ETFs)', value: 462931.59, percent: 46.6, change: 3.7 },
    { name: 'SSF (Thai Funds)', value: 140326.01, percent: 12.0, change: 16.8 },
    { name: 'GOLD', value: 350367.42, percent: 41.4, change: 32.83 },
  ]
</script>

<section class="bg-zinc-900 border border-zinc-700/50 rounded-lg p-6">
  <h2 class="text-white text-lg font-semibold mb-4">Portfolio Breakdown</h2>

  <div class="space-y-4">
    {#each breakdown as item}
      <div class="space-y-2">
        <div class="flex justify-between items-center">
          <span class="text-zinc-300 text-sm">{item.name}</span>
          <div class="text-right">
            <span class="text-white font-semibold">{item.percent}%</span>
            <div class="flex items-center gap-1">
              <svg class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span class="text-emerald-400 text-xs">+{item.change}%</span>
            </div>
          </div>
        </div>
        <div class="text-zinc-400 text-xs">{fmtTHB(item.value)}</div>
        <div class="text-emerald-400 text-xs">+{fmtTHB((item.value * item.change) / 100)}</div>
        <div class="h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div class="h-full bg-emerald-500 rounded-full" style={`width: ${item.percent}%`}></div>
        </div>
      </div>
    {/each}
  </div>
</section>
