import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/forms-utils';
import { ValidatorUtils } from '../../../utils/validator-utils';

@Component({
  selector: 'app-register-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './register-page.html',
})
export class RegisterPage {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  formRegister = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(ValidatorUtils.namePattern)]],
    email: ['', [ Validators.required, Validators.pattern(ValidatorUtils.emailPattern)]],
    username: ['', [  Validators.required, Validators.minLength(6), Validators.pattern(ValidatorUtils.notOnlySpacesPattern)]],
    password: ['', [  Validators.required, Validators.minLength(6)]],
    password2: ['', Validators.required],
  },{
    Validators: [this.formUtils.passwordsIguales('password', 'password2')]
  }
);


  Guardar() {
    if(this.formRegister.invalid) {
      this.formRegister.markAllAsTouched();
      return;
    }
    const formValue = { ...this.formRegister.value };
    console.log(formValue);
  }
}
