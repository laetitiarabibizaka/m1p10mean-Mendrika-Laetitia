import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageComponent } from './components/client/image/image.component';
import { HeaderComponent } from './components/header/header.component';
import { FicheReparationComponent } from './pages/atelier/fiche-reparation/fiche-reparation.component';
import { LoginComponent } from './pages/atelier/login/login.component';
import { ReparationEncoursComponent } from './pages/atelier/reparation-encours/reparation-encours.component';
import { AccueilComponent } from './pages/client/accueil/accueil.component';
import { AjoutvehiculeComponent } from './pages/client/ajoutvehicule/ajoutvehicule.component';
import { ClientComponent } from './pages/client/client.component';
import { FichevoitureComponent } from './pages/client/fichevoiture/fichevoiture.component';
import { ListemesreparationComponent } from './pages/client/listemesreparation/listemesreparation.component';
import { ListemesvoitureComponent } from './pages/client/listemesvoiture/listemesvoiture.component';
import { MaficheReparationComponent } from './pages/client/mafiche-reparation/mafiche-reparation.component';
import { ProfileComponent } from './pages/client/profile/profile.component';
import { FinanceAcceuilComponent } from './pages/finance/finance-acceuil/finance-acceuil.component';
import { FinanceFicheComponent } from './pages/finance/finance-fiche/finance-fiche.component';
import { ListereparationComponent } from './pages/listereparation/listereparation.component';
import { SigninComponent } from './pages/signin/signin.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ListeFacturesComponent } from './pages/atelier/listefactures/liste-factures/liste-factures.component';

const routes: Routes = [
  { path: '', component: UtilisateurComponent },
  { path: 'listereparation', component: ListereparationComponent },
  { path: 'signin', component: SigninComponent },
  {
    path: 'client',
    component: ClientComponent
  },
  { path: 'accueil', component: AccueilComponent },
  { path: 'mesreparations', component: ListemesreparationComponent },
  { path: 'mesvoitures', component: ListemesvoitureComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'addvehicule', component: AjoutvehiculeComponent},
  { path: 'image', component: ImageComponent},
  { path: 'fiche/:numero', component: FichevoitureComponent},
  { path: 'atelier/reparation', component : ReparationEncoursComponent},
  { path: 'atelier/login', component : LoginComponent},
  { path: 'atelier/fichereparation/:depot/:date/:numero', component : FicheReparationComponent},
  { path: 'fichereparation/:depot/:date/:numero', component : MaficheReparationComponent},
  { path: 'atelier/listeFactures', component: ListeFacturesComponent},
  { path: 'finance/finance-acceuil', component : FinanceAcceuilComponent},
  { path: 'finance/saisiedepense', component : FinanceAcceuilComponent},
  { path: 'finance/finance-fiche/:depot/:date/:numero', component : FinanceFicheComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
