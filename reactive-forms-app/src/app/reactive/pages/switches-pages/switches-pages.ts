import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/forms-utils';

@Component({
  selector: 'app-switches-pages',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './switches-pages.html',
})
export class SwitchesPages {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  formSwitches = this.fb.group({
    gender: ['M', Validators.required],
    notifications: [true],
    terms: [false, Validators.requiredTrue],
  });

  Guardar() {
    if(this.formSwitches.invalid) {
      this.formSwitches.markAllAsTouched();
      return;
    }
    const formValue = { ...this.formSwitches.value };
    console.log(formValue);
  }
}
