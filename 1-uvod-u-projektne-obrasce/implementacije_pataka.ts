import { Patka } from "./patka";
import { Kvaci, LetiSaKrilima } from "./ponasanja";

export class DivljaPatka extends Patka {
    constructor(){
        super();
        this.ponasanjeLetenja = new LetiSaKrilima();
        this.ponasanjeKvakanja = new Kvaci();
    }
    prikazi(): void {
        console.log("Ja sam divlja patka!");
    }
}

export class PatkaZaIzlaganje extends Patka {
    constructor(){
        super();
        this.ponasanjeLetenja = new LetiSaKrilima();
        this.ponasanjeKvakanja = new Kvaci();
    }
    prikazi(): void {
        console.log("Ja sam patka za izlaganje!");
    }
}
