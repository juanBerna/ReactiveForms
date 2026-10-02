import { FormUtils } from './../../../utils/forms-utils';
import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basi-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basi-page.html',
})
export class BasiPage {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    price: [0,[Validators.required, Validators.min(10)]],
    inStorage: [0,[Validators.required, Validators.min(0)]],
  })

  onSave(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset()
  }
}
