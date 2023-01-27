
export class Boss2{
    constructor(nome, hp, Ataque, Defesa, image){
        this.nome = nome;
        this.hp = hp;
        this.Ataque = Ataque;
        this.Defesa = Defesa;
        image = image;
    }

    HoraDaPratica(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.Ataque - ObjAtacado.Defesa)
    }
    
    PartiuCrossfit(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - ((this.Ataque*3) - ObjAtacado.Defesa)
    }
}

