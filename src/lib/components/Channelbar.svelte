<script lang="ts">
  import '../../app.css';
  import ChannelbarItem from './ChannelbarItem.svelte';
</script>

<nav
  class="flex h-full w-64 min-w-[16rem] flex-col items-center gap-4 overflow-hidden overflow-y-auto px-5 text-white"
>
  <span class="sticky w-full text-left">Friends</span>
  <ChannelbarItem />
  <ChannelbarItem />
  <ChannelbarItem />
  <ChannelbarItem />
  <ChannelbarItem />
  <ChannelbarItem />
  <ChannelbarItem />
  <ChannelbarItem />
</nav>
