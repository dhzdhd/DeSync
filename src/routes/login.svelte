<script lang="ts">
    import '../app.css';
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<div class="form absolute z-20 h-5/6 w-5/6 rounded-2xl bg-slate-300 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70 shadow-2xl">
    {#if document.getElementsByClassName('form')}
         <!-- content here -->
    {:else}
         <!-- else content here -->
    {/if}
</div>