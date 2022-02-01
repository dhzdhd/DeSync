<script lang="ts">
import { scale, fade } from "svelte/transition";

    let showMenu = false;
</script>

<!-- Topbar -->
<div class="flex flex-row justify-between w-full h-12 max-h-[3rem] text-white px-2">
    <!-- Avatar + Profile -->
    <div class="flex flex-row gap-3">
        <!-- Avatar -->
        <button on:click={() => showMenu = !showMenu} class="h-full aspect-square rounded-full border-2 shadow-sm shadow-green-500 border-green-500">
            <img alt="pfp" src="https://avatars.dicebear.com/api/bottts/Shroomz.svg">
        </button>
        <!-- Profile -->
        <div class="flex flex-col gap-0.5">
            <span class="text-xl">Shroomz</span>
            <span class="text-sm font-normal">Online</span>
        </div>
        <!-- Profile menu -->
        {#if showMenu}
            <div in:scale out:fade={{ duration: 150 }} class="fixed mt-[4.5rem] ml-1 w-[12rem] py-5 flex items-center bg-dark_tertiary rounded-2xl">
                <button class="w-full">Sign out</button>
            </div>
        {/if}
    </div>
    <!-- Buttons -->
    <div class="flex items-center h-full aspect-square justify-center gap-5 text-xl">
        <!-- Menu -->
        <button>
            <span class="fas fa-bars"></span>
        </button>
        <!-- Quit -->
        <button>
            <span class="fas fa-power-off"></span>
        </button>
    </div>
</div>
