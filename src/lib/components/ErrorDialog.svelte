<script lang="ts">
  import '../../app.css';

  export let errorMessage: string;
</script>

<div class="flex items-center justify-center p-5 m-5 rounded-2xl bg-red-500 text-white">
  {errorMessage}
</div>
