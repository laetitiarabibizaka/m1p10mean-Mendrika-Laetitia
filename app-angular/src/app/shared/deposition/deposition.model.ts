import { Utilisateur } from '../utilisateur/utilisateur.model'
import { Voiture } from '../voiture/voiture.model'

export class Deposition {
    id: string = ''
    date: Date = new Date()
    commentaire: string = ''
    respAtelier: Utilisateur = new Utilisateur
    dateReception: Date = new Date()
    listeRep: [] = []
    dateSortie: Date = new Date()
    dateRecuperation: Date = new Date()
    facture: Object = new Date()
    etat: number = 1
    voiture: Voiture = new Voiture()
    stringfy: string= ''
}
