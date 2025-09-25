<script lang="ts">
  import { categories, holdings } from '../lib/data/mock'
  const byCat = categories.map((c) => ({ key: c.key, label: c.label, value: holdings.filter((h) => h.category === c.key).reduce((s, h) => s + h.value, 0) }))
  const total = byCat.reduce((s, c) => s + c.value, 0) || 1
</script>

<section class="card">
  <div class="card-title">Asset Allocation</div>
  <div class="mt-3 space-y-2">
    {#each byCat as c}
      <div>
        <div class="flex justify-between text-sm mb-1">
          <span class="truncate">{c.label}</span>
          <span class="font-numbers">{Math.round((c.value / total) * 100)}%</span>
        </div>
        <div class="h-2 w-full bg-zinc-200/60 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div class="h-full bg-brand" style={`width:${(c.value / total) * 100}%`}></div>
        </div>
      </div>
    {/each}
  </div>
</section>
