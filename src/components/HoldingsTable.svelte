<script>
  import { fmtTHB, fmtPct } from '../lib/utils/format.js'
  import { by, toggle } from '../lib/utils/sort.js'
  export let rows = []

  let sort = { key: 'asset', dir: 'asc' }
  $: sorted = [...rows].sort(by(sort.key, sort.dir))

  const label = (k) => (sort.key === k ? (sort.dir === 'asc' ? '↑' : '↓') : '')
</script>

<section class="card overflow-hidden">
  <table class="w-full text-sm">
    <thead>
      <tr class="text-left text-zinc-500 dark:text-zinc-400 select-none">
        <th class="py-2 px-3 cursor-pointer" on:click={() => (sort = toggle(sort, 'asset'))}>Asset {label('asset')}</th>
        <th class="py-2 px-3 cursor-pointer" on:click={() => (sort = toggle(sort, 'price'))}>Price {label('price')}</th>
        <th class="py-2 px-3 cursor-pointer" on:click={() => (sort = toggle(sort, 'value'))}>Value {label('value')}</th>
        <th class="py-2 px-3 cursor-pointer" on:click={() => (sort = toggle(sort, 'pnl'))}>Gain/Loss {label('pnl')}</th>
        <th class="py-2 px-3 cursor-pointer" on:click={() => (sort = toggle(sort, 'pct'))}>% {label('pct')}</th>
      </tr>
    </thead>
    <tbody>
      {#each sorted as h}
        <tr class="border-t border-zinc-100 dark:border-zinc-800/80">
          <td class="py-2 px-3 font-medium whitespace-nowrap">{h.symbol}</td>
          <td class="py-2 px-3 font-numbers">{fmtTHB(h.price)}</td>
          <td class="py-2 px-3 font-numbers">{fmtTHB(h.value)}</td>
          <td class="py-2 px-3 font-numbers {h.pnl >= 0 ? 'text-gain' : 'text-loss'}">{fmtTHB(h.pnl)}</td>
          <td class="py-2 px-3 font-numbers {h.pct >= 0 ? 'text-gain' : 'text-loss'}">{fmtPct(h.pct)}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>
