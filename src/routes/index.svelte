<script lang="ts">
  import { goto } from '$app/navigation';

  import '../app.css';
</script>

<button on:click={() => goto('/login')}> LOGIN </button>
