
export class Boss4 {
    constructor(nome, hp, Ataque, Defesa, image){
        this.nome = nome; 
        this.hp = hp;
        this.Ataque = Ataque;
        this.Defesa = Defesa;
        image = image;
    }

    CheirinhoNesseCodigo(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.Ataque - ObjAtacado.Defesa)
    }

    AntiGadismo(ObjAtacado){
        ObjAtacado.hp = ObjAtacado.hp - (this.Ataque * 6)
    }

    cura(){
        this.hp = this.hp + 100
    }
}