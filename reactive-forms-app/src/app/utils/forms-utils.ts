import { FormGroup, FormArray, ValidationErrors } from '@angular/forms';
export class FormUtils {

  static getErrors(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requrido';

        case 'minlength':
          console.log('errors', errors);
          return `Minimo de ${errors['minlength'].requiredLength} caracteres.`;

        case 'min':
          return `Valor minimi de ${errors['min'].min}.`;
      }
    }
    return null;
  }


  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return form.controls[fieldName].errors && form.controls[fieldName].touched;
  }


  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors ?? {};
    return FormUtils.getErrors(errors);

  }

  static isValidFielFormArray(formArray: FormArray, indice: number) {
    return formArray.controls[indice].errors && formArray.controls[indice].touched;
  }

  static getFieldArrayError(formArray: FormArray, indice: number): string | null {
    if (formArray.controls.length == 0) return null;

    const errors = formArray.controls[indice].errors ?? {};
    return FormUtils.getErrors(errors);
  }
}
