import { Deposition } from "../deposition/deposition.model";

export class Voiture {
    id: string = '';
    numero: string = '';
    marque: string = '';
    modele: string = '';
    listeDepot : Deposition[] = [];
}
