<script lang="ts">
import Channelbar from '$lib/components/Channelbar.svelte';
import Memberbar from '$lib/components/Memberbar.svelte';

    import Navbar from '$lib/components/Navbar.svelte';
import Topbar from '$lib/components/Topbar.svelte';

    import { onMount } from 'svelte';

    import '../../app.css';
    
    onMount(() => {});
</script>

<div class="bg-dark_primary h-screen w-screen flex flex-row pt-10 pb-5">
    <Navbar />
    <Channelbar />    
    <div class="flex flex-col items-start grow-[1] min-w-[40rem] gap-7">
        <Topbar />
        <div class="flex flex-col w-full px-10 py-5 flex-grow-[1] rounded-2xl bg-dark_secondary">
            <div class="flex">

            </div>
            
        </div>    
    </div>
    <div class="">
    <Memberbar />
    </div>
</div>
