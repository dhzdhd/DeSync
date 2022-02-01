<script lang="ts">
    import '../../app.css';
    import type { Message } from '$lib/stores/message';
    import { fly } from 'svelte/transition';

    export let message: Message;
</script>

<!-- Message container -->
<div in:fly={{ x: 100 }} class="flex items-center mx-5 min-w-[20rem] text-white {message.isSelf ? 'bg-dark_accent': 'bg-dark_secondary'} rounded-2xl rounded-br-sm">
    <!-- Timestamp -->
    <span class="text-[0.6rem] font-light ml-4 self-start">{message.timeStamp}</span>
    <!-- Message -->
    <span class="w-full text-right px-5 py-2 font-normal break-all">{message.content}</span>
</div>
