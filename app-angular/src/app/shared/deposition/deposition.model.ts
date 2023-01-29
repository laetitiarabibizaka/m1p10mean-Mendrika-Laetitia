import { Utilisateur } from '../utilisateur/utilisateur.model'

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
}
