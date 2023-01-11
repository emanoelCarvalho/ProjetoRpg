<script>
import { estado, trocarestadodojogo } from './Estado';
import { Protagonista} from '../Protagonista';
import {Boss1} from '../Liliane'
import { writable } from 'svelte/store';
import Menu from './Menu.svelte';
import Jogar from './Jogar.svelte';


let protaBatalha1 = new Protagonista( "Luiza",118, 11, 5);
let bossOne = new Boss1("Liliane",128, 13, 5 );

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
    protaBatalha1.ChuvaDeCodigos(bossOne);
    bossOne.Linux(protaBatalha1);
    console.log(protaBatalha1.hp, bossOne.hp);
    if(bossOne.hp <= 0){
        console.log(proximaFase());
    } else if(protaBatalha1.hp <= 0){
           return fimDeJogo();
        }
        trocarTurno();
    };

    function ataqueProtaEspecial(){
        if(protaBatalha1.hp < 59){
            protaBatalha1.Recursao(bossOne);
            bossOne.Arduino(protaBatalha1);
        }
        if(bossOne.hp <= 0){
        return proximaFase();
    } else if(protaBatalha1.hp <= 0){
           return fimDeJogo();
        }
        trocarTurno();
    };

    function curaProtagonista(){
        if(protaBatalha1.hp < 59){
            protaBatalha1.HoraDoCafe();
            console.log(protaBatalha1.hp) ;      
        }
        trocarTurno();
    };


    function proximaFase(){
        console.log("Protagonista Ganhou essa fase!");
    };

    function fimDeJogo(){
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
*/
</script>

<main>
    <div id="blocoOne">
        <div class="protaInformaçoes">
            <p class="nomeProta">{protaBatalha1.nome}</p>     
            <p class="nomeProta">{protaBatalha1.hp}</p> 
            <div id="barraDeVidaProta"></div>    
        </div>
        <div id="prota">
            <img id="protaImagem" src="" alt="" srcset="">
        </div>
        <div class="ataques">
            <ul>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={() => ataqueProta()}>
                    <button>
                     ChuvaDeCodigos
                    </button>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={() => ataqueProtaEspecial()}>
                    <button>
                        Recursão
                    </button>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div on:click={() => curaProtagonista()}>
                    <button>
                        HoraDoCafé
                     </button>
                 </div>
             </ul>
        </div>
    </div>

    <div id="blocoTwo">
        <div class="liliInfo">
            <p class="nomeBoss">{bossOne.nome}</p>
            <p class="nomeBoss">{bossOne.hp}</p>
            <img id="boss" src="" alt="" srcset="">
        </div>
    </div>
</main>

<style>
#blocoTwo{
    float: left;
}
#blocoOne{
    float: right;
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