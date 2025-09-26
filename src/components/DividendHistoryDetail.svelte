<script>
  import { yearlyDividendSummary } from '../lib/data/mock.js'
  import { fmtTHB, fmtDate } from '../lib/utils/format.js'

  const yearlyData = yearlyDividendSummary()
  let selectedYear = yearlyData.length > 0 ? yearlyData[0].year : null

  $: selectedYearData = yearlyData.find((y) => y.year === selectedYear)
  $: previousYearData = yearlyData.find((y) => y.year === selectedYear - 1)
  $: yearOverYearChange = previousYearData ? ((selectedYearData.total - previousYearData.total) / previousYearData.total) * 100 : null

  // Calculate total dividends across all years
  $: totalAllYears = yearlyData.reduce((sum, year) => sum + year.total, 0)
  $: averagePerYear = yearlyData.length > 0 ? totalAllYears / yearlyData.length : 0
</script>

<div class="space-y-6">
  <!-- Overall Summary -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="card">
      <div class="card-title">Total All Time</div>
      <div class="card-value text-green-600 dark:text-green-400">{fmtTHB(totalAllYears)}</div>
    </div>
    <div class="card">
      <div class="card-title">Average Per Year</div>
      <div class="card-value">{fmtTHB(averagePerYear)}</div>
    </div>
    <div class="card">
      <div class="card-title">Years Tracked</div>
      <div class="card-value">{yearlyData.length}</div>
    </div>
  </div>

  <!-- Year Selector and Details -->
  <section class="card">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Details by Year</h2>
      <select
        bind:value={selectedYear}
        class="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {#each yearlyData as yearData}
          <option value={yearData.year}>Year {yearData.year}</option>
        {/each}
      </select>
    </div>

    {#if selectedYearData}
      <!-- Year Summary -->
      <div class="mb-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl border border-green-200 dark:border-green-800">
        <div class="flex items-center justify-between mb-2">
          <div>
            <div class="text-2xl font-bold text-green-700 dark:text-green-300">
              {fmtTHB(selectedYearData.total)}
            </div>
            <div class="text-sm text-zinc-600 dark:text-zinc-400">
              from {selectedYearData.stocks.length} holdings
            </div>
          </div>
          {#if yearOverYearChange !== null}
            <div class="text-right">
              <div class="text-sm text-zinc-500 dark:text-zinc-400">vs Previous Year</div>
              <div class="text-lg font-semibold {yearOverYearChange > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">
                {yearOverYearChange > 0 ? '+' : ''}{yearOverYearChange.toFixed(1)}%
              </div>
            </div>
          {/if}
        </div>
      </div>

      <!-- Detailed Stock-by-Stock Breakdown -->
      <div class="space-y-6">
        {#each selectedYearData.stocks as stock, index}
          <div class="border border-zinc-200 dark:border-zinc-700 rounded-xl p-4">
            <!-- Stock Header -->
            <div class="flex items-center justify-between mb-4 pb-3 border-b border-zinc-200 dark:border-zinc-700">
              <div>
                <h3 class="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {stock.symbol} · {stock.name}
                </h3>
                <div class="text-sm text-zinc-500 dark:text-zinc-400">
                  {stock.count} payments • Avg {fmtTHB(stock.total / stock.count)}/payment
                </div>
              </div>
              <div class="text-right">
                <div class="text-xl font-bold text-green-600 dark:text-green-400">
                  {fmtTHB(stock.total)}
                </div>
                <div class="text-sm text-zinc-500 dark:text-zinc-400">
                  {((stock.total / selectedYearData.total) * 100).toFixed(1)}% of total
                </div>
              </div>
            </div>

            <!-- Individual Dividend Payments -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {#each stock.dividends as dividend}
                <div class="bg-zinc-50 dark:bg-zinc-800 rounded-lg p-3">
                  <div class="flex justify-between items-center">
                    <div class="text-sm text-zinc-600 dark:text-zinc-400">
                      {fmtDate(dividend.date)}
                    </div>
                    <div class="font-semibold font-numbers text-zinc-900 dark:text-zinc-100">
                      {fmtTHB(dividend.amountTHB)}
                    </div>
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>

      <!-- Monthly Breakdown Chart (if current year) -->
      {#if selectedYear === new Date().getFullYear()}
        <div class="mt-8 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl">
          <h3 class="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Monthly Chart {selectedYear}</h3>
          <div class="grid grid-cols-12 gap-1 h-32">
            {#each { length: 12 } as _, month}
              {@const monthDividends = selectedYearData.stocks.flatMap((s) => s.dividends.filter((d) => new Date(d.date).getMonth() === month))}
              {@const monthTotal = monthDividends.reduce((sum, d) => sum + d.amountTHB, 0)}
              {@const maxMonth = Math.max(
                ...Array.from({ length: 12 }, (_, m) => selectedYearData.stocks.flatMap((s) => s.dividends.filter((d) => new Date(d.date).getMonth() === m)).reduce((sum, d) => sum + d.amountTHB, 0)),
              )}
              {@const heightPercent = maxMonth > 0 ? (monthTotal / maxMonth) * 100 : 0}

              <div class="flex flex-col items-center">
                <div class="flex-1 flex items-end w-full">
                  <div
                    class="w-full bg-green-500 dark:bg-green-400 rounded-t transition-all duration-300 min-h-[2px]"
                    style="height: {heightPercent}%"
                    title="{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month]}: {fmtTHB(monthTotal)}"
                  ></div>
                </div>
                <div class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month]}
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    {:else}
      <div class="text-center text-zinc-500 dark:text-zinc-400 py-12">No dividend data available for selected year</div>
    {/if}
  </section>
</div>
