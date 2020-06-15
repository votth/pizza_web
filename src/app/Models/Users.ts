import {ShoppingBasket} from './ShoppingBasket';

export class User {
  id: number;
  name: string;
  nickName: string;
  email: string;
  passwordHash; // Nincs stringmegkötő az titkosítás miatt.
  shoppingBasket: ShoppingBasket;
}
