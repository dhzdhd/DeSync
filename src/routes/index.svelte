<script lang="ts">
  import { goto } from '$app/navigation';

  import '../app.css';
</script>

<button
  on:click={() => goto('/login')}
  class="text-white text-6xl bg-dark_secondary p-5 rounded-2xl"
>
  LOGIN
</button>
