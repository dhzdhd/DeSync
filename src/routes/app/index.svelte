<script lang="ts">
  import Message from '$lib/components/Message.svelte';

  import { messages } from '$lib/stores/message';

  import '../../app.css';
</script>

<div
  class="flex flex-grow-[1] -order-0 basis-1 justify-end flex-col gap-2 items-end py-3 overflow-y-auto"
>
  {#each $messages as item}
    <Message message={{ content: item.content, isSelf: item.isSelf, timeStamp: item.timeStamp }} />
  {/each}
</div>
