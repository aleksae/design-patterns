import { PrikazStatistike, PrikazTrenutnogStanja, VidzetZaTemperaturu } from "./posmatraci";
import { PodaciOVremenu } from "./subjekat";

const podaciOVremenu = new PodaciOVremenu();
const prikazTrenutnogStanja = new PrikazTrenutnogStanja(podaciOVremenu);
const prikazStatistike = new PrikazStatistike(podaciOVremenu);
const vidzetZaTemperaturu = new VidzetZaTemperaturu(podaciOVremenu);

podaciOVremenu.registrujPosmatraca(prikazTrenutnogStanja);
podaciOVremenu.registrujPosmatraca(prikazStatistike);

podaciOVremenu.azuriranjeMerenja(25, 65, 1013);
podaciOVremenu.azuriranjeMerenja(26, 64, 1012);
podaciOVremenu.registrujPosmatraca(vidzetZaTemperaturu);
podaciOVremenu.azuriranjeMerenja(27, 63, 1011);
podaciOVremenu.ukloniPosmatraca(prikazStatistike);
podaciOVremenu.azuriranjeMerenja(28, 62, 1010);