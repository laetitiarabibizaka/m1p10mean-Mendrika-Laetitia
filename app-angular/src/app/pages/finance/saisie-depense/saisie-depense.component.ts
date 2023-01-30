import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-saisie-depense',
  templateUrl: './saisie-depense.component.html',
  styleUrls: ['./saisie-depense.component.scss']
})
export class SaisieDepenseComponent {
  id: string = '';
  date : Date = new Date();
  desce: string = '';
  montant: Number = 0.0;
  etat: Number = 0;

  constructor(
    private router: Router,
    private utilisateurService: UtilisateurService
  ) { }

  ngOnInit(): void {
  }
  
  ajouteDepense(){
    this.utilisateurService.saisiedepense(this.desce,this.date,this.montant).subscribe((res)=>{
      this.router.navigate(['/finance/saisiedepense']);
    },(error) => {
      console.log(error);
        this.router.navigate(['/']);
      });
  }
}
