<script lang="ts">
  import '../../app.css';
  import type { Message } from '$lib/backend/interface';
  import { fly } from 'svelte/transition';
  import { user, userDetails } from '$lib/backend/gun';

  export let message: Message;
</script>

<!-- Message container -->
<div
  in:fly={{ x: 100 }}
  class="mx-5 flex min-w-[20rem] flex-col items-center text-white {message.author ==
  $userDetails.username
    ? 'bg-dark_accent'
    : 'bg-dark_secondary'} rounded-2xl rounded-br-sm"
>
  <!-- Timestamp -->
  <span class="ml-5 flex self-start text-[0.6rem] font-light">{message.timestamp}</span>
  <!-- Message -->
  <span class="w-full break-all px-5 py-1 text-right font-normal">{message.content}</span>
</div>
