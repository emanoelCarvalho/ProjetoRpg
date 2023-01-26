<script>
    // @ts-nocheck

    //import { estado, trocarestadodojogo } from "../Estado";
    import { Protagonista } from "../persons/Protagonista";
    import { Boss1 } from "../persons/Liliane";
    import { writable } from "svelte/store";
    import Jogar from "../Jogar.svelte";

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

    /*Protagonista Blocos*/

    let contadoAtq = 0;

    function ataqueProta() {
        let dado4 = Math.round(Math.random() * 4);
        if (dado4 % 2 == 0) {
            // @ts-ignore
            fala.innerHTML =
                protaBatalha1.nome + " Atacou com chuva de  códigos";
            setTimeout(function () {
                protaBatalha1.ChuvaDeCodigos(bossOne);
                contadoAtq++;
                poder.style.width =  contadoAtq + "10px"
                if (bossOne.hp <= 0) {
                    // @ts-ignore
                    barraDeVidaBoss.style.width = "0px";
                } else {
                    // @ts-ignore
                    barraDeVidaBoss.style.width = bossOne.hp + "px";
                }
            }, 3000);
            setTimeout(() => {
                movimentoAtaque();
            }, 2000);
        } else {
            setTimeout(function () {
                // @ts-ignore
                fala.innerHTML = protaBatalha1.nome + " Errou o ataque";
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

    function ataqueProtaEspecial() {
        if (contadoAtq >= 2) {
            fala.innerHTML =
                protaBatalha1.nome + " utilizou o ataque recursão ";
            setTimeout(function () {
                protaBatalha1.Recursao(bossOne);
                moveProtaEspecial();
                setTimeout(function () {
                    if (bossOne.hp <= 0) {
                        // @ts-ignore
                        barraDeVidaBoss.style.width = "0px";
                    } else {
                        // @ts-ignore
                        barraDeVidaBoss.style.width = bossOne.hp + "px";
                    }
                }, 1000);
                contadoAtq = 0;
            }, 2000);
        } else {
            //@ts-ignore
            fala.innerHTML =
                protaBatalha1.nome + " Não pode  utilizar o ataque ainda ";
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

    function moveProtaEspecial() {
        //@ts-ignore
        prota.style.translate = "-660px";
        //@ts-ignore
        prota.style.transform = "rotate(90deg)";
        //@ts-ignore
        lili.style.transform = "rotate(30deg)";

        setTimeout(() => {
            prota.style.translate = "0px";
            //@ts-ignore
            prota.style.transform = "rotate(0deg)";
            //@ts-ignore
            lili.style.transform = "rotate(0deg)";
        }, 1000);
    }

    let vezesDeCura = 3;
    function curaProtagonista() {
        let vidaMax = 64;
        if (protaBatalha1.hp < 59) {
            fala.innerHTML =
                protaBatalha1.nome + " Utilizou sua hora do cafézinho ";
            setTimeout(function () {
                protaBatalha1.HoraDoCafe();
                vezesDeCura--;
                cura.style.width = (vezesDeCura / 3) * 30 + "px";
                if (protaBatalha1.hp > vidaMax) {
                    barraDeVidaProta.style.width = "64px";
                    protaBatalha1.hp = vidaMax;
                    console.log(protaBatalha1.hp);
                } else {
                    barraDeVidaProta.style.width = protaBatalha1.hp + "px";
                }
                if (vezesDeCura == 0) {
                    fala.innerHTML =
                        " Ops, parece que, " +
                        protaBatalha1.nome +
                        " utilizou todos os seu cafezinhos ";
                    buttonAtq3.style.visibility = "hidden";
                    cura.style.visibility = "hidden";
                }
            }, 1000);
        } else {
            setTimeout(function () {
                fala.innerHTML = protaBatalha1.nome + " Perdeu o seu turno.";
            }, 1000);
        }
        setTimeout(function () {
            bossAtaque();
        }, 1000);
        trocarTurno();
    }

    function movimentoAtaque() {
        // @ts-ignore
        prota.style.translate = "-600px";
        // @ts-ignore
        prota.style.transform = "rotate(50deg)";
        // @ts-ignore
        lili.style.transform = "rotate(-50deg)";
        setTimeout(function () {
            // @ts-ignore
            prota.style.translate = "0px";
            // @ts-ignore
            lili.style.transform = "rotate(0deg)";
            // @ts-ignore
            prota.style.transform = "rotate(0deg)";
        }, 1000);
    }

    /*Bloco Boss*/

    function bossAtaque() {
        let dado3 = Math.round(Math.random() * 3);
        if (dado3 % 2 != 0) {
            setTimeout(function () {
                aleatorioAtaque();
            }, 1000);
            setTimeout(() => {
                movimentoBoss();
            }, 3000);
        } else {
            setTimeout(function () {
                // @ts-ignore
                fala.innerHTML = bossOne.nome + " Errou o ataque";
            }, 1000);
        }
        trocarTurno();
    }

    function aleatorioAtaque() {
        let dado12 = Math.round(Math.random() * 12);
        if (dado12 >= 7) {
            setTimeout(function () {
                // @ts-ignore
                fala.innerHTML = bossOne.nome + " Usou Linux ataque";
                bossOne.Linux(protaBatalha1);
            }, 1000);
            setTimeout(function () {
                if (protaBatalha1.hp <= 0) {
                    // @ts-ignore
                    barraDeVidaProta.style.width = "0px";
                    bossGanhouJogo();
                } else {
                    // @ts-ignore
                    barraDeVidaProta.style.width = protaBatalha1.hp + "px";
                }
            }, 3000);
            //movimentoBoss();
        } else {
            setTimeout(function () {
                // @ts-ignore
                fala.innerHTML = bossOne.nome + " Usou Arduíno ataque";
                bossOne.Arduino(protaBatalha1);
            }, 1000);
            setTimeout(function () {
                if (protaBatalha1.hp <= 0) {
                    // @ts-ignore
                    barraDeVidaProta.style.width = "0px";
                    bossGanhouJogo();
                } else {
                    // @ts-ignore
                    barraDeVidaProta.style.width = protaBatalha1.hp + "px";
                }
            }, 3000);
            //movimentoBoss();
        }
    }

    function movimentoBoss() {
        //@ts-ignore
        lili.style.translate = "600px";
        //@ts-ignore
        lili.style.transform = "rotate(-40deg)";
        //@ts-ignore
        prota.style.transform = "rotate(40deg)";
        setTimeout(() => {
            //@ts-ignore
            lili.style.translate = "0px";
            //@ts-ignore
            lili.style.transform = "rotate(0deg)";
            //@ts-ignore
            prota.style.transform = "rotate(0deg)";
        }, 1000);
    }

    function proximaFase() {
        // @ts-ignore
        container.style.visibility = "visible";
        // @ts-ignore
        blocoOne.style.visibility = "hidden";
        // @ts-ignore
        blocoTwo.style.visibility = "hidden";
    }

    function bossGanhouJogo() {
        // @ts-ignore
        container.style.visibility = "visible";
        // @ts-ignore
        blocoOne.style.visibility = "hidden";
        // @ts-ignore
        blocoTwo.style.visibility = "hidden";
    }

    function iniciarLuta() {
        // @ts-ignore
        buttonAtq3.style.visibility = "visible";
        // @ts-ignore
        container.style.visibility = "visible";
        // @ts-ignore
        blocoOne.style.visibility = "visible";
        // @ts-ignore
        blocoTwo.style.visibility = "visible";
        // @ts-ignore
        iniciandoBatle.style.visibility = "hidden";
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="iniciandoBatle" on:click={() => iniciarLuta()}>
    <button> Iniciar </button>
</div>

<div id="container">
    <div id="blocoOne" class="chars">
        <div class="protaInformaçoes">
            <div id="barraDeVidaProta" />
            <br />
            <div id="barraDeCura">
                <div id="cura" />
            </div><br>
            <div id="barraPower">
                <div id="poder" />
            </div>
            <p class="nomeProta">{protaBatalha1.nome}</p>
        </div>
        <div id="prota">
            <img id="protaImagem" src="./luiza.png" alt="" srcset="" />
        </div>
    </div>
    <div id="blocoTwo" class="chars">
        <div class="liliInfo">
            <div id="barraDeVidaBoss" />
            <p class="nomeBoss">{bossOne.nome}</p>
        </div>
        <div id="lili">
            <img id="bossImagem" src="./lili.png" alt="boss" srcset="" />
        </div>
    </div>
    <div id="bottonRow">
        <div>
            <div id="fala" />
        </div>
    </div>
    <div id="ataques">
        <ul id="bottonAtaque">
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <button class="buttonAtq1" on:click={() => ataqueProta()}
                >Chuva De Códigos</button
            >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <button class="buttonAtq2" on:click={() => ataqueProtaEspecial()}
                >Recursão {contadoAtq}</button
            >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <button id="buttonAtq3" on:click={() => curaProtagonista()}
                >Hora Do Café {vezesDeCura}</button
            >
        </ul>
    </div>
</div>
<link rel="stylesheet" href="./src/assets/batalhaOne.css" />
