<script lang="ts">
  import { messages } from '$lib/stores/message';
  import type { Message } from '$lib/backend/interface';
  import { convertMessage } from '$lib/backend/converter';
  import { userDetails } from '$lib/backend/gun';

  let message: string;

  const getDate = (): string => {
    let today = new Date();
    let time = today.toUTCString();
    return `${time.slice(0, time.length - 7)}`;
  };

  const submitMessage = () => {
    if (!message.trim()) {
      return;
    }

    $messages.push({ content: message, author: $userDetails.username!, timestamp: getDate() });
    $messages = $messages;

    message = '';
  };

  const handleEnterPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      submitMessage();
    }
  };
</script>

<svelte:window on:keydown={handleEnterPress} />

<div class="mx-5 flex h-12 flex-row items-center justify-evenly gap-3 text-white">
  <!-- Add button -->
  <button class="aspect-square h-full rounded-2xl bg-dark_tertiary">
    <span class="fas fa-add" />
  </button>
  <!-- Message input -->
  <input
    on:input={() => (message = convertMessage(message))}
    bind:value={message}
    placeholder="Type something ..."
    class="flex h-full flex-grow-[1] rounded-2xl border-2 border-dark_accent bg-dark_tertiary px-2 font-normal"
    type="text"
  />
  <!-- Send button -->
  <button
    on:click={submitMessage}
    class="aspect-square h-full rounded-2xl bg-dark_accent shadow-sm shadow-dark_accent"
  >
    <span class="fas fa-paper-plane" />
  </button>
</div>
