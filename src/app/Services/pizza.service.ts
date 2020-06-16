import {Pizza} from '../Models/Pizza';
import {users} from '../HardDatabase/DatabaseHelper';

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
