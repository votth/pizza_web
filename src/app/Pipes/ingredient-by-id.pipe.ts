import { Pipe, PipeTransform } from '@angular/core';
import { ingredients } from '../HardDatabase/DatabaseHelper';
import { Ingredient } from '../Models/Ingredient';

@Pipe({
  name: 'ingredientById'
})
export class IngredientByIdPipe implements PipeTransform {

  tempArr: Ingredient[] = [];

  transform(value: number): string {
    this.tempArr = ingredients.filter((data: Ingredient) => data.id === value);
    return this.tempArr[0].name;
  }

}
