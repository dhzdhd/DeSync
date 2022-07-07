<script lang="ts">
  import { fade, slide } from 'svelte/transition';

  import '../../app.css';

  export let errorMessage: string;
</script>

<div
  in:slide|local={{ duration: 200 }}
  out:fade|local
  class="flex items-center justify-center rounded-2xl bg-red-500 p-5 text-white"
>
  {errorMessage}
</div>
