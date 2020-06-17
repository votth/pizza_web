import {ShoppingBasket} from './ShoppingBasket';

export class User {
  id: number;
  name: string;
  nickName: string;
  email: string;
  passwordHash: string;
  shoppingBasket: ShoppingBasket;

  constructor(
    id: number = -1,
    name: string = '',
    nickName: string = '',
    email: string = '',
    passwordHash: string = '',
    shoppingBasket: ShoppingBasket = new ShoppingBasket()) {
    this.id = id;
    this.name = name;
    this.nickName = nickName;
    this.email = email;
    this.passwordHash = passwordHash;
    this.shoppingBasket = shoppingBasket;
  }
}
