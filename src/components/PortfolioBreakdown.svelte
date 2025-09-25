<script lang="ts">
  import { categories, holdings } from '../lib/data/mock'
  const items = categories.map((c) => ({ label: c.label, count: holdings.filter((h) => h.category === c.key).length }))
</script>

<section class="card">
  <div class="card-title">Portfolio Breakdown</div>
  <div class="mt-3 grid grid-cols-2 gap-2">
    {#each items as it}
      <div class="rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 flex items-center justify-between">
        <span class="text-sm truncate">{it.label}</span>
        <span class="badge font-numbers">{it.count}</span>
      </div>
    {/each}
  </div>
</section>
