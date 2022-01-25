import {Component, Input} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent {

  user: User = new User();

  onSubmit(): void {
    // Traitement à faire à la soumission du form
    // Comme envoyer en post le user créé
    // rediriger l'utilisateur sur une autre page
    console.log(this.user);
    this.user.nbSubmission++;
  }

}
