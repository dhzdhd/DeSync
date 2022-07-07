<script lang="ts">
  import '../../app.css';

  import Channelbar from '$lib/components/Channelbar.svelte';
  import Memberbar from '$lib/components/Memberbar.svelte';
  import Message from '$lib/components/Message.svelte';
  import Messagebar from '$lib/components/Messagebar.svelte';

  import Navbar from '$lib/components/Navbar.svelte';
  import Topbar from '$lib/components/Topbar.svelte';
  import { messages } from '$lib/stores/message';
  import { onMount } from 'svelte';
  import { initGun } from '$lib/backend/gun';

  onMount(() => {
    initGun();
  });
</script>

<div class="flex h-screen w-screen flex-row gap-1 bg-dark_primary py-5">
  <Navbar />
  <Channelbar />
  <div class="flex min-w-[40rem] grow-[1] flex-col items-start gap-3">
    <Topbar />
    <div class="flex w-full flex-grow-[1] flex-col rounded-2xl bg-dark_secondary py-5">
      <slot />
      <Messagebar />
    </div>
  </div>
  <Memberbar />
</div>
