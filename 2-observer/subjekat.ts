import { Posmatrac } from "./posmatraci";

export interface Subjekat {
    registrujPosmatraca(posmatrac: Posmatrac): void;
    ukloniPosmatraca(posmatrac: Posmatrac): void;
    obavestiPosmatrace(): void;
}

export class PodaciOVremenu implements Subjekat{
    private temperatura: number;
    private vlaznost: number;
    private pritisak: number;
    private posmatraci: Posmatrac[];

    constructor(){
        this.posmatraci = [];
        this.temperatura = 0;
        this.vlaznost = 0;
        this.pritisak = 0;
    }

    registrujPosmatraca(posmatrac: Posmatrac): void {
        this.posmatraci.push(posmatrac);
    }

    ukloniPosmatraca(posmatrac: Posmatrac): void {
        const index = this.posmatraci.indexOf(posmatrac);
        if(index >= 0){
            this.posmatraci.splice(index, 1);
        }
    }

    obavestiPosmatrace(): void {
        this.posmatraci.forEach(posmatrac => {
            posmatrac.azuriraj();
        });
    }

    dohvatiTemperaturu(): number {
        return this.temperatura;
    }

    dohvatiVlaznost(): number {
        return this.vlaznost;
    }

    dohvatiPritisak(): number {
        return this.pritisak;
    }

    azuriranjeMerenja(temperatura: number, vlaznost: number, pritisak: number): void {
        this.temperatura = temperatura;
        this.vlaznost = vlaznost;
        this.pritisak = pritisak;
        this.obavestiPosmatrace();
    }
}
