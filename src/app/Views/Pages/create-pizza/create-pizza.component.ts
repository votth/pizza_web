import {Component, OnInit} from '@angular/core';
import {Pizza} from '../../../Models/Pizza';
import {ingredients} from '../../../HardDatabase/DatabaseHelper';
import {PizzaService} from '../../../Services/pizza.service';
import {Phase} from '../../../Models/Phase';

@Component({
  selector: 'app-create-pizza',
  templateUrl: './create-pizza.component.html',
  styleUrls: ['./create-pizza.component.css']
})
export class CreatePizzaComponent implements OnInit {

  addToCartEnable = false;
  addToCartEnableTimerCounter = 750;

  pizzaQuantity = 1;
  pizzaName: string;

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
      text: 'Adjad meg hány darabot szeretnél ebből a pizzából a kosárba rakni',
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
    this.addToCartEnable = false;
    if (this.actualPhase === 0) {
      return;
    }
    this.actualPhase--;
  }

  NextPhase() {
    this.actualPhase++;
    if (this.phases[this.actualPhase].name === 'finish') {
      this.TimedCartButtonEnable();
    }
    console.log(this.actualPhase);
    console.log(this.phases.length);
    console.log(this.actualPhase > this.phases.length);
    if (this.actualPhase >= this.phases.length) {
      this.actualPhase--;
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

  async TimedCartButtonEnable() {
    console.log('addtocart is ' + this.addToCartEnable);
    setTimeout(() => {
      this.addToCartEnable = true;
      console.log('addtocart is ' + this.addToCartEnable);
    }, this.addToCartEnableTimerCounter);
  }

  AddToCart() {
    const pizzaService: PizzaService = new PizzaService();
    pizzaService.PutPizzaToShoppingBasket(this.pizzaQuantity, pizzaService.CreatePizza(this.phases, this.pizzaName));
  }

  SetPizzaQuantity() {
    this.pizzaQuantity = +(document.getElementById('pizza-quantity') as HTMLInputElement).value;
    console.log(this.pizzaQuantity);
  }
}
