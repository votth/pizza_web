import {ShoppingBasket} from './ShoppingBasket';

export class User {
  id: number;
  name: string;
  nickName: string;
  email: string;
  passwordHash: string;
  shoppingBasket: ShoppingBasket;

  constructor(id: number, name: string, nickName: string, email: string, passwordHash: string) {
    this.id = id;
    this.name = name;
    this.nickName = nickName;
    this.email = email;
    this.passwordHash = passwordHash;
    this.shoppingBasket = new ShoppingBasket();
  }

}
