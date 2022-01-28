import { IDecorateur } from "../interface/decorateur";

export class Simple implements IDecorateur {
    public tarif : number;
    constructor(tarif: number) 
    {
        this.tarif = tarif;
    }
    prix(): number {
        return this.tarif;
    }
    showDetails(){
        return `Prix total : ${this.prix()} (tarif normaml)`;
    }
    
}