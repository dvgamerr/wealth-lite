<script lang="ts">
  import { dividendSummary } from '../lib/data/mock'
  import { fmtTHB, fmtDate } from '../lib/utils/format'
  const rows = dividendSummary()
</script>

<section class="card h-full">
  <div class="flex items-center justify-between">
    <div class="card-title">Dividend Tracker</div>
  </div>
  <div class="mt-3 space-y-3">
    {#each rows as r}
      <div class="flex items-center justify-between text-sm">
        <div class="truncate">
          <div class="font-medium truncate">{r.symbol} · {r.name}</div>
          <div class="text-zinc-500 dark:text-zinc-400">ล่าสุด: {r.last ? fmtDate(r.last.date) : '-'}</div>
        </div>
        <div class="text-right">
          <div>YTD: <span class="font-numbers">{fmtTHB(r.ytd)}</span></div>
          <div class="text-zinc-500 dark:text-zinc-400">ประมาณทั้งปี: <span class="font-numbers">{fmtTHB(r.estAnnual)}</span></div>
          <div class="text-zinc-500 dark:text-zinc-400">รอบถัดไป: <span class="font-numbers">{r.nextDate ? fmtDate(r.nextDate) : '-'}</span></div>
        </div>
      </div>
    {/each}
  </div>
</section>
