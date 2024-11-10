import { PodaciOVremenu } from "./subjekat";

export interface Posmatrac {
    azuriraj(): void;
}

export interface PrikaziElement {
    prikazi(): void;
}

export class PrikazTrenutnogStanja implements Posmatrac, PrikaziElement{
    private temperatura: number;
    private vlaznost: number;
    private pritisak: number;
    private izvorPodataka: PodaciOVremenu;

    constructor(subjekat: PodaciOVremenu){
        this.temperatura = 0;
        this.vlaznost = 0;
        this.pritisak = 0;
        this.izvorPodataka = subjekat;
    }

    azuriraj(): void {
        this.temperatura = this.izvorPodataka.dohvatiTemperaturu();
        this.vlaznost = this.izvorPodataka.dohvatiVlaznost();
        this.pritisak = this.izvorPodataka.dohvatiPritisak();
        this.prikazi();
    }

    prikazi(): void {
        console.log(`Trenutno stanje: ${this.temperatura} stepeni, ${this.vlaznost}% vlaznosti i ${this.pritisak}hPa vazdusnog pritiska`);
    }
    
}

export class PrikazStatistike implements Posmatrac, PrikaziElement{
    private temperature: number[];
    private vlaznosti: number[];
    private pritisci: number[];
    private izvorPodataka: PodaciOVremenu;

    constructor(subjekat: PodaciOVremenu){
        this.temperature = [];
        this.vlaznosti = [];
        this.pritisci = [];
        this.izvorPodataka = subjekat;
    }

    azuriraj(): void {
        this.temperature.push(this.izvorPodataka.dohvatiTemperaturu());
        this.vlaznosti.push(this.izvorPodataka.dohvatiVlaznost());
        this.pritisci.push(this.izvorPodataka.dohvatiPritisak());
        this.prikazi();
    }

    prikazi(): void {
        const prosekTemperature = this.izracunajProsek(this.temperature);
        const prosekVlaznosti = this.izracunajProsek(this.vlaznosti);
        const prosekPritiska = this.izracunajProsek(this.pritisci);
        console.log(`Prosek: ${prosekTemperature} stepeni, ${prosekVlaznosti}% vlaznosti i ${prosekPritiska}hPa vazdusnog pritiska`);
    }

    private izracunajProsek(niz: number[]): number {
        return niz.reduce((a, b) => a + b, 0) / niz.length;
    }
}

export class VidzetZaTemperaturu implements Posmatrac, PrikaziElement{
    private temperatura: number;
    private izvorPodataka: PodaciOVremenu;

    constructor(subjekat: PodaciOVremenu){
        this.temperatura = 0;
        this.izvorPodataka = subjekat;
    }

    azuriraj(): void {
        this.temperatura = this.izvorPodataka.dohvatiTemperaturu();
        this.prikazi();
    }

    prikazi(): void {
        console.log(`Trenutna temperatura je ${this.temperatura} stepeni`);
    }
}


