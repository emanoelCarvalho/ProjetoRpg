<script>
    import { trocarestadodojogo } from "./Estado";
    import { estado } from "./Estado";
</script>

<svelte:head />
<!-- svelte-ignore a11y-missing-attribute -->

<div id="sobreSvelte">
    <p class="apresentation">
        <strong>
            Após enfrentar os desafios para chegar ao campus do IFPE, nosso
            herói terá que enfrentar os poderosos instrutores da instituição
            para conseguir chegar ao tão desejado diploma e conseguir ingressar
            ao mercado de trabalho.
        </strong>
    </p>
    <div id="code">
        <h2 class="title2">Criadores:</h2>
        <strong>
            <ol>Alef Thiago(Alefsilvadn@gmail.com)</ol>
            <ol>Cleiton Ribeiro(lucascleiton180@gmail.com)</ol>
            <ol>Emanuel Carvalho(ehcs@discente.ifpe.edu.br)</ol>
            <ol>Fábio Rodrigues(fabiofilhomae@gmail.com)</ol>
        </strong><br />

        <div class="creditos">
            <h3>Créditos : </h3>
            <ul>
                <li />
                <li />
                <li />
                <li />
                <li />
            </ul>
        </div>
    </div>
    <div id="areaProfissional">
        <h2>Contatos Profissionais :</h2>
        <strong>
            <ol>
                <a href="https://github.com/Alefthiago" target="_blank" rel="noreferrer"
                    >GitHub : Alef Thiago</a
                >
            </ol>
        </strong>
        <strong>
            <ol>
                <a href="https://github.com/CleitonLucas" target="_blank" rel="noreferrer"
                    >GitHub : Cleiton Lucas</a
                 >
            </ol>
        </strong>
        <strong>
            <ol>
                <a href="https://github.com/emanoelCarvalho" target="_blank" rel="noreferrer"> GitHub : Emanoel Carvalho</a>
            </ol>
        </strong>
        <strong>
            <ol><a href="###">GitHub : Fábio Rodrigues</a></ol>
        </strong>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <button class="mybutton-menu" on:click={() => trocarestadodojogo("menu")}>
        Voltar ao Menu
    </button>
</div>

<style>
    #sobreSvelte {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin: auto;
        width: 90%;
        height: 90%;
        border-radius: 5px;
        border: 5px solid black;
        background: linear-gradient(120deg, rgb(12, 254, 85), #fffdfdda);
        font-size: 150%;
    }
    #code {
        width: 40%;
        font-family: "Courier New", Courier, monospace;
    }
    #areaProfissional {
        right: 10px;
        top: 100%;
        width: 165%;
        margin-top: -8cm;
    }
    a {
        text-decoration: none;
    }
    .mybutton-menu {
        border: 3px solid black;
        border-radius: 5px;
        background-color: greenyellow;
        font-family: "Courier New", Courier, monospace;
        position: absolute;
        bottom: 9%;
        z-index: 0;
    }
    .mybutton-menu:active {
        box-shadow: 0 1px;
        transform: translateY(3px);
    }

</style>
