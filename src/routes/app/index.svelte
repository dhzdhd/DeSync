<script lang="ts">
  import Message from '$lib/components/Message.svelte';

  import { messages } from '$lib/stores/message';

  import '../../app.css';
</script>

<div
  class="-order-0 flex flex-grow-[1] basis-1 flex-col items-end justify-end gap-2 overflow-y-auto py-3"
>
  {#each $messages as item}
    <Message message={{ content: item.content, author: item.author, timestamp: item.timestamp }} />
  {/each}
</div>
