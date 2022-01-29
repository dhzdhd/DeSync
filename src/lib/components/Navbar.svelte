<script lang="ts">
import { guildArr } from '$lib/stores/guild';

    import '../../app.css';
    import NavbarItem from './NavbarItem.svelte';
    
    let guildArr = [1, 2, 3, 4, 5];

</script>

<nav class="h-full w-16 bg-red-400 flex flex-col items-center gap-4 py-5">
    {#each guildArr as item}
        <NavbarItem />     
    {/each}
</nav>
