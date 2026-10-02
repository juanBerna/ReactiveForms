import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/forms-utils';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './dynamic-page.html',
})
export class DynamicPage {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  newFavoriteGameControl = this.fb.control([]);

  myFormDynamic: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGame: this.fb.array([], Validators.minLength(3)),
  });

  get favoriteGames() {
    return this.myFormDynamic.get('favoriteGame') as FormArray;
  }

  addToArrayFG() {
    if (this.newFavoriteGameControl.invalid) return;

    const newGame = this.newFavoriteGameControl.value;
    this.favoriteGames.push(
      this.fb.control(newGame, [Validators.required, Validators.minLength(3)]),
    );
  }

  delateFG(indice: number) {
    this.favoriteGames.removeAt(indice);
  }
}
