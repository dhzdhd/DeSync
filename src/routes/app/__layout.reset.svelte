<script lang="ts">
import Channelbar from '$lib/components/Channelbar.svelte';
import Memberbar from '$lib/components/Memberbar.svelte';
import Message from '$lib/components/Message.svelte';
import Messagebar from '$lib/components/Messagebar.svelte';

    import Navbar from '$lib/components/Navbar.svelte';
import Topbar from '$lib/components/Topbar.svelte';
    import { messages } from '$lib/stores/message';
    import { onMount } from 'svelte';

    import '../../app.css';

    onMount(() => {});
</script>

<div class="bg-dark_primary h-screen w-screen flex flex-row pt-10 pb-5 gap-3">
    <Navbar />
    <Channelbar />
    <div class="flex flex-col items-start grow-[1] min-w-[40rem] gap-7">
        <Topbar />
        <div class="flex flex-col w-full max-h-screen py-5 flex-grow-[1] rounded-2xl bg-dark_secondary">
            <div class="flex flex-grow-[1] flex-col gap-2 justify-end items-end py-3 overflow-clip overflow-y-scroll">
                <!-- <slot /> -->
                {#each $messages as item}
                    <Message message={{content: item.content, isSelf: item.isSelf}}/>
                {/each}
            </div>
            <Messagebar />
        </div>
    </div>
    <div class="">
    <Memberbar />
    </div>
</div>
