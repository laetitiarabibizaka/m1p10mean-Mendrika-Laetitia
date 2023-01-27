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
    FichevoitureComponent
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
