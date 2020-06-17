import {Ingredient} from './Ingredient';

export class Phase {
  text: string;
  name: string;
  pizzaIngredientSelectors: PizzaIngredientSelector[];
  unique: boolean;
}

export class PizzaIngredientSelector {
  selected: boolean;
  ingredient: Ingredient;
}
