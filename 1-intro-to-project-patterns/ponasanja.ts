export interface PonasanjeLetenja {
    leti(): void; 
}

export interface PonasanjeKvakanja {
    kvaci(): void;
}

export class LetiSaKrilima implements PonasanjeLetenja {
    leti(): void {
        console.log("Letim sa krilima!");
    }
}

export class NeLeti implements PonasanjeLetenja {
    leti(): void {
        console.log("Ne letim!");
    }
}

export class Kvaci implements PonasanjeKvakanja {
    kvaci(): void {
        console.log("Kvak!");
    }
}

export class NeKvaci implements PonasanjeKvakanja {
    kvaci(): void {
        console.log("Ne kvacem!");
    }
}

export class Skvici implements PonasanjeKvakanja {
    kvaci(): void {
        console.log("Skvicim!");
    }
}