import { PonasanjeKvakanja, PonasanjeLetenja } from "./ponasanja";

export abstract class Patka {
    ponasanjeLetenja: PonasanjeLetenja;
    ponasanjeKvakanja: PonasanjeKvakanja;

    constructor() {}

    public abstract prikazi(): void;

    public izvrsiLetenje(): void {
        this.ponasanjeLetenja.leti();
    }

    public izvrsiKvakanje(): void {
        this.ponasanjeKvakanja.kvaci();
    }

    public plivaj(): void {
        console.log("Sve patke plivaju!");
    }

    public podesiNacinLetenja(novoPonasanje: PonasanjeLetenja): void {
        this.ponasanjeLetenja = novoPonasanje;
    }

    public podesiNacinKvakanja(novoPonasanje: PonasanjeKvakanja): void {
        this.ponasanjeKvakanja = novoPonasanje;
    }
}

