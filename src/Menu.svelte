<script>
    import { estado } from "./Estado";
    import { trocarestadodojogo } from "./Estado";
</script>

<div id="principal">
    <div class="title">
        <h1>BUSCA PARA A APROVAÇÃO</h1>
    </div>

    <div class="menu">
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
    .title {
        font-size: 130%;
    }
    .menu {
        display: flex;
        justify-content: space-evenly;
        margin-top: 14%;
        align-items: flex-start;
    }

    .mybutton1 {
        font-size: 30px;
        padding: 20px 21px;
        border-radius: 20px;
        box-shadow: 0 4px;
        background: radial-gradient(
            circle at 50.2% 47.77%,
            #ffffff 0,
            #ffffff 16.67%,
            #edffff 33.33%,
            #c7edee 50%,
            #a1d5da 66.67%,
            #82c2cb 83.33%,
            #6ab4c2 100%
        );
    }
    .mybutton1:active {
        box-shadow: 0 1px;
        transform: translateY(5px);
    }

    .mybutton2 {
        font-size: 30px;
        padding: 20px 21px;
        border-radius: 20px;
        box-shadow: 0 4px;
        background: radial-gradient(
            circle at 50.2% 47.77%,
            #ff9e66 0,
            #ff9265 12.5%,
            #ff8262 25%,
            #fd6d5b 37.5%,
            #ef5252 50%,
            #e0324b 62.5%,
            #d40148 75%,
            #ca004a 87.5%,
            #c4004f 100%
        );
    }
    .mybutton2:active {
        box-shadow: 0 1px;
        transform: translateY(5px);
    }

    .mybutton3 {
        font-size: 30px;
        padding: 20px 21px;
        border-radius: 20px;
        box-shadow: 0 4px;
        background: radial-gradient(
            circle at 50.2% 47.77%,
            #ffffa0 0,
            #f1ffa1 12.5%,
            #d8ff9d 25%,
            #b7ff95 37.5%,
            #8ef28a 50%,
            #5de281 62.5%,
            #0bd680 75%,
            #00cf86 87.5%,
            #00cd92 100%
        );
    }
    .mybutton3:active {
        box-shadow: 0 1px;
        transform: translateY(5px);
    }
</style>
