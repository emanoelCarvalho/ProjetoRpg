<script>
    import { estado, trocarestadodojogo } from "./Estado";
    import { Protagonista } from "../Protagonista";
    import { Boss1 } from "../Liliane";
    import { writable } from "svelte/store";
    import Menu from "./Menu.svelte";
    import Jogar from "./Jogar.svelte";

    let protaBatalha1 = new Protagonista("Luiza", 118, 11, 5);
    let bossOne = new Boss1("Liliane", 128, 13, 5);

    let JogadaDaVez = writable(false);

    function trocarTurno(JogadaDaVez) {
        if (JogadaDaVez == false) {
            JogadaDaVez = true;
            console.log(JogadaDaVez);
        } else if (JogadaDaVez == true) {
            setTimeout(function () {
                JogadaDaVez = false;
                console.log(JogadaDaVez);
            }, 5000);
        }
    };

    function ataqueProta() {
        protaBatalha1.ChuvaDeCodigos(bossOne);
        bossOne.Linux(protaBatalha1);
        console.log(protaBatalha1.hp, bossOne.hp);
        if (bossOne.hp <= 0) {
            console.log(proximaFase());
        } else if (protaBatalha1.hp <= 0) {
            return bossGanhouJogo();
        }
        trocarTurno();
    };

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
    };

    function curaProtagonista() {
        if (protaBatalha1.hp < 59) {
            protaBatalha1.HoraDoCafe();
            console.log(protaBatalha1.hp);
        }
        trocarTurno();
    };

    function proximaFase() {
        console.log("Protagonista Ganhou essa fase!");
        // @ts-ignore
        blocoOne.style.visibility = "hidden";
        // @ts-ignore
        blocoTwo.style.visibility = "hidden";
        
        trocarestadodojogo("menu");
    };

    function bossGanhouJogo() {
        // @ts-ignore
        blocoOne.style.visibility = "hidden";
        // @ts-ignore
        blocoTwo.style.visibility = "hidden";
        
        console.log("Você Perdeu!");
        trocarestadodojogo("menu");
    };

    function iniciarLuta() {
        // @ts-ignore
        blocoOne.style.visibility = "visible";
        // @ts-ignore
        blocoTwo.style.visibility = "visible";
        // @ts-ignore
        iniciandoBatle.style.visibility = "hidden";
    };
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
                    <p class="nomeProta">{protaBatalha1.nome}</p>
                    <p class="nomeProta">{protaBatalha1.hp}</p>
                    <div id="barraDeVidaProta" />
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
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    #blocoOne {
        float: right;
        visibility: hidden;
    }
    #blocoTwo {
        float: left;
        visibility: hidden;
    }
    #boss {
        height: 400px;
        width: 400px;
    }
</style>
