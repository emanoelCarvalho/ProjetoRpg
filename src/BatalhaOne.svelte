<script>
    import { estado, trocarestadodojogo } from "./Estado";
    import { Protagonista } from "../Protagonista";
    import { Boss1 } from "../Liliane";
    import { writable } from "svelte/store";
    import Jogar from "./Jogar.svelte";

    let protaBatalha1 = new Protagonista("Luiza", 118, 11, 5);
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
        let dado3 = Math.round(Math.random() * 3);
        if (dado3 % 2 == 0) {
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
        if (protaBatalha1.hp < 59) {
            protaBatalha1.HoraDoCafe();
            console.log(protaBatalha1.hp);
        }
    }

    function proximaFase() {
        console.log("Protagonista Ganhou essa fase!");
        // @ts-ignore
        blocoOne.style.visibility = "hidden";
        // @ts-ignore
        blocoTwo.style.visibility = "hidden";

        trocarestadodojogo("menu");
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
    <div id="container">
        <div id="topRow">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div id="iniciandoBatle" on:click={() => iniciarLuta()}>
                <button> Iniciar </button>
            </div>
            <div id="blocoOne">
                <div class="protaInformaçoes">
                    <div id="barraDeVidaProta" />
                    <div id="barraDeEstamina" />
                    <p class="nomeProta">{protaBatalha1.nome}</p>
                    <p class="nomeProta">{protaBatalha1.hp}</p>
                </div>
                <div id="prota">
                    <img id="protaImagem" src="" alt="" srcset="" />
                </div>
                <div class="ataques">
                    <ul>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div on:click={() => ataqueProta()}>
                            Chuva De Códigos
                        </div>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div on:click={() => ataqueProtaEspecial()}>
                            Recursão
                        </div>
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div on:click={() => curaProtagonista()}>
                            Hora Do Café
                        </div>
                    </ul>
                </div>
            </div>

            <div id="blocoTwo">
                <div class="liliInfo">
                    <div id="barraDeVidaBoss" />
                    <div id="barraDeEstaminaBoss" />
                    <p class="nomeBoss">{bossOne.nome}</p>
                    <p class="nomeBoss">{bossOne.hp}</p>
                </div>
                <div class="imagem">
                    <img id="boss" src="./Liliane.png" alt="boss" srcset="" />
                </div>
            </div>
            <div id="bottonRow" />
        </div>
    </div>
</main>

<style>
    #iniciandoBatle {
        display: flex;
        position: absolute;
        visibility: visible;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 100vw;
        height: 100vh;
        flex-direction: row;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    #blocoOne {
        float: right;
        visibility: hidden;
    }
    #barraDeVidaProta {
        width: 100%;
        height: 20px;
        background-color: greenyellow;
        position: relative;
        top: 0;
        left: 0;
    }
    #barraDeEstamina {
        width: 100%;
        height: 10px;
        background-color: cyan;
        position: relative;
        top: 0;
        left: 0;
    }
    #blocoTwo {
        float: left;
        visibility: hidden;
    }
    #barraDeVidaBoss {
        width: 100%;
        height: 20px;
        background-color: greenyellow;
        position: relative;
        top: 0;
        right: 0;
    }

    #barraDeEstaminaBoss {
        width: 100%;
        height: 10px;
        background-color: cyan;
        position: relative;
        top: 0;
        right: 0;
    }
    #boss {
        height: 400px;
        width: 400px;
    }
</style>
