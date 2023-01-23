<script>
  import Menu from "./src/Menu.svelte";
  import Jogar from "./src/Jogar.svelte";
  import Sobre from "./src/Sobre.svelte";
  import Ajuda from "./src/Ajuda.svelte";
  import { estado } from "./src/Estado";
  import BatalhaOne from "./src/batles/BatalhaOne.svelte";
</script>

<main id="tela">
  {#if $estado === "menu"}
    <Menu />
  {:else if $estado === "jogar"}
    <Jogar/>
    <BatalhaOne/>
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
    background-image: url(../src/assets/IFPE.png);
    transform: translate(-50%, -50%);
}
</style>

