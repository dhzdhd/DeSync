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

<div class="bg-dark_primary h-screen w-screen flex flex-row py-5 gap-1">
  <Navbar />
  <Channelbar />
  <div class="flex flex-col items-start grow-[1] min-w-[40rem] gap-3">
    <Topbar />
    <div class="flex flex-col flex-grow-[1] w-full py-5 rounded-2xl bg-dark_secondary">
      <slot />
      <Messagebar />
    </div>
  </div>
  <Memberbar />
</div>
