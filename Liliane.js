import { writable } from "svelte/store";

export class Boss1 {
    constructor(nome, hp, Ataque, Defesa, image ){
        this.nome = nome;
        this.hp  = hp;
        this.Ataque = Ataque;
        this.Defesa = Defesa;
        image = image;
    }

    Linux(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.Ataque - ObjAtacado.Defesa)
    }

    Arduino(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - ((this.Ataque*2) - ObjAtacado.Defesa)
    }
}
