<script>
import { estado } from './Estado';
import { Protagonista} from '../Protagonista';
import {Boss1} from '../Liliane'
import { writable } from 'svelte/store';


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
    trocarTurno();
    Prota.ChuvaDeCodigos(BossOne)
    BossOne.Arduino(Prota)
    if(BossOne.hp <= 0){
        return ProximaFase();
    } else if(Prota.hp <= 0){
           return FimDeJogo();
        }
    }


function ProximaFase(){
    console.log("Protagonista Ganhou essa fase!")
}


function FimDeJogo(){
    console.log("Fim De Jogo!")
}

</script>

<main>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => AtaqueProta()}>
        <button>
            ChuvaDeCodigos
        </button>
    </div>

</main>

<style>

</style>