<script>
  import Menu from "./Menu.svelte";
  import Jogar from "./Ajuda.svelte";
  import Sobre from "./Sobre.svelte";
  import Ajuda from "./Ajuda.svelte";
  import { estado } from "./Estado";
  import BatalhaOne from "./batles/BatalhaOne.svelte";
</script>

<main id="tela">
  {#if $estado === "menu"}
    <Menu />
  {:else if $estado === "jogar"}
    <Jogar />
    <BatalhaOne />
  {:else if $estado === "sobre"}
    <Sobre />
  {:else if $estado === "ajuda"}
    <Ajuda />
  {/if}
</main>

<style>
 #tela{
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    text-align: center;
    align-items: center;
    background-image: url(./assets/IFPE.png);
    transform: translate(-50%, -50%);
}
</style>

