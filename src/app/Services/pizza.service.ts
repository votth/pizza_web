import {Pizza} from '../Models/Pizza';
import {DatabaseHelper} from '../HardDatabase/DatabaseHelper';
import users = DatabaseHelper.users;
import ingredients = DatabaseHelper.ingredients;

export class PizzaService {

  getPizzaById(userId: number, pizzaid: number): Pizza {

    let result: Pizza = new Pizza();

    users[userId].shoppingBasket.pizzas.forEach(value => {
      if (value.id === pizzaid) {
        result = value;
      }
    });

    return result;
  }
}
