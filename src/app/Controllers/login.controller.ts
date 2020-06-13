import {users} from '../HardDatabase/DatabaseHelper';
import {ShoppingBasket} from '../Models/ShoppingBasket';

export class LoginController {

  // a usert elmenti az adatbázisba
  RegisterUser(email: string, name: string, nickName: string, passwordHash: string) {
    const id: number = users.length;
    users.push(
      {
        shoppingBasket: new ShoppingBasket(),
        email,
        id,
        name,
        nickName,
        passwordHash
      }
    );
  }
}
