<svelte:head>
   
</svelte:head>

<script>
    import {Protagonista} from '../Protagonista';
    import {Boss1} from '../Liliane';
    import {Boss2} from '../David';
    import {Boss3} from '../Ranieri';
    import {Boss4} from '../Allam';
    import {estado} from './Estado';
    import {trocarestadodojogo} from './Estado';
    import BatalhaOne from './BatalhaOne.svelte';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu" on:click={() => trocarestadodojogo('menu')}>
    <button class="mybutton">
        Voltar ao Menu
    </button>
</div>

<main>

</main>

