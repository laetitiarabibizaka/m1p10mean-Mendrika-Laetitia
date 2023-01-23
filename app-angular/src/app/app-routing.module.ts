import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ListereparationComponent } from './pages/listereparation/listereparation.component';
import { SigninComponent } from './pages/signin/signin.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';

const routes: Routes = [
  { path: 'login', component: UtilisateurComponent },
  { path: 'listereparation', component: ListereparationComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'accueil', component : AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
