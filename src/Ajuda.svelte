<svelte:head>

</svelte:head>

<script>
import { estado } from "./Estado";
import { trocarestadodojogo } from "./Estado";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu" on:click={() => trocarestadodojogo('menu')}>
    <button class="mybutton">
        Voltar ao Menu
    </button>
</div>