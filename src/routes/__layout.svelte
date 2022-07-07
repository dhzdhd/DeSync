<script lang="ts">
  import '../app.css';
  import '$lib/backend/gun';
  import { onMount } from 'svelte';
  import { initGun } from '$lib/backend/gun';

  onMount(() => {
    initGun();
  });
</script>

<div class="flex min-h-screen w-screen bg-dark_primary">
  <slot />
</div>
