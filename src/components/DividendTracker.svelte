<script>
  import { fmtTHB } from '../lib/utils/format.js'
</script>

<section class="bg-zinc-900 border border-zinc-700/50 rounded-lg p-6">
  <div class="flex items-center gap-2 mb-4">
    <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
      />
    </svg>
    <h2 class="text-white text-lg font-semibold">Dividend Tracking</h2>
  </div>

  <div class="space-y-4">
    <div>
      <p class="text-zinc-400 text-sm">Annual Dividend (Est.)</p>
      <p class="text-emerald-400 text-xl font-bold">฿29,134.84</p>
      <p class="text-zinc-400 text-xs">Yield % <span class="text-white">2.51%</span></p>
    </div>

    <div class="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-700/50">
      <div>
        <p class="text-zinc-400 text-sm flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Next Dividend
        </p>
        <p class="text-white font-semibold">11 ต.ค.</p>
      </div>
      <div>
        <p class="text-zinc-400 text-sm flex items-center gap-1">
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
        <p class="text-emerald-400 font-semibold">฿12,500</p>
      </div>
    </div>

    <div class="pt-2">
      <p class="text-zinc-400 text-xs">Monthly Avg.</p>
      <p class="text-zinc-400 text-sm">฿2,427.903</p>
    </div>
  </div>
</section>
