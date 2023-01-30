<script>
    //@ts-nocheck
    import { estado } from "../Estado";
    import { Protagonista } from "../persons/Protagonista";
    import { Boss2 } from "../persons/David";
    import { writable } from "svelte/store";
    import Jogar from "../Jogar.svelte";

    let ProtaBatalha2 = new Protagonista("Luiza", 158, 14, 4);
    let BossTwo = new Boss2("David", 160, 16, 6);

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

    /* Bloco Do Protagonista*/

    let contadorAtq = 0;

    function ataqueProta() {
        let dado6 = Math.floor(Math.random() * 7);
        if (dado6 % 2 == 0) {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala2.innerHTML =
                ProtaBatalha2.nome + " Atacou com chuva da códigos";
            setTimeout(function () {
                ProtaBatalha2.ChuvaDeCodigos(BossTwo);
                contadorAtq++;
                if (contadorAtq >= 4) {
                    poder.style.width = "40px";
                } else {
                    poder.style.width = (contadorAtq / 4) * 40 + "px";
                }
                if (BossTwo.hp <= 0) {
                    barraDeVidaBoss2.style.width = "0px";
                } else {
                    barraDeVidaBoss2.style.width = BossTwo.hp + "px";
                }
            }, 3000);
            setTimeout(() => {
                movimentoAtaque();
                bossAtaque();
            }, 2000);
        } else {
            setTimeout(() => {
                buttonAtq1.style.visibility = "hidden";
                buttonAtq2.style.visibility = "hidden";
                buttonAtq3.style.visibility = "hidden";
                fala2.innerHTML = ProtaBatalha2.nome + " Errou o ataque";
            }, 1000);
        }
        setTimeout(() => {
            if (BossTwo.hp <= 0) {
                setTimeout(() => {
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

    function movimentoAtaque() {
        prota.style.translate = "-600px";

        prota.style.transform = "rotate(50deg)";

        david.style.transform = "rotate(-50deg)";
        setTimeout(() => {
            prota.style.translate = "0px";

            david.style.transform = "rotate(0deg)";

            prota.style.transform = "rotate(0deg)";
        }, 1000);
    }

    function ataqueProtaEspecial() {
        if (contadorAtq >= 4) {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala2.innerHTML =
                ProtaBatalha2.nome + " utilizou o ataque recursão ";
            setTimeout(() => {
                ProtaBatalha2.Recursao(BossTwo);
                moveProtaEspecial();
                setTimeout(() => {
                    if (BossTwo.hp <= 0) {
                        barraDeVidaBoss2.style.width = "0px";
                    } else {
                        barraDeVidaBoss2.style.width = BossTwo.hp + "px";
                    }
                }, 1000);
                poder.style.width = "0px";
                contadorAtq = 0;
            }, 2000);
        } else {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala2.innerHTML =
                ProtaBatalha2.nome + " Não pode  utilizar o ataque ainda ";
        }
        setTimeout(() => {
            if (BossTwo.hp <= 0) {
                setTimeout(() => {
                    proximaFase();
                }, 1000);
            } else {
                setTimeout(() => {
                    bossAtaque();
                }, 1000);
                trocarTurno();
            }
        }, 1000);
    }

    function moveProtaEspecial() {
        prota.style.translate = "-660px";

        prota.style.transform = "rotate(90deg)";

        david.style.transform = "rotate(30deg)";

        setTimeout(() => {
            prota.style.translate = "0px";

            prota.style.transform = "rotate(0deg)";

            david.style.transform = "rotate(0deg)";
        }, 1000);
    }

    let vezesDeCura = 3;

    function curaProtagonista() {
        let vidaMax = 158;
        if (ProtaBatalha2.hp <= 95) {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala2.innerHTML =
                ProtaBatalha2.nome + " Utilizou sua hora do cafézinho ";
            setTimeout(() => {
                ProtaBatalha2.HoraDoCafe();
                vezesDeCura--;
                cura.style.width = (vezesDeCura / 3) * 30 + "px";
                if (vezesDeCura == 0) {
                    fala2.innerHTML =
                        " Ops, parece que, " +
                        ProtaBatalha2.nome +
                        " utilizou todos os seu cafezinhos ";
                }
                if (ProtaBatalha2.hp > vidaMax) {
                    barraDeVidaProta.style.width = "158px";
                    ProtaBatalha2.hp = vidaMax;
                } else {
                    barraDeVidaProta.style.width = ProtaBatalha2.hp + "px";
                }
            }, 1000);
        } else {
            setTimeout(() => {
                buttonAtq1.style.visibility = "hidden";
                buttonAtq2.style.visibility = "hidden";
                buttonAtq3.style.visibility = "hidden";
                fala2.innerHTML =
                    ProtaBatalha2.nome +
                    " Ainda não é hora do intervalo, perdeu o seu turno.";
            }, 1000);
        }
        setTimeout(() => {
            bossAtaque();
        }, 1000);
        trocarTurno();
    }

    /*Bloco Boss*/

    function bossAtaque() {
        let dado6 = Math.floor(Math.random() * 7);
        if (dado6 % 2 == 0) {
            setTimeout(() => {
                aleatorioAtaque();
            }, 1000);

            setTimeout(() => {
                movimentoBoss();
                fala2.innerHTML = ProtaBatalha2.nome + " agora é sua vez.";
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
                fala2.innerHTML = BossTwo.nome + " errou o ataque.";
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
        trocarTurno();
    }

    function aleatorioAtaque() {
        let dado12 = Math.floor(Math.random() * 13);
        if (dado12 <= 8) {
            setTimeout(() => {
                fala2.innerHTML = BossTwo.nome + " usou Packet Trace.";
                BossTwo.PacketTrace(ProtaBatalha2);
            }, 1000);
            setTimeout(() => {
                if (ProtaBatalha2.hp <= 0) {
                    barraDeVidaProta.style.width = "0px";
                    bossGanhouJogo();
                } else {
                    barraDeVidaProta.style.width = ProtaBatalha2.hp + "px";
                }
            }, 3000);
        } else {
            setTimeout(() => {
                fala2.innerHTML =
                    BossTwo.nome + " Usou o ataque, partiu Crossfit.";
                BossTwo.PartiuCrossfit(ProtaBatalha2);
            }, 1000);
        }
        setTimeout(() => {
            if (ProtaBatalha2.hp <= 0) {
                barraDeVidaProta.style.width = "0px";
                bossGanhouJogo();
            } else {
                barraDeVidaProta.style.width = ProtaBatalha2.hp + "px";
            }
        }, 3000);
    }

    function movimentoBoss() {
        david.style.translate = "600px";

        david.style.transform = "rotate(-40deg)";

        prota.style.transform = "rotate(40deg)";
        setTimeout(() => {
            david.style.translate = "0px";

            david.style.transform = "rotate(0deg)";

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
        container.style.visibility = "visible";

        blocoOne.style.visibility = "visible";

        blocoTwo.style.visibility = "visible";

        bottonRow.style.visibility = "visible";

        ataques.style.visibility = "visible";

        bottonAtaque.style.visibility = "visible";

        buttonAtq1.style.visibility = "visible";

        buttonAtq2.style.visibility = "visible";

        buttonAtq3.style.visibility = "visible";

        iniciandoBatle.style.visibility = "hidden";
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="iniciandoBatle" on:click={() => iniciarLuta()}>
    <button>Iniciar</button>
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
            <p class="nomeProta">{ProtaBatalha2.nome}</p>
        </div>
        <div id="prota">
            <img id="protaImagem" src="./luiza.png" alt="" srcset="" />
        </div>
    </div>
    <div id="blocoTwo" class="chars">
        <div class="davidInfo">
            <div id="barraDeVidaBoss2" />
            <p class="nomeBoss">{BossTwo.nome}</p>
        </div>
        <div id="david">
            <img id="bossImagem" src="./david.png" alt="boss" srcset="" />
        </div>
    </div>
    <div id="bottonRow">
        <div>
            <div id="fala2" />
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
                >Recursão {contadorAtq}</button
            >
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <button id="buttonAtq3" on:click={() => curaProtagonista()}
                >Hora Do Café {vezesDeCura}</button
            >
        </ul>
    </div>
</div>
<link rel="stylesheet" href="./src/assets/batalhaTwo.css" />
