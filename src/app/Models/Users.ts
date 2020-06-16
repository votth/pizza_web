import {ShoppingBasket} from './ShoppingBasket';

export class User {
  id: number;
  name: string;
  nickName: string;
  email: string;
  passwordHash: string;
  shoppingBasket: ShoppingBasket;
}
