import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidators } from './confirm-password.validators';
import { OldPasswordValidators } from './old-password.validators';

@Component({
  selector: 'change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  form: FormGroup

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ["", Validators.required, OldPasswordValidators.isPasswordCorrect],
      newPassword: ["", Validators.required],
      confirmPassword: ["",Validators.required]
    }, {
      validators: ConfirmPasswordValidators.isPasswordMatch("newPassword", "confirmPassword")
    })
  }

  get oldPassword(){
    return this.form.get('oldPassword')
  }

  get newPassword() {
    return this.form.get('newPassword')
  }

  get confirmPassword(){
    return this.form.get('confirmPassword')
  }

}
