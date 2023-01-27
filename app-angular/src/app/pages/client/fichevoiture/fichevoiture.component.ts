import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureService } from 'src/app/services/voiture/voiture.service';
import { Voiture } from 'src/app/shared/voiture/voiture.model';

@Component({
  selector: 'app-fichevoiture',
  templateUrl: './fichevoiture.component.html',
  styleUrls: ['./fichevoiture.component.scss']
})
export class FichevoitureComponent {
  id: string = '';
  numero: string = '';
  marque: string = '';
  model: string = '';
  proprietaire: string = '';
  datedepot: string = '';
  commentaire: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private voitureService : VoitureService
  ) {
    this.get_info()
  }
  ngInit() {  
    this.get_info()
  }
  get_info() {
    this.activatedRoute.params.subscribe(params => {
      let numero = params['numero'];
      console.log("indroooo ",numero);
      this.voitureService.getVoitureBynumero(numero).subscribe((res:any)=>{
        if(res) {
           let value = res['data'] as Voiture[]
           console.log("VOITURE ", value[0].modele)
          this.numero = value[0].numero
          this.marque = value[0].marque
          this.model = value[0].modele
        } else {
          //alert("Erreur");
        }
      });
    });
  }
  deposerVoiture() {
    console.log("Commentaire", this.commentaire)
    console.log("Date ", this.datedepot)
  }

  recuperation() {

  }
}
