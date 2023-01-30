import { Voiture } from '../voiture/voiture.model';

export class ReparationVoiture {
    _id: String = '';
    nom: String = '';
    prenom: String = '';
    contact: String = '';
    login: String = '';
    mdp: String = '';
    listeVoiture: Voiture[] = [];
}
