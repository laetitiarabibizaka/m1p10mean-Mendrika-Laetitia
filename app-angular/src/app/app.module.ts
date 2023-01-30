import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListehistoriqueComponent } from './pages/listehistorique/listehistorique.component';
import { ListereparationComponent } from './pages/listereparation/listereparation.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninComponent } from './pages/signin/signin.component';
import { MenubarComponent } from './components/client/menubar/menubar.component';
import { NavbarClientComponent } from './components/client/navbar-client/navbar-client.component';
import { FooterClientComponent } from './components/client/footer-client/footer-client.component';
import { ClientComponent } from './pages/client/client.component';
import { AccueilComponent } from './pages/client/accueil/accueil.component';
import { ListemesreparationComponent } from './pages/client/listemesreparation/listemesreparation.component';
import { ListemesvoitureComponent } from './pages/client/listemesvoiture/listemesvoiture.component';
import { ProfileComponent } from './pages/client/profile/profile.component';
import { AjoutvehiculeComponent } from './pages/client/ajoutvehicule/ajoutvehicule.component';
import { ImageComponent } from './components/client/image/image.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FichevoitureComponent } from './pages/client/fichevoiture/fichevoiture.component';
import { NavbarAtelierComponent } from './components/atelier/navbar-atelier/navbar-atelier.component';
import { ReparationEncoursComponent } from './pages/atelier/reparation-encours/reparation-encours.component';
import { LoginComponent } from './pages/atelier/login/login.component';
import { FicheReparationComponent } from './pages/atelier/fiche-reparation/fiche-reparation.component';
import { MenubarAtelierComponent } from './components/atelier/menubar-atelier/menubar-atelier.component';
import { MaficheReparationComponent } from './pages/client/mafiche-reparation/mafiche-reparation.component';
import { ListeFacturesComponent } from './pages/atelier/listefactures/liste-factures/liste-factures.component';
import { FinanceAcceuilComponent } from './pages/finance/finance-acceuil/finance-acceuil.component';
import { NavbarFinanceComponent } from './components/finance/navbar-finance/navbar-finance.component';
import { FinanceFicheComponent } from './pages/finance/finance-fiche/finance-fiche.component';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    HeaderComponent,
    FooterComponent,
    ListehistoriqueComponent,
    ListereparationComponent,
    NavbarComponent,
    SigninComponent,
    MenubarComponent,
    AccueilComponent,
    NavbarClientComponent,
    FooterClientComponent,
    ListemesreparationComponent,
    ListemesvoitureComponent,
    ClientComponent,
    ProfileComponent,
    AjoutvehiculeComponent,
    ImageComponent,
    FichevoitureComponent,
    NavbarAtelierComponent,
    ReparationEncoursComponent,
    LoginComponent,
    FicheReparationComponent,
    MenubarAtelierComponent,
    MaficheReparationComponent,
    ListeFacturesComponent,
    FinanceAcceuilComponent,
    NavbarFinanceComponent,
    FinanceFicheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    NgxDropzoneModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
