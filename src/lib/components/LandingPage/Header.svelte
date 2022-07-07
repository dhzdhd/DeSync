<script lang="ts">
  import { goto } from '$app/navigation';
</script>

<header class="fixed flex h-20 w-screen flex-row items-center justify-between px-5">
  <span class="text-3xl text-white">DeSync</span>
  <div class="flex flex-row gap-2">
    <button on:click={() => goto('/login')} class="rounded-lg bg-white px-5 py-2 text-slate-800">
      Login
    </button>
  </div>
</header>
