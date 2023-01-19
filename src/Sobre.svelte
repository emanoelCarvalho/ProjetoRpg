<svelte:head>
    
</svelte:head>

<script>
import { trocarestadodojogo } from "./Estado";
import { estado } from "./Estado";
</script>
<!-- svelte-ignore a11y-missing-attribute -->


    <p>
        <strong>
            Após enfrentar os desafios para chegar ao campus do IFPE, nosso herói terá que enfrentar os poderosos instrutores da instituição para conseguir chegar ao tão desejado diploma e conseguir ingressar ao mercado de trabalho.
        </strong>
    </p>
    <h2>
        Criadores:
    </h2>
    <ol>
        Alef Thiago(Alefsilvadn@gmail.com)
    </ol>
    <ol>
        Cleiton Ribeiro(lucascleiton180@gmail.com)
    </ol>
    <ol>
        Emanuel Carvalho(ehcs@discente.ifpe.edu.br)
    </ol>
    <ol>
        Fábio Rodrigues(fabiofilhomae@gmail.com)
    </ol>


    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="menu" on:click={() => trocarestadodojogo('menu')}>
        <button class="mybutton">
            Voltar ao Menu
        </button>
    </div>