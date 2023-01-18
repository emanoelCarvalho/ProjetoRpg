<script>
    import { estado, trocarestadodojogo } from "./Estado";
    import { Protagonista } from "../Protagonista";
    import { Boss1 } from "../Liliane";
    import { writable } from "svelte/store";
    import Jogar from "./Jogar.svelte";

    let protaBatalha1 = new Protagonista("Luiza", 64, 11, 5);
    let bossOne = new Boss1("Liliane", 128, 13, 5);

    let jogadaDaVez = writable(false);

    function trocarTurno() {
        if ($jogadaDaVez == false) {
            $jogadaDaVez = true;
            console.log($jogadaDaVez);
        } else if ($jogadaDaVez == true) {
            setTimeout(function () {
                $jogadaDaVez = false;
                console.log($jogadaDaVez);
            }, 1000);
        }
    }

    function ataqueProta() {
        let dado4 = Math.round(Math.random() * 4);
        if (dado4 % 2 == 0) {
            console.log(protaBatalha1.nome + " Usou Chuva de códigos");
            setTimeout(function () {
                protaBatalha1.ChuvaDeCodigos(bossOne);
                console.log(protaBatalha1.hp, bossOne.hp);
            }, 1000);
        } else {
            setTimeout(function () {
                console.log(protaBatalha1.nome + " Errou o ataque");
            }, 1000);
        }
        setTimeout(function () {
            if (bossOne.hp <= 0) {
                setTimeout(function () {
                    proximaFase();
                }, 1000);
            } else {
                setTimeout(function () {
                    bossAtaque();
                }, 1000);
                trocarTurno();
                
            }
        }, 1000);
    }

    function bossAtaque() {
        let dado3 = Math.round(Math.random() * 3);
        if (dado3 % 2 != 0) {
            setTimeout(function () {
                aleatorioAtaque();
            }, 1000);
        } else {
            setTimeout(function () {
                console.log(bossOne.nome + " Errou o ataque");
            }, 1000);
        }
        trocarTurno();
    }

    function aleatorioAtaque() {
        let dado12 = Math.round(Math.random() * 12);
        if (dado12 >= 7) {
            setTimeout(function () {
                console.log(bossOne.nome + " Usou Linux ataque");
                bossOne.Linux(protaBatalha1);
                console.log(protaBatalha1.hp, bossOne.hp);
            }, 1000);
        } else {
            setTimeout(function () {
                console.log(bossOne.nome + " Usou Arduíno ataque");
                bossOne.Arduino(protaBatalha1);
                console.log(protaBatalha1.hp, bossOne.hp);
            }, 1000);
        }
    }

    function ataqueProtaEspecial() {
        if (protaBatalha1.hp < 59) {
            protaBatalha1.Recursao(bossOne);
            bossOne.Arduino(protaBatalha1);
        }
        if (bossOne.hp <= 0) {
            return proximaFase();
        } else if (protaBatalha1.hp <= 0) {
            return bossGanhouJogo();
        }
        trocarTurno();
    }

    function curaProtagonista() {
        let vezeDeCura = 0;
        if (protaBatalha1.hp < 59) {
            setTimeout(function () {
                protaBatalha1.HoraDoCafe();
                console.log(protaBatalha1.hp);
            }, 1000);
        } else {
            console.log("A função não pode ser utilizada.");
        }
        trocarTurno();
    }

    /*let contadorDeEstamina = 0;
    function subirEstamina() {
        if (contadorDeEstamina == 0) {
            // @ts-ignore
            estamina.style.width = "0%";
        } else if (contadorDeEstamina == 1) {
            // @ts-ignore
            estamina.style.width = "25%";
        } else if (contadorDeEstamina == 2) {
            // @ts-ignore
            estamina.style.width = "50%";
        } else if (contadorDeEstamina == 3) {
            // @ts-ignore
            estamina.style.width = "75%";
        } else if (contadorDeEstamina == 4) {
            // @ts-ignore
            estamina.style.width = "100%";
        }
    }*/

    function proximaFase() {
        console.log("Protagonista Ganhou essa fase!");
        // @ts-ignore
        blocoOne.style.visibility = "hidden";
        // @ts-ignore
        blocoTwo.style.visibility = "hidden";

        //trocarestadodojogo("menu");
    }

    function bossGanhouJogo() {
        // @ts-ignore
        blocoOne.style.visibility = "hidden";
        // @ts-ignore
        blocoTwo.style.visibility = "hidden";

        console.log("Você Perdeu!");
        trocarestadodojogo("menu");
    }

    function iniciarLuta() {
        // @ts-ignore
        blocoOne.style.visibility = "visible";
        // @ts-ignore
        blocoTwo.style.visibility = "visible";
        // @ts-ignore
        iniciandoBatle.style.visibility = "hidden";
    }
</script>

<main>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div id="iniciandoBatle" on:click={() => iniciarLuta()}>
        <button> Iniciar </button>
    </div>
    <div id="blocoOne" class="chars">
        <div class="protaInformaçoes">
            <div id="barraDeVidaProta" />
            <div id="barraDeEstamina">
                <div id="Estamina" />
            </div>
            <p class="nomeProta">{protaBatalha1.nome}</p>
            <p class="nomeProta">{protaBatalha1.hp}</p>
        </div>
        <div id="prota">
            <img id="protaImagem" src="luiza.png" alt="" srcset="" />
        </div>
        <div class="ataques">
            <ul>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={() => ataqueProta()}>Chuva De Códigos</div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={() => ataqueProtaEspecial()}>Recursão</div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div on:click={() => curaProtagonista()}>Hora Do Café</div>
            </ul>
        </div>
    </div>

    <div id="blocoTwo" class="chars">
        <div class="liliInfo">
            <div id="barraDeVidaBoss" />
            <p class="nomeBoss">{bossOne.nome}</p>
            <p class="nomeBoss">{bossOne.hp}</p>
        </div>
        <div class="imagem">
            <img id="boss" src="./Liliane.png" alt="boss" srcset="" />
        </div>
    </div>
</main>
<link rel="stylesheet" href="./src/assets/batalhaOne.css" />

<style>
</style>
