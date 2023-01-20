

export class Boss3 {
    constructor(nome, hp, Ataque, Defesa, image){
        this.nome = nome;
        this.hp = hp;
        this.Ataque = Ataque;
        this.Defesa = Defesa;       
        image = image;
    }

    AntiReact(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.Ataque - ObjAtacado.Defesa) 
    }

    Mimosinha(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - ((this.Ataque * 4) - ObjAtacado.Defesa) 
    }
}

