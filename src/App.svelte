<script>
  import Menu from "./Menu.svelte";
  import Jogar from "./Ajuda.svelte";
  import Sobre from "./Sobre.svelte";
  import Ajuda from "./Ajuda.svelte";
  import {estado} from "./Estado";
  import BatalhaOne from "./BatalhaOne.svelte";
</script>

<!-- svelte-ignore empty-block -->
{#if $estado === 'menu'}
<Menu/>
{:else if $estado === 'jogar'}
<Jogar/>
<BatalhaOne/>
{:else if $estado === 'sobre'}  
<Sobre/>
{:else if $estado === 'ajuda'}
<Ajuda/>
{/if}

