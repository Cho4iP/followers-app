import { FormBuilder, Validators, FormGroup, AbstractControlOptions } from '@angular/forms';
import { Component } from '@angular/core';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {

  form: any;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: fb.control('', [
        Validators.required,
        Validators.minLength(3)
      ], PasswordValidators.invalidOldPassword),

      newPassword: fb.control('', [
        Validators.required,
        Validators.minLength(3)
      ]),

      confirmPassword: ['', Validators.required]
    }, {validators: PasswordValidators.matchPassword});
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

}

