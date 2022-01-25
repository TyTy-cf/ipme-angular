import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../models/user";

@Component({
  selector: 'app-form-user-code',
  templateUrl: './form-user-code.component.html',
  styleUrls: ['./form-user-code.component.scss']
})
export class FormUserCodeComponent implements OnInit {

  formGroup!: FormGroup;
  user: User = new User();

  ngOnInit(): void {
    this.formGroup = new FormGroup(
      {
        _lastName: new FormControl(
          this.user.lastName,
          [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('[a-zA-Z\'\\-\'\\s]*')
          ]
        ),
        _firstName: new FormControl(
          this.user.firstName,
          [
            Validators.required,
          ]
        ),
        _email: new FormControl(
          this.user.email,
          [
            Validators.required,
          ]
        )
      }
    );
  }

  get lastName(): AbstractControl {
    return this.getAbstractControlByFieldName('_lastName');
  }

  get firstName(): AbstractControl {
    return this.getAbstractControlByFieldName('_firstName');
  }

  get email(): AbstractControl {
    return this.getAbstractControlByFieldName('_email');
  }

  getAbstractControlByFieldName(field: string): AbstractControl {
    return <AbstractControl>this.formGroup.get(field);
  }

  onSubmit(): void {
    this.user.email = this.email.value;
    this.user.firstName = this.firstName.value;
    this.user.lastName = this.lastName.value;
    console.log(this.user);
  }
}
