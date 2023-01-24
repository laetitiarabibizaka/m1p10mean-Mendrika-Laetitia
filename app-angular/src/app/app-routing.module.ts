import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './pages/client/accueil/accueil.component';
import { AjoutvehiculeComponent } from './pages/client/ajoutvehicule/ajoutvehicule.component';
import { ClientComponent } from './pages/client/client.component';
import { ListemesreparationComponent } from './pages/client/listemesreparation/listemesreparation.component';
import { ListemesvoitureComponent } from './pages/client/listemesvoiture/listemesvoiture.component';
import { ProfileComponent } from './pages/client/profile/profile.component';
import { ListereparationComponent } from './pages/listereparation/listereparation.component';
import { SigninComponent } from './pages/signin/signin.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
