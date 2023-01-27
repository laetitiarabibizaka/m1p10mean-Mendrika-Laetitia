import { Component, OnInit } from '@angular/core';

import { VoitureService } from '../../../services/voiture/voiture.service';
import { Router } from '@angular/router';
import { Voiture } from 'src/app/shared/voiture/voiture.model';
import { ReparationVoiture } from 'src/app/shared/reparationvoiture/reparation-voiture.model';

@Component({
  selector: 'app-listemesvoiture',
  templateUrl: './listemesvoiture.component.html',
  styleUrls: ['./listemesvoiture.component.scss']
})
export class ListemesvoitureComponent implements OnInit{

  constructor(
    public voitureService: VoitureService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getListeVoiture();
  }

  getListeVoiture() {
    var user = JSON.parse(sessionStorage.getItem("sessionUser"));
    var data=user.login;
    this.voitureService.getListeVoiture(data).subscribe((res)=>{
      if(res) {
        this.voitureService.listeVoitures = [];
        var repV = res['data'] as ReparationVoiture[];
        for(var i = 0; i< repV[0].listeVoiture.length; i++) {
          this.voitureService.listeVoitures.push(repV[0].listeVoiture[i]);
        }
      } else {
        //alert("Erreur");
      }
    });
  }
}
