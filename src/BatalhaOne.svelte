<script>
import {estado} from './Estado';
import { Protagonista} from '../Protagonista';
import {Boss1} from '../Liliane'
import { writable } from 'svelte/store';


let Prota = new Protagonista( "Luiza",118, 11, 5);
let BossOne = new Boss1("Liliane",128, 13, 5 );

let JogadaDaVez = writable(false);

function AtaqueProta(){
    BossOne.Arduino(Prota)


        if(Prota.hp <= 0){
            console.log("Liliane venceu")
        }
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