<script>
    import { Protagonista } from "./persons/Protagonista";
    import { Boss1 } from "./persons/Liliane";
    import { Boss2 } from "./persons/David";
    import { Boss3 } from "./persons/Ranieri";
    import { Boss4 } from "./persons/Allam";
    import { estado } from "./Estado";
    import { trocarestadodojogo } from "./Estado";
    import BatalhaOne from "./batles/BatalhaOne.svelte";
</script>

<svelte:head />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<button id="button-Voltar" on:click={() => trocarestadodojogo("menu")}>
    Voltar ao Menu
</button>

<main></main>

<style>
    main{
        border: 3px solid black;
    }
</style>