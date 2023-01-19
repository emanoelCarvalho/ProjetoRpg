import { writable } from "svelte/store";

export class Protagonista {
    constructor(nome, hp, Ataque, Defesa, image ){
        this.nome = nome;
        this.hp = hp;
        this.Ataque = Ataque;
        this.Defesa = Defesa;
        this.image = image; 
    }

    ChuvaDeCodigos(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.Ataque - ObjAtacado.Defesa) 
    }

    Recursao(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - ((this.Ataque*5) - ObjAtacado.Defesa)
    }

    HoraDoCafe(){
        this.hp = this.hp + (Math.round(3*(Math.random()+10)));
    }
}

