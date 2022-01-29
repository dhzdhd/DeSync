<script lang="ts">
    import '../app.css';
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

<div class="h-screen w-screen fixed flex items-center justify-center">
    <div class="p-5 form rounded-2xl shadow-2xl bg-dark_secondary text-white">
        <form class="top flex flex-col justify-center gap-5 px-5 mb-5">
            <span class="text-4xl mb-10">Login</span>
            <input class="bg-dark_secondary border border-slate-200 h-14 rounded-xl" type="text">
            <input class="bg-dark_secondary border border-slate-200 h-14 rounded-xl" type="text">
        </form>
        <div class="flex items-center justify-center rounded-b-2xl">
            <button class="w-1/2 h-14 mt-5 shadow-lg active:shadow-none rounded-xl bg-dark_accent" type="submit">
                <span>Login</span>
            </button>
        </div>
    </div>
</div>