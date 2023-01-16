<head>
    <link rel="stylesheet" href='/assets/Menu.css'>
</head>

<script>
    import {estado} from './Estado'
    import {trocarestadodojogo} from './Estado'
</script>

<div class="title">
    <h1>
        IFPE: Jornada para à aprovação
    </h1>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu" on:click={() => trocarestadodojogo('jogar')}>
    <button class="mybutton">
        Jogar
    </button>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu" on:click={() => trocarestadodojogo('ajuda')}>
    <button class="mybutton">
         Ajuda
    </button>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="menu" on:click={() => trocarestadodojogo('sobre')}>
    <button class="mybutton">
        Sobre
    </button>
</div>





