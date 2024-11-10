import { DivljaPatka } from "./implementacije_pataka";
import { Patka } from "./patka";
import { NeLeti } from "./ponasanja";

let divljaPatka:Patka = new DivljaPatka();
divljaPatka.prikazi();
divljaPatka.izvrsiLetenje();
divljaPatka.izvrsiKvakanje();
divljaPatka.izvrsiLetenje();
divljaPatka.plivaj();

let patkaZaIzlaganje:Patka = new DivljaPatka();
patkaZaIzlaganje.prikazi();
patkaZaIzlaganje.izvrsiLetenje();
patkaZaIzlaganje.izvrsiKvakanje();
patkaZaIzlaganje.podesiNacinLetenja(new NeLeti());
patkaZaIzlaganje.izvrsiLetenje();
patkaZaIzlaganje.plivaj();



