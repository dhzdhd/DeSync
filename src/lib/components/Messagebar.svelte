<script lang="ts">
    import { messages } from "$lib/stores/message";
    import type { Message } from '$lib/stores/message';
import { convertMessage } from "$lib/backend/converter";


    let message: string;

    const submitMessage = () => {
        if (!message.trim()) {
            return;
        }

        $messages.push({content: message, isSelf: true});
        $messages = $messages;

        message = '';
    };

    const handleEnterPress = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            submitMessage();
        }
    };
</script>

<svelte:window on:keydown={handleEnterPress}/>

<div class="flex flex-row items-center h-12 mx-5 justify-evenly text-white gap-3">
    <!-- Add button -->
    <button class="bg-dark_tertiary h-full aspect-square rounded-2xl">
        <span class="fas fa-add"></span>
    </button>
    <!-- Message input -->
    <input on:input={() => message = convertMessage(message)} bind:value={message} placeholder="Type something ..." class="flex font-normal flex-grow-[1] h-full rounded-2xl bg-dark_tertiary px-2 border-2 border-dark_accent" type="text">
    <!-- Send button -->
    <button on:click={submitMessage} class="bg-dark_accent shadow-sm shadow-dark_accent h-full aspect-square rounded-2xl">
        <span class="fas fa-paper-plane"></span>
    </button>
</div>
