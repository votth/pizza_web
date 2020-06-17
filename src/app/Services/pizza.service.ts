import {Pizza} from '../Models/Pizza';
import {loggedUser, pizzas, users} from '../HardDatabase/DatabaseHelper';
import {Ingredient} from '../Models/Ingredient';
import {Phase} from '../Models/Phase';

export class PizzaService {

  GetPizzaById(userId: number, pizzaId: number): Pizza {

    let result: Pizza = new Pizza();

    users[userId].shoppingBasket.pizzas.forEach(value => {
      if (value.id === pizzaId) {
        result = value;
      }
    });

    return result;
  }

  CreatePizza(createPhases: Phase[] = null, name: string = '', ingredientsArg: Ingredient[] = null): Pizza {
    const pizza: Pizza = new Pizza();
    if (createPhases !== null) {
      createPhases.forEach(value => {
        value.pizzaIngredientSelectors.forEach(value1 => {
          if (value1.selected) {
            pizza.ingredients.push(value1.ingredient);
          }
        });
      });
    } else {
      pizza.ingredients = ingredientsArg;
      pizza.price = this.PizzaPriceCalculator(pizza.ingredients);
    }
    pizza.name = name;
    pizza.price = this.PizzaPriceCalculator(pizza.ingredients);
    return pizza;
  }

  PizzaPriceCalculator(ingredientsArg: Ingredient[]) {
    let summaryPrice = 0;
    ingredientsArg.forEach(value => {
      summaryPrice += value.price;
    });

    return summaryPrice;
  }

  PutPizzaToShoppingBasket(quantity: number, pizza: Pizza) {
    for (let i = 0; i < quantity; i++) {
      loggedUser.shoppingBasket.pizzas.push(pizza);
      console.log('add this pizza to cart: ', pizza);
    }
  }

  GetNextUnusedId(): number {
    return pizzas.length;
  }
}
