<script>
    import { estado } from "./Estado";
    import { trocarestadodojogo } from "./Estado";
</script>

<div id="principal">
    <div class="title">
        <h1>BUSCA PARA A APROVAÇÃO</h1>
    </div>

    <div class="menu" >
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <button class="mybutton1" on:click={() => trocarestadodojogo("ajuda")}>
            Ajuda
        </button>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <button class="mybutton2" on:click={() => trocarestadodojogo("jogar")}>
            Jogar
        </button>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <button class="mybutton3" on:click={() => trocarestadodojogo("sobre")}>
            Sobre
        </button>
    </div>
</div>

<style>
    #principal {
        position: relative;
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
    .title {
        font-size: 130%;
    }
    .menu{
        display: flex;
        justify-content: center;
        margin-top: 14%;
        align-items: flex-start;
    }

    .mybutton1 {
        font-size: 30px;
        padding: 20px 21px;
        border-radius: 20px;
        box-shadow: 0 4px;
    }
    .mybutton2{
        font-size: 30px;
        padding: 20px 21px;
        border-radius: 20px;
        box-shadow: 0 4px;
    }
    .mybutton3{
        font-size: 30px;
        padding: 20px 21px;
        border-radius: 20px;
        box-shadow: 0 4px;
    }
</style>
