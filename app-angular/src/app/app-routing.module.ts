import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/client/accueil/accueil.component';
import { ListemesreparationComponent } from './components/client/listemesreparation/listemesreparation.component';
import { ListemesvoitureComponent } from './components/client/listemesvoiture/listemesvoiture.component';
import { HeaderComponent } from './components/header/header.component';
import { ListereparationComponent } from './pages/listereparation/listereparation.component';
import { SigninComponent } from './pages/signin/signin.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
  { path: 'login', component: UtilisateurComponent },
  { path: 'listereparation', component: ListereparationComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'mesreparations', component: ListemesreparationComponent},
  { path: 'mesvoitures', component: ListemesvoitureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
