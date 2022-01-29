<script lang="ts">
import Channelbar from '$lib/components/Channelbar.svelte';
import Memberbar from '$lib/components/Memberbar.svelte';

    import Navbar from '$lib/components/Navbar.svelte';

    import { onMount } from 'svelte';

    import '../../app.css';
    
    onMount(() => {});
</script>

<div class="bg-dark_primary h-screen w-screen flex flex-row">
    <Navbar />
    <Channelbar />    
    <div class="">
        <slot />
    </div>
    <div class="flex justify-self-end">
    <Memberbar />
    </div>
</div>
