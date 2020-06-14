import {Component, OnInit} from '@angular/core';
import {Pizza} from '../../../Models/Pizza';
import {Ingredient} from '../../../Models/Ingredient';
import {DatabaseHelper} from '../../../HardDatabase/DatabaseHelper';
import ingredients = DatabaseHelper.ingredients;

@Component({
  selector: 'app-create-pizza',
  templateUrl: './create-pizza.component.html',
  styleUrls: ['./create-pizza.component.css']
})
export class CreatePizzaComponent implements OnInit {

  pizza: Pizza = new Pizza();
  pizzaIngredientSelectors: PizzaIngredientSelector[] = [];
  phases: string[] = ['size', 'doughThickness', 'doughType', 'base', 'topping', 'finish'];
  nextPhase = 0;

  constructor() {

  }

  ngOnInit(): void {
  }

  NextPhase() {
    const selectedNextPhase = this.phases[this.nextPhase];
    // ha nem az első fázisban vagyunk, az aktuális oldal tartalmát beletöltjük a pizzába amit épp készítünk
    if (this.nextPhase !== 0) {
      // végigmegyünk a gombokon és a kijelölés alapján betöltjük a pizzába az elemeket
      this.pizzaIngredientSelectors.forEach(pizzaIngredientSelector => {
        if (pizzaIngredientSelector.selected) {
          if (!this.pizza.ingredients.find(value => pizzaIngredientSelector.ingredient)) {
            // ha nincs benne beletöltjük
            this.pizza.ingredients.push(pizzaIngredientSelector.ingredient);
          }
        } else {
          const pizzaIndex = this.pizza.ingredients.findIndex(value => pizzaIngredientSelector.ingredient);
          if (pizzaIndex !== -1) {
            // ha benne van kitöröljük
            this.pizza.ingredients.splice(pizzaIndex);
          }
        }
      });
    }

    if (selectedNextPhase === 'finish') {
      return; // ide jön majd az amikor a pizza teljesen kész lesz
    }

    ingredients.forEach(ingredient => {
      if (ingredient.type === selectedNextPhase) {
        this.pizzaIngredientSelectors.push();
      }
    });

    this.nextPhase++;
  }

  SelectItem(target: EventTarget) {
    console.log(target);
  }
}

class Selectors {
}

// egy gombnak a modelje
class PizzaIngredientSelector {
  selected: boolean;
  ingredient: Ingredient;
}
