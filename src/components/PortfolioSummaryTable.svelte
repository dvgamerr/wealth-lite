<script>
  import { holdings, categories } from '../lib/data/mock.js'
  import { fmtTHB } from '../lib/utils/format.js'

  // Create portfolio summary based on the image data
  const portfolioSummary = [
    {
      category: 'DIME',
      weight: 47.45,
      cost: 469673.91,
      value: 484043.24,
      pnl: 14369.33,
      pnlPct: 3.06,
    },
    {
      category: 'SSF',
      weight: 12.14,
      cost: 120140.0,
      value: 140385.83,
      pnl: 20245.83,
      pnlPct: 16.85,
    },
    {
      category: 'GOLD',
      weight: 40.41,
      cost: 400000.0,
      value: 562130.48,
      pnl: 162130.48,
      pnlPct: 40.53,
    },
  ]

  // Add total row
  const totalRow = {
    category: 'Total',
    weight: 100.0,
    cost: 989813.91,
    value: 1186559.55,
    pnl: 196745.64,
    pnlPct: 19.88,
  }

  const allRows = [...portfolioSummary, totalRow]
</script>

<section class="card h-full">
  <div class="flex items-center justify-between mb-4">
    <div class="card-title">Portfolio Summary</div>
  </div>

  <div class="overflow-x-auto">
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-blue-600 text-white">
          <th class="text-center py-2 px-2 font-medium text-sm">Asset</th>
          <th class="text-center py-2 px-2 font-medium text-sm">Weight</th>
          <th class="text-center py-2 px-2 font-medium text-sm">Cost</th>
          <th class="text-center py-2 px-2 font-medium text-sm">Value</th>
          <th class="text-center py-2 px-2 font-medium text-sm">P&L</th>
          <th class="text-center py-2 px-2 font-medium text-sm">P&L (%)</th>
        </tr>
      </thead>
      <tbody>
        {#each allRows as row}
          <tr class="border-b border-zinc-200 dark:border-zinc-700 {row.category === 'Total' ? 'font-semibold bg-zinc-50 dark:bg-zinc-800' : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50'}">
            <td class="text-center py-2 px-2 font-medium">{row.category}</td>
            <td class="text-center py-2 px-2 font-numbers">{row.weight.toFixed(2)}%</td>
            <td class="text-right py-2 px-2 font-numbers">{row.cost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            <td class="text-right py-2 px-2 font-numbers">{row.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
            <td class="text-right py-2 px-2 font-numbers {row.pnl >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">
              {row.pnl.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </td>
            <td class="text-center py-2 px-2 font-numbers {row.pnlPct >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">
              {row.pnlPct.toFixed(2)}%
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
