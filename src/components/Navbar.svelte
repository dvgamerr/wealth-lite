<script lang="ts">
  import { onMount } from 'svelte'
  let dark = true
  const toggle = () => {
    dark = !dark
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('wf-theme', dark ? 'dark' : 'light')
  }
  onMount(() => {
    const saved = localStorage.getItem('wf-theme')
    dark = saved ? saved === 'dark' : true
    if (dark) document.documentElement.classList.add('dark')
  })
</script>

<nav class="sticky top-0 z-20 border-b border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur bg-white/70 dark:bg-zinc-900/70">
  <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
    <div class="flex items-center gap-2">
      <div class="w-2 h-2 rounded-full bg-brand"></div>
      <span class="font-semibold tracking-tight">WealthFlow</span>
      <span class="badge ml-2">Portfolio Finance</span>
    </div>
    <button class="px-3 py-1.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800" on:click={toggle} aria-label="Toggle theme">
      {dark ? 'Dark' : 'Light'}
    </button>
  </div>
</nav>
