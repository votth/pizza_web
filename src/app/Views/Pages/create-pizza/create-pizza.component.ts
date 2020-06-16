import {Component, OnInit} from '@angular/core';
import {Pizza} from '../../../Models/Pizza';
import {Ingredient} from '../../../Models/Ingredient';
import {ingredients} from '../../../HardDatabase/DatabaseHelper';

@Component({
  selector: 'app-create-pizza',
  templateUrl: './create-pizza.component.html',
  styleUrls: ['./create-pizza.component.css']
})
export class CreatePizzaComponent implements OnInit {

  headerText = 'Dobjad össze saját pizzádat';
  pizza: Pizza = {
    ingredients: [],
    id: -1,
    name: '',
    price: 0
  };

  phases: Phase[] = [
    {
      text: 'Válassza ki a pizza méretét',
      name: 'size',
      pizzaIngredientSelectors: [],
      unique: true
    },
    {
      text: 'Válassza ki a pizza vastagságát',
      name: 'doughThickness',
      pizzaIngredientSelectors: [],
      unique: true
    },
    {
      text: 'Válassza ki a pizzatészta fajtáját',
      name: 'doughType',
      pizzaIngredientSelectors: [],
      unique: false
    },
    {
      text: 'Válassza ki a pizza alapját',
      name: 'base',
      pizzaIngredientSelectors: [],
      unique: true
    },
    {
      text: 'Válassza ki a feltéteket',
      name: 'topping',
      pizzaIngredientSelectors: [],
      unique: false
    },
    {
      text: 'Adja meg hány darabot szeretne ebből a pizzából',
      name: 'finish',
      pizzaIngredientSelectors: [
        {
          ingredient: {
            type: 'finish',
            id: -1,
            name: '',
            picture: '',
            price: -1,
          },
          selected: false
        }
      ],
      unique: false
    }];

  actualPhase = -1;

  constructor() {
  }

  ngOnInit() {
    this.InitPizzaIngredientSelectors();
    this.NextPhase();
  }

  InitPizzaIngredientSelectors() {
    this.phases.forEach(phase => {
      ingredients.forEach(ingredientValue => {
        if (phase.name === ingredientValue.type) {
          phase.pizzaIngredientSelectors.push({
            ingredient: ingredientValue, selected: false
          });
        }
      });
    });
    this.phases.forEach(phase => {
      if (phase.unique) {
        phase.pizzaIngredientSelectors[0].selected = true;
      }
    });
  }

  PreviousPhase() {
    if (this.actualPhase === 0) {
      return;
    }
    this.actualPhase--;
  }

  NextPhase() {
    console.log('this.NextPhase()');
    this.actualPhase++;
    if (this.actualPhase > this.phases.length) {
      // ADD PIZZA
      return;
    }
    // ha nem az első fázisban vagyunk, az aktuális oldal tartalmát beletöltjük a pizzába amit épp készítünk
    if (this.actualPhase !== 0) {
      // végigmegyünk a gombokon és a kijelölés alapján betöltjük a pizzába az elemeket
      this.phases[this.actualPhase].pizzaIngredientSelectors.forEach(pizzaIngredientSelector => {
        if (pizzaIngredientSelector.selected) { // ha a gomb engedélyezve van
          if (!this.pizza.ingredients.find(() => pizzaIngredientSelector.ingredient)) {
            // ha nincs benne beletöltjük
            this.pizza.ingredients.push(pizzaIngredientSelector.ingredient);
          }
        } else { // ha a gomb nincs engedélyezve
          const pizzaIndex = this.pizza.ingredients.findIndex(() => pizzaIngredientSelector.ingredient);
          if (pizzaIndex !== -1) {
            // ha benne van kitöröljük
            this.pizza.ingredients.splice(pizzaIndex);
          }
        }
      });
    }
  }

  SelectItem(target: EventTarget, selectorName: string) {
    if (this.phases[this.actualPhase].unique) {
      this.phases[this.actualPhase].pizzaIngredientSelectors.forEach(selector => {
        selector.selected = selector.ingredient.name === selectorName;
      });
    } else {
      this.phases[this.actualPhase].pizzaIngredientSelectors.forEach(selector => {
        selector.selected = selector.ingredient.name === selectorName
          ? !selector.selected
          : selector.selected;
      });
    }
  }
}

class Phase {
  text: string;
  name: string;
  pizzaIngredientSelectors: PizzaIngredientSelector[];
  unique: boolean;
}

// egy gombnak a modelje
class PizzaIngredientSelector {
  selected: boolean;
  ingredient: Ingredient;
}
