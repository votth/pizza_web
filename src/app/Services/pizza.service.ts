import {Pizza} from '../Models/Pizza';
import {users} from '../HardDatabase/DatabaseHelper';

export class PizzaService {

  // az id alapján kiválasztott user bevásárlókosarában levő pizzák közül kiválaszt egyet a pizzaid alapján
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
