<script lang="ts">
  import '../../app.css';
  import ChannelbarItem from './ChannelbarItem.svelte';
</script>

<nav
  class="h-full w-64 min-w-[16rem] flex flex-col overflow-hidden overflow-y-auto items-center gap-4 px-5 text-white"
>
  <span class="text-left w-full sticky">Friends</span>
  <ChannelbarItem />
  <ChannelbarItem />
  <ChannelbarItem />
  <ChannelbarItem />
  <ChannelbarItem />
  <ChannelbarItem />
  <ChannelbarItem />
  <ChannelbarItem />
</nav>
