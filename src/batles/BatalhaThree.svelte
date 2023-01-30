<script>
    //@ts-nocheck
    import { writable } from "svelte/store";
    import { estado } from "../Estado";
    import { Protagonista } from "../persons/Protagonista";
    import { Boss3 } from "../persons/Ranieri";

    let ProtaBatalha3 = new Protagonista("Luiza", 199, 18, 6);
    let BossThree = new Boss3("Ranieri", 200, 20, 8);

    let jogadaDaVez = writable(false);

    function trocarTurno() {
        if ($jogadaDaVez == false) {
            $jogadaDaVez = true;
            console.log($jogadaDaVez);
        } else if ($jogadaDaVez == true) {
            setTimeout(() => {
                $jogadaDaVez = false;
                console.log($jogadaDaVez);
            }, 1000);
        }
    }

    /*Bloco Do Protagonista Batle 3*/

    let contadorAtq = 0;

    function ataqueProta() {
        let dado6 = Math.floor(Math.random() * 7);
        if (dado6 % 2 == 0) {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala3.innerHTML =
                ProtaBatalha3.nome + " Atacou com chuva da códigos";
            setTimeout(function () {
                ProtaBatalha3.ChuvaDeCodigos(BossThree);
                contadorAtq++;
                if (contadorAtq >= 4) {
                    poder.style.width = "40px";
                } else {
                    poder.style.width = (contadorAtq / 4) * 40 + "px";
                }
                if (BossThree.hp <= 0) {
                    barraDeVidaBoss3.style.width = "0px";
                } else {
                    barraDeVidaBoss3.style.width = BossThree.hp + "px";
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
                fala3.innerHTML = ProtaBatalha3.nome + " Errou o ataque";
            }, 1000);
            setTimeout(() => {
                if (BossThree.hp <= 0) {
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
    }

    function movimentoAtaque() {
        prota.style.translate = "-600px";

        prota.style.transform = "rotate(50deg)";

        rani.style.transform = "rotate(-50deg)";
        setTimeout(() => {
            prota.style.translate = "0px";

            rani.style.transform = "rotate(0deg)";

            prota.style.transform = "rotate(0deg)";
        }, 1000);
    }

    function ataqueProtaEspecial() {
        if (contadorAtq >= 4) {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala3.innerHTML =
                ProtaBatalha3.nome + " utilizou o ataque recursão ";
            setTimeout(() => {
                ProtaBatalha3.Recursao(BossThree);
                moveProtaEspecial();
                setTimeout(() => {
                    if (BossThree.hp <= 0) {
                        barraDeVidaBoss3.style.width = "0px";
                    } else {
                        barraDeVidaBoss3.style.width = BossThree.hp + "px";
                    }
                }, 1000);
                poder.style.width = "0px";
                contadorAtq = 0;
            }, 2000);
        } else {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala3.innerHTML =
                ProtaBatalha3.nome + " Não pode  utilizar o ataque ainda ";
        }
        setTimeout(() => {
            if (BossThree.hp <= 0) {
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

        rani.style.transform = "rotate(30deg)";

        setTimeout(() => {
            prota.style.translate = "0px";

            prota.style.transform = "rotate(0deg)";

            rani.style.transform = "rotate(0deg)";
        }, 1000);
    }

    let vezesDeCura = 2;

    function curaProtagonista() {
        let vidaMax = 199;
        if (ProtaBatalha3.hp < 199) {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala3.innerHTML =
                ProtaBatalha3.nome + " Comprou o Hot Dog do meu parceiro. ";
            setTimeout(() => {
                ProtaBatalha3.HotDogJhon();
                vezesDeCura--;
                cura.style.width = (vezesDeCura / 2) * 20 + "px";
                if (ProtaBatalha3.hp > vidaMax) {
                    barraDeVidaProta.style.width = "199px";
                    ProtaBatalha3.hp = vidaMax;
                } else {
                    barraDeVidaProta.style.width = ProtaBatalha3.hp + "px";
                }
                if (vezesDeCura == 0) {
                    fala3.innerHTML =
                        " Ops, parece que, o dinheiro de " +
                        ProtaBatalha3.nome +
                        " acabou, Hot Dog muito caro, meu parceiro. ";
                    buttonAtq3.style.visibility = "hidden";
                    cura.style.visibility = "hidden";
                }
            }, 1000);
        } else {
            setTimeout(() => {
                buttonAtq1.style.visibility = "hidden";
                buttonAtq2.style.visibility = "hidden";
                buttonAtq3.style.visibility = "hidden";
                fala3.innerHTML =
                    ProtaBatalha3.nome +
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
                fala3.innerHTML = ProtaBatalha3.nome + " agora é sua vez.";
                buttonAtq1.style.visibility = "visible";
                buttonAtq2.style.visibility = "visible";
                buttonAtq3.style.visibility = "visible";
            }, 3000);
        } else {
            setTimeout(() => {
                fala3.innerHTML = BossThree.nome + " errou o ataque.";
                buttonAtq1.style.visibility = "visible";
                buttonAtq2.style.visibility = "visible";
                buttonAtq3.style.visibility = "visible";
            }, 2000);
        }
        trocarTurno();
    }

    function aleatorioAtaque() {
        let dado12 = Math.floor(Math.random() * 13);
        if (dado12 <= 9) {
            setTimeout(() => {
                fala3.innerHTML = BossThree.nome + " usou Anti React.";
                BossThree.AntiReact(ProtaBatalha3);
            }, 1000);
            setTimeout(() => {
                if (ProtaBatalha3.hp <= 0) {
                    barraDeVidaProta.style.width = "0px";
                    bossGanhouJogo();
                } else {
                    barraDeVidaProta.style.width = ProtaBatalha3.hp + "px";
                }
            }, 3000);
        } else {
            setTimeout(() => {
                fala3.innerHTML =
                    BossThree.nome + " Usou o ataque, Mimosinha, muuuuh.";
                BossThree.Mimosinha(ProtaBatalha3);
            }, 1000);
            setTimeout(() => {
                if (ProtaBatalha3.hp <= 0) {
                    barraDeVidaProta.style.width = "0px";
                    bossGanhouJogo();
                } else {
                    barraDeVidaProta.style.width = ProtaBatalha3.hp + "px";
                }
            }, 3000);
        }
    }

    function movimentoBoss() {
        rani.style.translate = "600px";

        rani.style.transform = "rotate(-40deg)";

        prota.style.transform = "rotate(40deg)";
        setTimeout(() => {
            rani.style.translate = "0px";

            rani.style.transform = "rotate(0deg)";

            prota.style.transform = "rotate(0deg)";
        }, 1000);
    }

    /*Bloco Final*/

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
        buttonAtq3.style.visibility = "visible";

        container.style.visibility = "visible";

        blocoOne.style.visibility = "visible";

        blocoTwo.style.visibility = "visible";

        iniciandoBatle.style.visibility = "hidden";

        bottonRow.style.visibility = "visible";

        ataques.style.visibility = "visible";

        bottonAtaque.style.visibility = "visible";

        buttonAtq1.style.visibility = "visible";

        buttonAtq2.style.visibility = "visible";

        buttonAtq3.style.visibility = "visible";
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
            <p class="nomeProta">{ProtaBatalha3.nome}</p>
        </div>
        <div id="prota">
            <img id="protaImagem" src="./luiza.png" alt="" srcset="" />
        </div>
    </div>
    <div id="blocoTwo" class="chars">
        <div class="raniInfo">
            <div id="barraDeVidaBoss3" />
            <p class="nomeBoss">{BossThree.nome}</p>
        </div>
        <div id="rani">
            <img id="bossImagem" src="./rani.png" alt="boss" srcset="" />
        </div>
    </div>
    <div id="bottonRow">
        <div>
            <div id="fala3" />
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
                >Jhon's Hot Dog {vezesDeCura}</button
            >
        </ul>
    </div>
</div>
<link rel="stylesheet" href="./src/assets/batalhaThree.css" />
