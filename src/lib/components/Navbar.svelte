<script lang="ts">
  // import { guildArr } from '$lib/stores/guild';

  import '../../app.css';
  import NavbarItem from './NavbarItem.svelte';

  let guildArr = [1, 2, 3, 4, 5];
</script>

<nav class="flex h-full min-w-[3rem] flex-col items-center gap-4">
  {#each guildArr as item }
    <NavbarItem />
  {/each}
</nav>
