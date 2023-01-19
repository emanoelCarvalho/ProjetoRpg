<script>
    import {estado} from './Estado'
    import {trocarestadodojogo} from './Estado'
</script>

<div id="principal">
    <div class="title">
        <h1>
            BUSCA PARA A APROVAÇÃO 
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
</div>

<style>
    #principal{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: auto;
        width: 90%;
        height: 90%;
        background: linear-gradient(120deg, rgb(12, 254, 85), #fffdfdda);
        border-radius: 10px;
        border: 1px solid black;
    }
    .title{
        font-size: 130%;
    }
</style>





