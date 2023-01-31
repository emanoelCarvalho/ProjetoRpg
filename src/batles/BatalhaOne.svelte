<script>
    //@ts-nocheck
    import { estado, trocarestadodojogo } from "../Estado";
    import { Protagonista } from "../persons/Protagonista";
    import { Boss1 } from "../persons/Liliane";
    import { writable } from "svelte/store";
    import Jogar from "../Jogar.svelte";

    let protaBatalha1 = new Protagonista("Luiza", 118, 11, 5);
    let bossOne = new Boss1("Liliane", 128, 13, 5);

    //let jogadaDaVez = writable(false);

    /*function trocarTurno() {
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
        let dado6 = Math.floor(Math.random() * 7);
        if (dado6 % 2 == 0) {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala.innerHTML =
                protaBatalha1.nome + " Atacou com chuva de  códigos";
            setTimeout(function () {
                protaBatalha1.ChuvaDeCodigos(bossOne);
                contadoAtq++;
                if (contadoAtq >= 4) {
                    poder.style.width = "40px";
                } else {
                    poder.style.width = (contadoAtq / 4) * 40 + "px";
                }
                if (bossOne.hp <= 0) {
                    barraDeVidaBoss.style.width = "0px";
                } else {
                    barraDeVidaBoss.style.width = bossOne.hp + "px";
                }
            }, 3000);
            setTimeout(() => {
                movimentoAtaque();
                bossAtaque();
            }, 2000);
        } else {
            setTimeout(function () {
                buttonAtq1.style.visibility = "hidden";
                buttonAtq2.style.visibility = "hidden";
                buttonAtq3.style.visibility = "hidden";
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
                //trocarTurno();
            }
        }, 1000);
    }

    function ataqueProtaEspecial() {
        if (contadoAtq >= 4) {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala.innerHTML =
                protaBatalha1.nome + " utilizou o ataque recursão ";
            setTimeout(() => {
                protaBatalha1.Recursao(bossOne);
                moveProtaEspecial();
                setTimeout(() => {
                    if (bossOne.hp <= 0) {
                        barraDeVidaBoss.style.width = "0px";
                    } else {
                        barraDeVidaBoss.style.width = bossOne.hp + "px";
                    }
                }, 1000);
                poder.style.width = "0px";
                contadoAtq = 0;
            }, 2000);
        } else {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
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
                //trocarTurno();
            }
        }, 1000);
    }

    function moveProtaEspecial() {
        prota.style.translate = "-660px";

        prota.style.transform = "rotate(90deg)";

        lili.style.transform = "rotate(30deg)";

        setTimeout(() => {
            prota.style.translate = "0px";

            prota.style.transform = "rotate(0deg)";

            lili.style.transform = "rotate(0deg)";
        }, 1000);
    }

    function movimentoAtaque() {
        prota.style.translate = "-600px";

        prota.style.transform = "rotate(50deg)";

        lili.style.transform = "rotate(-50deg)";
        setTimeout(() => {
            prota.style.translate = "0px";

            lili.style.transform = "rotate(0deg)";

            prota.style.transform = "rotate(0deg)";
        }, 1000);
    }

    let vezesDeCura = 3;
    function curaProtagonista() {
        let vidaMax = 118;
        if (protaBatalha1.hp <= 71) {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala.innerHTML =
                protaBatalha1.nome + " Utilizou sua hora do cafézinho ";
            setTimeout(() => {
                protaBatalha1.HoraDoCafe();
                vezesDeCura--;
                cura.style.width = (vezesDeCura / 3) * 30 + "px";
                if (vezesDeCura == 0) {
                    fala.innerHTML =
                        " Ops, parece que, " +
                        protaBatalha1.nome +
                        " utilizou todos os seu cafezinhos ";
                }
                if (protaBatalha1.hp > vidaMax) {
                    barraDeVidaProta.style.width = "118px";
                    protaBatalha1.hp = vidaMax;
                } else {
                    barraDeVidaProta.style.width = protaBatalha1.hp + "px";
                }
            }, 1000);
        } else {
            setTimeout(function () {
                buttonAtq1.style.visibility = "hidden";
                buttonAtq2.style.visibility = "hidden";
                buttonAtq3.style.visibility = "hidden";
                fala.innerHTML =
                    protaBatalha1.nome +
                    " Ainda não é hora do intervalo, perdeu o seu turno.";
            }, 1000);
        }
        setTimeout(function () {
            bossAtaque();
        }, 1000);
        //trocarTurno();
    }

    /*Bloco Boss*/

    function bossAtaque() {
        let dado6 = Math.floor(Math.random() * 7);
        console.log(dado6);
        if (dado6 % 2 == 0) {
            setTimeout(function () {
                aleatorioAtaque();
            }, 1000);
            setTimeout(() => {
                movimentoBoss();
                fala.innerHTML = protaBatalha1.nome + " agora é sua vez.";
                if (vezesDeCura == 0) {
                    buttonAtq1.style.visibility = "visible";
                    buttonAtq2.style.visibility = "visible";
                } else {
                    buttonAtq1.style.visibility = "visible";
                    buttonAtq2.style.visibility = "visible";
                    buttonAtq3.style.visibility = "visible";
                }
            }, 3000);
        } else {
            setTimeout(function () {
                fala.innerHTML = bossOne.nome + " errou o ataque.";
                if (vezesDeCura == 0) {
                    buttonAtq1.style.visibility = "visible";
                    buttonAtq2.style.visibility = "visible";
                } else {
                    buttonAtq1.style.visibility = "visible";
                    buttonAtq2.style.visibility = "visible";
                    buttonAtq3.style.visibility = "visible";
                }
            }, 2000);
        }
        //trocarTurno();
    }

    function aleatorioAtaque() {
        let dado12 = Math.floor(Math.random() * 13);
        console.log(dado12);
        if (dado12 >= 7) {
            setTimeout(function () {
                fala.innerHTML = bossOne.nome + " Usou Linux ataque";
                bossOne.Linux(protaBatalha1);
            }, 1000);
            setTimeout(function () {
                if (protaBatalha1.hp <= 0) {
                    barraDeVidaProta.style.width = "0px";
                    bossGanhouJogo();
                } else {
                    barraDeVidaProta.style.width = protaBatalha1.hp + "px";
                }
            }, 3000);
        } else {
            setTimeout(function () {
                fala.innerHTML = bossOne.nome + " Usou Arduíno ataque";
                bossOne.Arduino(protaBatalha1);
            }, 1000);
        }
        setTimeout(function () {
            if (protaBatalha1.hp <= 0) {
                barraDeVidaProta.style.width = "0px";
                bossGanhouJogo();
            } else {
                barraDeVidaProta.style.width = protaBatalha1.hp + "px";
            }
        }, 3000);
    }

    function movimentoBoss() {
        lili.style.translate = "600px";

        lili.style.transform = "rotate(-40deg)";

        prota.style.transform = "rotate(40deg)";
        setTimeout(() => {
            lili.style.translate = "0px";

            lili.style.transform = "rotate(0deg)";

            prota.style.transform = "rotate(0deg)";
        }, 1000);
    }

    function proximaFase() {
        container.style.visibility = "visible";

        blocoOne.style.visibility = "hidden";

        blocoTwo.style.visibility = "hidden";

        bottonRow.style.visibility = "hidden";

        ataques.style.visibility = "hidden";

        bottonAtaque.style.visibility = "hidden";

        buttonAtq1.style.visibility = "hidden";

        buttonAtq2.style.visibility = "hidden";

        buttonAtq3.style.visibility = "hidden";
    }

    function bossGanhouJogo() {
        container.style.visibility = "visible";

        blocoOne.style.visibility = "hidden";

        blocoTwo.style.visibility = "hidden";

        bottonRow.style.visibility = "hidden";

        ataques.style.visibility = "hidden";

        bottonAtaque.style.visibility = "hidden";

        buttonAtq1.style.visibility = "hidden";

        buttonAtq2.style.visibility = "hidden";

        buttonAtq3.style.visibility = "hidden";
    }

    function iniciarLuta() {
        buttonAtq1.style.visibility = "visible";

        buttonAtq2.style.visibility = "visible";

        buttonAtq3.style.visibility = "visible";

        container.style.visibility = "visible";

        blocoOne.style.visibility = "visible";

        blocoTwo.style.visibility = "visible";

        bottonRow.style.visibility = "visible";

        ataques.style.visibility = "visible";

        bottonAtaque.style.visibility = "visible";

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
            </div>
            <br />
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
            <button id="buttonAtq1" on:click={() => ataqueProta()}
                >Chuva De Códigos</button
            >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <button id="buttonAtq2" on:click={() => ataqueProtaEspecial()}
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
