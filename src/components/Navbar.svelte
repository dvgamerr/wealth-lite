<script>
  import { onMount } from 'svelte'

  // Props from parent Astro page
  export let currentPage = 'dashboard'
  export let pageTitle = 'Dashboard'

  let dark = true

  const toggle = () => {
    dark = !dark
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('wf-theme', dark ? 'dark' : 'light')
  }

  const isHomePage = () => currentPage === 'dashboard'

  onMount(() => {
    const saved = localStorage.getItem('wf-theme')
    dark = saved ? saved === 'dark' : true
    if (dark) document.documentElement.classList.add('dark')
  })
</script>

<nav class="sticky top-0 z-20 border-b border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur bg-white/70 dark:bg-zinc-900/70">
  <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-3">
        {#if !isHomePage()}
          <!-- Back Button with Text -->
          <a href="/" class="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors group" title="Back to Dashboard" aria-label="Back to Dashboard">
            <svg class="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span class="text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">← Dashboard</span>
          </a>
        {/if}

        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-brand"></div>
          <span class="font-semibold tracking-tight">{pageTitle}</span>
          <span class="badge ml-2">Portfolio Finance</span>
        </div>
      </div>
    </div>

    <button class="px-3 py-1.5 rounded-xl border border-zinc-300 dark:border-zinc-700 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800" on:click={toggle} aria-label="Toggle theme">
      {dark ? 'Dark' : 'Light'}
    </button>
  </div>
</nav>
