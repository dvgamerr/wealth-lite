<script>
  import { fmtTHB } from '../lib/utils/format.js'

  // Mock data for Asset Allocation
  const allocations = [
    { name: 'DCA 10 ปี [DIME]', value: 383218.41, percent: 32.6, change: 5.45 },
    { name: 'เส้นใจสายเทพเศรษฐ [DIME]', value: 350367.42, percent: 29.9, change: 12.83 },
    { name: 'รายได้ลมเลน [DIME]', value: 240059.59, percent: 20.4, change: 8.8 },
    { name: 'หุ้นไทย [DIME]', value: 200000.0, percent: 17.1, change: -2.3 },
  ]
</script>

<section class="bg-zinc-900 border border-zinc-700/50 rounded-lg p-6">
  <h2 class="text-white text-lg font-semibold mb-4">Asset Allocation</h2>

  <div class="space-y-4">
    {#each allocations as allocation}
      <div class="space-y-2">
        <div class="flex justify-between items-center">
          <span class="text-zinc-300 text-sm">{allocation.name}</span>
          <div class="text-right">
            <span class="text-white font-semibold">{allocation.percent}%</span>
            <div class="flex items-center gap-1">
              <svg class="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span class="text-emerald-400 text-xs">+{allocation.change}%</span>
            </div>
          </div>
        </div>
        <div class="text-zinc-400 text-xs">{fmtTHB(allocation.value)}</div>
        <div class="h-2 bg-zinc-800 rounded-full overflow-hidden">
          <div class="h-full bg-emerald-500 rounded-full" style={`width: ${allocation.percent}%`}></div>
        </div>
      </div>
    {/each}
  </div>
</section>
