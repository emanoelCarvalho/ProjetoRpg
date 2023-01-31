import { writable } from "svelte/store";

export class Protagonista {
    constructor(nome, hp, Ataque, Defesa, image) {
        this.nome = nome;
        this.hp = hp;
        this.Ataque = Ataque;
        this.Defesa = Defesa;
        this.image = image;
    }

    ChuvaDeCodigos(ObjAtacado) {
        ObjAtacado.hp = ObjAtacado.hp - (this.Ataque - ObjAtacado.Defesa)
    }

    Recursao(ObjAtacado) {
        ObjAtacado.hp = ObjAtacado.hp - ((this.Ataque * 3) - ObjAtacado.Defesa)
    }

    HoraDoCafe() {
        let min = 30;
        let randoValue = (Math.floor(Math.random() * 50));

        if (randoValue < min) {
            randoValue =  min
            this.hp = this.hp + randoValue;
        } else {
            this.hp = this.hp + randoValue;
        }
    }

    HotDogJhon() {
        this.hp = this.hp + 70;
    }
}

