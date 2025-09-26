<script>
  import { fmtTHB } from '../lib/utils/format.js'
</script>

<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  <!-- Best Performer -->
  <section class="bg-zinc-900 border border-zinc-700/50 rounded-lg p-4">
    <div class="flex items-center gap-2 mb-2">
      <div class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
        <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      </div>
      <div>
        <p class="text-zinc-400 text-xs">Best Performer</p>
      </div>
    </div>
    <div>
      <h3 class="text-white font-semibold text-lg">GOLD</h3>
      <p class="text-emerald-400 font-semibold">+53.00%</p>
      <p class="text-zinc-400 text-xs">+฿11,054.46</p>
    </div>
  </section>

  <!-- Worst Performer -->
  <section class="bg-zinc-900 border border-zinc-700/50 rounded-lg p-4">
    <div class="flex items-center gap-2 mb-2">
      <div class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
        <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.98-.833-2.75 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
      </div>
      <div>
        <p class="text-zinc-400 text-xs">Worst Performer</p>
      </div>
    </div>
    <div>
      <h3 class="text-white font-semibold text-lg">MA</h3>
      <p class="text-red-400 font-semibold">-0.30%</p>
      <p class="text-zinc-400 text-xs">-฿914.93</p>
    </div>
  </section>

  <!-- Total Assets -->
  <section class="bg-zinc-900 border border-zinc-700/50 rounded-lg p-4">
    <div class="flex items-center gap-2 mb-2">
      <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
        <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      </div>
      <div>
        <p class="text-zinc-400 text-xs">Total Assets</p>
      </div>
    </div>
    <div>
      <h3 class="text-white font-semibold text-lg">23</h3>
      <p class="text-emerald-400 text-sm">Holdings</p>
      <p class="text-zinc-400 text-xs">20 Profitable</p>
    </div>
  </section>

  <!-- Cash Position -->
  <section class="bg-zinc-900 border border-zinc-700/50 rounded-lg p-4">
    <div class="flex items-center gap-2 mb-2">
      <div class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
        <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          />
        </svg>
      </div>
      <div>
        <p class="text-zinc-400 text-xs">Cash Position</p>
      </div>
    </div>
    <div>
      <h3 class="text-white font-semibold text-lg">฿198.5K</h3>
      <p class="text-emerald-400 text-sm">USD Cash</p>
      <p class="text-zinc-400 text-xs">16.9% of portfolio</p>
    </div>
  </section>
</div>
