<script>
  import { goto } from '$app/navigation';
</script>

<svelte:head>
  <title>Error!</title>
</svelte:head>

<div
  class="flex h-screen w-screen flex-col items-center justify-center gap-5 text-white dark:text-slate-900"
>
  <h1 class="text-7xl">404 Error</h1>
  <h2 class="text-2xl">Page not found!</h2>
  <button on:click={() => goto('/')} class="mt-10 rounded-lg bg-white px-5 py-2 text-slate-800">
    Go back <span class="fas fa-arrow-right" />
  </button>
</div>
