<script lang="ts">
  import { goto } from '$app/navigation';
  import { user } from '$lib/backend/gun';
  import ErrorDialog from '$lib/components/ErrorDialog.svelte';

  import '../app.css';

  let username: string;
  let password: string;
  let error: string;

  $: if (error) {
    setTimeout(() => {
      error = '';
    }, 1000);
  }

  const login = () => {
    user.auth(username, password, (err) => {
      error = err.err;
    });

    if (!error) goto('/app');
  };

  const register = () => {
    user.create(username, password, (err) => {
      if (err) {
        error = err.err;
      } else {
        login();
      }
    });

    if (!error) goto('/app');
  };
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="fixed flex h-screen w-screen items-center justify-center">
  <!-- Login form -->
  <div class="form w-[25rem] rounded-2xl bg-dark_secondary p-5 text-white shadow-2xl">
    <form class="top mb-5 flex flex-col justify-center gap-5 px-5">
      <span class="mb-10 text-4xl">Login</span>
      <input
        bind:value={username}
        placeholder="Username"
        class="h-14 rounded-xl border border-slate-200 bg-dark_secondary px-2"
        type="text"
      />
      <input
        bind:value={password}
        placeholder="Password"
        class="h-14 rounded-xl border border-slate-200 bg-dark_secondary px-2"
        type="password"
      />
    </form>
    <div class="flex flex-row items-center justify-center gap-5 rounded-b-2xl">
      <button
        on:click={login}
        class="mt-5 h-14 w-1/2 rounded-xl bg-dark_accent text-lg shadow-lg active:shadow-none"
        type="submit"
      >
        <span>Login</span>
      </button>
      <button
        on:click={register}
        class="mt-5 h-14 w-1/2 rounded-xl bg-dark_accent text-lg shadow-lg active:shadow-none"
        type="submit"
      >
        <span>Sign Up</span>
      </button>
    </div>
    <!-- Error modal -->
    {#if error}
      <div class="mt-5"><ErrorDialog errorMessage={error} /></div>
    {/if}
  </div>
</div>
