<script>
    import { estado } from "./Estado";
    import { trocarestadodojogo } from "./Estado";
    import BatalhaOne from "./batles/BatalhaOne.svelte";
</script>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<button id="button-Voltar" on:click={() => trocarestadodojogo("menu")}>
    Voltar ao Menu
</button>


<style>

</style>
