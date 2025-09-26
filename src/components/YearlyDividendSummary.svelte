<script>
  import { yearlyDividendSummary } from '../lib/data/mock.js'
  import { fmtTHB, fmtDate } from '../lib/utils/format.js'

  const yearlyData = yearlyDividendSummary()
  let selectedYear = yearlyData.length > 0 ? yearlyData[0].year : null

  $: selectedYearData = yearlyData.find((y) => y.year === selectedYear)
  $: previousYearData = yearlyData.find((y) => y.year === selectedYear - 1)
  $: yearOverYearChange = previousYearData ? ((selectedYearData.total - previousYearData.total) / previousYearData.total) * 100 : null
</script>

<section class="card h-full">
  <div class="flex items-center justify-between mb-4">
    <div class="card-title">Annual Dividend Summary</div>
    <select bind:value={selectedYear} class="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded-md text-sm">
      {#each yearlyData as yearData}
        <option value={yearData.year}>{yearData.year}</option>
      {/each}
    </select>
  </div>

  {#if selectedYearData}
    <div class="mb-4 p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg">
      <div class="text-lg font-semibold">
        Total {selectedYear}: <span class="font-numbers text-green-600 dark:text-green-400">{fmtTHB(selectedYearData.total)}</span>
      </div>
      <div class="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
        from {selectedYearData.stocks.length} holdings
        {#if yearOverYearChange !== null}
          <span class="ml-2 font-medium {yearOverYearChange > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">
            {yearOverYearChange > 0 ? '+' : ''}{yearOverYearChange.toFixed(1)}%
          </span>
          <span class="text-xs">vs prev year</span>
        {/if}
      </div>
    </div>

    <div class="space-y-4 max-h-96 overflow-y-auto">
      {#each selectedYearData.stocks as stock}
        <div class="border-l-2 border-zinc-200 dark:border-zinc-700 pl-3">
          <div class="flex items-center justify-between mb-2">
            <div>
              <div class="font-medium">{stock.symbol} · {stock.name}</div>
              <div class="text-sm text-zinc-500 dark:text-zinc-400">
                {stock.count} payments - Total <span class="font-numbers font-medium text-green-600 dark:text-green-400">{fmtTHB(stock.total)}</span>
              </div>
            </div>
          </div>

          <div class="space-y-1">
            {#each stock.dividends as dividend}
              <div class="flex justify-between text-sm text-zinc-600 dark:text-zinc-300">
                <span>{fmtDate(dividend.date)}</span>
                <span class="font-numbers">{fmtTHB(dividend.amountTHB)}</span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <div class="text-center text-zinc-500 dark:text-zinc-400 py-8">No dividend data available</div>
  {/if}
</section>
