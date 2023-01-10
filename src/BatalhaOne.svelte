<script>
import { estado, trocarestadodojogo } from './Estado';
import { Protagonista} from '../Protagonista';
import {Boss1} from '../Liliane'
import { writable } from 'svelte/store';
    import Menu from './Menu.svelte';
    import Jogar from './Jogar.svelte';


let Prota = new Protagonista( "Luiza",118, 11, 5);
let BossOne = new Boss1("Liliane",128, 13, 5 );

let JogadaDaVez = writable(false);

function trocarTurno(JogadaDaVez){
    if(JogadaDaVez == false){
        JogadaDaVez = true;
        console.log(JogadaDaVez)
    } else if (JogadaDaVez == true){
        setTimeout(function ()  {
            JogadaDaVez = false;
            console.log(JogadaDaVez)
        }, 5000);
    }
}

function AtaqueProta(){
    Prota.ChuvaDeCodigos(BossOne);
    BossOne.Linux(Prota);
    if(BossOne.hp <= 0){
        console.log(ProximaFase());
    } else if(Prota.hp <= 0){
           return FimDeJogo();
        }
        console.log(BossOne.hp, Prota.hp);
    }

    function ataqueProtaEspecial(){
        if(Prota.hp < 59){
            Prota.Recursao(BossOne);
            BossOne.Arduino(Prota);
        }
        if(BossOne.hp <= 0){
        return ProximaFase();
    } else if(Prota.hp <= 0){
           return FimDeJogo();
        }
    }

    function curaProtagonista(){
        if(Prota.hp < 59){
            Prota.HoraDoCafe();
            console.log(Prota.hp) ;      
        }
    }

function ProximaFase(){
    console.log("Protagonista Ganhou essa fase!");
}

function nomeProtagonista(){
    console.log(Prota.nome);
}
function FimDeJogo(){
    console.log("Fim De Jogo!");
    console.log("Você Perdeu!");
}

/*function turnos(){
    if($JogadaDaVez == true){
        $JogadaDaVez = false;
        console.log($JogadaDaVez);
    }else{
            setTimeout(function(){
                $JogadaDaVez = true;
                console.log($JogadaDaVez);
        }, 6000)
    }
}

function ataqueProta(Prota){
    if(Prota.hp > 0){
        setTimeout(function(){
            Prota.ChuvaDeCodigos(BossOne)
        }, 3000)
    }else{
        console.log("Olá")
    }
    turnos();

}

function ataqueBoss(BossOne){
    if(BossOne.hp > 0){
        setTimeout(function(){
            BossOne.Linux(Prota)
            console.log(Prota.hp)
        }, 3000)
    }else{
     console.log("Ola")
    }
    turnos();
}


ataqueProta(Prota);
ataqueBoss(BossOne);*/
</script>

<main>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => AtaqueProta()}>
        <button>
            ChuvaDeCodigos
        </button>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => curaProtagonista()}>
        <button>
            HoraDoCafe
        </button>
    </div>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => ataqueProtaEspecial()}>
        <button>
            Recursao
        </button>
    </div>

</main>

<style>

</style>