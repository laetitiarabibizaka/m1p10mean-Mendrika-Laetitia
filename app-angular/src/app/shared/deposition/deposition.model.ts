import { Utilisateur } from '../utilisateur/utilisateur.model'

export class Deposition {
    id: string = ''
    date: Date = null
    commentaire: string = ''
    respAtelier: Utilisateur = null
    dateReception: Date = null
    listeRep: [] = []
    dateSortie: Date = null
    dateRecuperation: Date = null
    facture: Object = null
}
