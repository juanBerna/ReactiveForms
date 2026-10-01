import { FormGroup, FormArray, ValidationErrors, AbstractControl } from '@angular/forms';
import { ValidatorUtils } from './validator-utils';
export class FormUtils {

  validatorUtils = ValidatorUtils;

  static getErrors(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      console.log('errors pattern', errors['pattern']);
      switch (key) {
        case 'required':
          return 'Este campo es requrido';

        case 'minlength':
          console.log('errors', errors);
          return `Minimo de ${errors['minlength'].requiredLength} caracteres.`;

        case 'min':
          return `Valor minimi de ${errors['min'].min}.`;
        case 'email':
          return `Formato de email no válido.`;

        case 'pattern':
          if (errors['pattern'].requiredPattern === ValidatorUtils.emailPattern)
            return `Formato de email no válido.`;
          if (errors['pattern'].requiredPattern === ValidatorUtils.namePattern)
            return `Formato de nombre no válido.`;
          if (errors['pattern'].requiredPattern === ValidatorUtils.notOnlySpacesPattern)
            return `Formato no válido.`;

          return `Formato no válido2.`;
        default:
          return `Error en el campo ${key} `;
      }
    }
    return null;
  }

  static passwordsIguales(pass1Name: string, pass2Name: string) {
  return (formGroup: AbstractControl) => {
    const pass1Control = formGroup.get(pass1Name)?.value;
    const pass2Control = formGroup.get(pass2Name)?.value;

   return pass1Control === pass2Control ? null : { noEsIgual: true };
  };
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
