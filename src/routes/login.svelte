<script lang="ts">
  import { goto } from '$app/navigation';
  import { user } from '$lib/backend/gun';
  import ErrorDialog from '$lib/components/ErrorDialog.svelte';

  import '../app.css';

  let username: string;
  let password: string;
  let error: string;

  const login = () => {
    user.auth(username, password, (err) => {
      console.log(err);
      error = err.toString();

      if (error) {
        return;
      }
    });
    goto('/app');
  };

  const register = () => {
    user.create(username, password, (err) => {
      if (err) {
        error = err.toString();
      } else {
        login();
      }
      return;
    });
    goto('/app');
  };
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<div class="h-screen w-screen fixed flex items-center justify-center">
  <!-- Login form -->
  <div class="p-5 w-[25rem] form rounded-2xl shadow-2xl bg-dark_secondary text-white">
    <form class="top flex flex-col justify-center gap-5 px-5 mb-5">
      <span class="text-4xl mb-10">Login</span>
      <input
        bind:value={username}
        placeholder="Username"
        class="bg-dark_secondary border border-slate-200 h-14 rounded-xl px-2"
        type="text"
      />
      <input
        bind:value={password}
        placeholder="Password"
        class="bg-dark_secondary border border-slate-200 h-14 rounded-xl px-2"
        type="text"
      />
    </form>
    <div class="flex flex-row gap-5 items-center justify-center rounded-b-2xl">
      <button
        on:click={login}
        class="w-1/2 h-14 mt-5 shadow-lg active:shadow-none rounded-xl bg-dark_accent text-lg"
        type="submit"
      >
        <span>Login</span>
      </button>
      <button
        on:click={register}
        class="w-1/2 h-14 mt-5 shadow-lg active:shadow-none rounded-xl bg-dark_accent text-lg"
        type="submit"
      >
        <span>Sign Up</span>
      </button>
    </div>
    <!-- Error modal -->
    {#if error !== ''}
      <ErrorDialog errorMessage={error} />
    {/if}
  </div>
</div>
