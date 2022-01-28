import { IDecorateur } from "../interface/decorateur";

export class OptionCompose implements IDecorateur{
    public sejourEncapsuler: IDecorateur;
    tarif : number;
    constructor(sejour: IDecorateur, tarif : number){
        this.sejourEncapsuler = sejour
        this.tarif = tarif;
    }

    prix(): number {
        return this.sejourEncapsuler.prix() + this.tarif;
    }

    showDetails(){
        return `${this.sejourEncapsuler.showDetails()} + ${this.tarif}`;
    }
}

export class Restauration extends OptionCompose{
}

export class promenadeEnChameau extends OptionCompose{
}

// export class sejourAvecSport extends OptionCompose{
// }OptionCompose


