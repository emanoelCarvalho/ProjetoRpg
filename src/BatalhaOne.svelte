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
};

function ataqueProta(){
    Prota.ChuvaDeCodigos(BossOne);
    BossOne.Linux(Prota);
    console.log(Prota.hp, BossOne.hp);
    if(BossOne.hp <= 0){
        console.log(ProximaFase());
    } else if(Prota.hp <= 0){
           return FimDeJogo();
        }
        trocarTurno();
    };

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
        trocarTurno();
    };

    function curaProtagonista(){
        if(Prota.hp < 59){
            Prota.HoraDoCafe();
            console.log(Prota.hp) ;      
        }
        trocarTurno();
    };


    function ProximaFase(){
        console.log("Protagonista Ganhou essa fase!");
    };

    function FimDeJogo(){
        console.log("Fim De Jogo!");
        console.log("Você Perdeu!");
    };

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
    <div id="container">
        <div id="topRow">
            <div id="luizaProta" class="chars">
                <img src="" alt="" srcset="">
               
            </div>
            <div id="lilianeBoss" class="chars">
                <img src="" alt="" srcset="">
            </div>
        </div>
        <div id="bottonRow"></div>
    </div>

    
    <div id="ataques">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => ataqueProta()}>
            <button>
                ChuvaDeCodigos
            </button>
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => ataqueProtaEspecial()}>
            <button>
                Recursao
            </button>
        </div>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div on:click={() => curaProtagonista()}>
            <button>
                HoraDoCafe
            </button>
        </div>
    </div>
</main>

<style>
#ataques{
    text-align: justify;
    float: right;
    width: 500px;
}
/*#topRow{
    display: flex;
    flex-direction: row;
    border: 1px solid;
    border-color: aqua;
    justify-content: center;
}

#luizaProta{
    border: 1px solid;
}

#luizaProta img{
    height: 200px;
    margin-top: 400px;
}
#lilianeBoss{
    border: 1px solid;
}

#lilianeBoss{
    height: 200px;
    margin-top: 400px;    
}
.chars{
    margin: 15px 40px;
}

#bottonRow{
    padding: 20px;
    font: 20pt;
}*/
</style>