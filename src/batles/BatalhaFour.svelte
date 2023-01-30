<script>
    //@ts-nocheck
    import { estado } from "../Estado";
    import { Protagonista } from "../persons/Protagonista";
    import { Boss4 } from "../persons/Allan";
    import { writable } from "svelte/store";

    let ProtaBatalha4 = new Protagonista("Luiza", 241, 23, 9);
    let BossFour = new Boss4("Allan", 250, 25, 10);

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
    
    /*Bloco Do Protagonista, Battle 4*/
    let contadorAtq = 0;

    function ataqueProta() {
        let dado6 = Math.floor(Math.random() * 7);
        if (dado6 % 2 == 0) {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala4.innerHTML =
                ProtaBatalha4.nome + " Atacou com chuva da códigos";
            setTimeout(() => {
                ProtaBatalha4.ChuvaDeCodigos(BossFour);
                contadorAtq++;
                if (contadorAtq >= 4) {
                    poder.style.width = "40px";
                } else {
                    poder.style.width = (contadorAtq / 4) * 40 + "px";
                }
                if (BossFour.hp <= 0) {
                    barraDeVidaBoss4.style.width = "0px";
                } else {
                    barraDeVidaBoss4.style.width = BossFour.hp + "px";
                }
            }, 3000);
            setTimeout(() => {
                movimentoAtaque();
            }, 2000);
        } else {
            setTimeout(() => {
                buttonAtq1.style.visibility = "hidden";
                buttonAtq2.style.visibility = "hidden";
                buttonAtq3.style.visibility = "hidden";
                fala4.innerHTML = ProtaBatalha4.nome + " Errou o ataque";
            }, 1000);
        }
        setTimeout(() => {
            if (BossFour.hp <= 0) {
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

        allan.style.transform = "rotate(-50deg)";
        setTimeout(() => {
            prota.style.translate = "0px";

            allan.style.transform = "rotate(0deg)";

            prota.style.transform = "rotate(0deg)";
        }, 1000);
    }

    function ataqueProtaEspecial() {
        if (contadorAtq >= 4) {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala4.innerHTML =
                ProtaBatalha4.nome + " utilizou o ataque recursão ";
            setTimeout(() => {
                ProtaBatalha4.Recursao(BossFour);
                moveProtaEspecial();
                setTimeout(() => {
                    if (BossFour.hp <= 0) {
                        barraDeVidaBoss4.style.width = "0px";
                    } else {
                        barraDeVidaBoss4.style.width = BossFour.hp + "px";
                    }
                }, 1000);
                poder.style.width = "0px";
                contadorAtq = 0;
            }, 2000);
        } else {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala4.innerHTML =
                ProtaBatalha4.nome + " Não pode  utilizar o ataque ainda ";
        }
        setTimeout(() => {
            if (BossFour.hp <= 0) {
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

        allan.style.transform = "rotate(30deg)";

        setTimeout(() => {
            prota.style.translate = "0px";

            prota.style.transform = "rotate(0deg)";

            allan.style.transform = "rotate(0deg)";
        }, 1000);
    }

    let vezesDeCura = 2;
    function curaProtagonista() {
        let vidaMax = 241;
        if (ProtaBatalha4.hp < 241) {
            buttonAtq1.style.visibility = "hidden";
            buttonAtq2.style.visibility = "hidden";
            buttonAtq3.style.visibility = "hidden";
            fala4.innerHTML =
                ProtaBatalha4.nome + " Comprou o Hot Dog do meu parceiro. ";
            setTimeout(() => {
                ProtaBatalha4.HotDogJhon();
                vezesDeCura--;
                cura.style.width = (vezesDeCura / 2) * 20 + "px";
                if (vezesDeCura <= 0) {
                    fala4.innerHTML =
                        " Ops, parece que, o dinheiro de " +
                        ProtaBatalha4.nome +
                        " acabou, Hot Dog muito caro, meu parceiro. ";
                }
                if (ProtaBatalha4.hp > vidaMax) {
                    barraDeVidaProta.style.width = "241px";
                    ProtaBatalha4.hp = vidaMax;
                } else {
                    barraDeVidaProta.style.width = ProtaBatalha4.hp + "px";
                }
            }, 1000);
        } else {
            setTimeout(() => {
                buttonAtq1.style.visibility = "hidden";
                buttonAtq2.style.visibility = "hidden";
                buttonAtq3.style.visibility = "hidden";
                fala4.innerHTML =
                    ProtaBatalha4.nome +
                    " Ainda não é hora do intervalo, perdeu o seu turno.";
            }, 1000);
        }
        setTimeout(() => {
            bossAtaque();
        }, 1000);
        trocarTurno();
    }

    /*Bloco Boss*/

    let contadorDeCura = 1;

    function bossAtaque() {
        let dado6 = Math.floor(Math.random() * 7);
        if (BossFour.hp < 75 && contadorDeCura == 1) {
            setTimeout(() => {
                fala4.innerHTML = BossFour.nome + " usou seu trunfo.";
                BossFour.cura();
                barraDeVidaBoss4.style.width = BossFour.hp + "px";
                contadorDeCura = 0;
            }, 1000);
            setTimeout(() => {
                fala4.innerHTML = ProtaBatalha4.nome + " agora é sua vez.";
                if (vezesDeCura == 0) {
                    buttonAtq1.style.visibility = "visible";
                    buttonAtq2.style.visibility = "visible";
                } else {
                    buttonAtq1.style.visibility = "visible";
                    buttonAtq2.style.visibility = "visible";
                    buttonAtq3.style.visibility = "visible";
                }
            }, 1000);
        } else if (dado6 % 2 == 0) {
            setTimeout(() => {
                aleatorioAtaque();
            }, 1000);
            setTimeout(() => {
                movimentoBoss();
                fala4.innerHTML = ProtaBatalha4.nome + " agora é sua vez.";
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
            setTimeout(() => {
                fala4.innerHTML = BossFour.nome + " errou o ataque.";
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
        if (dado12 <= 10) {
            setTimeout(() => {
                fala4.innerHTML =
                    BossFour.nome +
                    " Usou o ataque Cheirinho nesse código, e sentiu cheiro de caquinha aqui einnnn";
                BossFour.CheirinhoNesseCodigo(ProtaBatalha4);
            }, 1000);
            setTimeout(() => {
                if (ProtaBatalha4.hp <= 0) {
                    barraDeVidaProta.style.width = "0px";
                    bossGanhouJogo();
                } else {
                    barraDeVidaProta.style.width = ProtaBatalha4.hp + "px";
                }
            }, 3000);
        } else {
            setTimeout(() => {
                fala4.innerHTML =
                    BossFour.nome +
                    " Usou o ataque, Anti Gadismo, é 13 neles hahhahha";
                BossFour.AntiGadismo(ProtaBatalha4);
                if (contadorAtq <= 0){
                    contadorAtq = 0;
                    poder.style.width = "0px";
                }else {
                    contadorAtq = contadorAtq - 1;
                    poder.style.width = (contadorAtq / 4) * 40 + "px";
                }
            }, 1000);
        }
        setTimeout(() => {
            if (ProtaBatalha4.hp <= 0) {
                barraDeVidaProta.style.width = "0px";
                bossGanhouJogo();
            } else {
                barraDeVidaProta.style.width = ProtaBatalha4.hp + "px";
            }
        }, 3000);
    }

    function movimentoBoss() {
        allan.style.translate = "600px";

        allan.style.transform = "rotate(-40deg)";

        prota.style.transform = "rotate(40deg)";
        setTimeout(() => {
            allan.style.translate = "0px";

            allan.style.transform = "rotate(0deg)";

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
            <p class="nomeProta">{ProtaBatalha4.nome}</p>
        </div>
        <div id="prota">
            <img id="protaImagem" src="./luiza.png" alt="" srcset="" />
        </div>
    </div>
    <div id="blocoTwo" class="chars">
        <div class="allanInfo">
            <div id="barraDeVidaBoss4" />
            <p class="nomeBoss">{BossFour.nome}</p>
        </div>
        <div id="allan">
            <img id="bossImagem" src="./allan.png" alt="boss" srcset="" />
        </div>
    </div>
    <div id="bottonRow">
        <div>
            <div id="fala4" />
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

<link rel="stylesheet" href="./src/assets/batalhaFour.css" />
