import {User} from '../Models/Users';
import {Ingredient} from '../Models/Ingredient';
import {Drink} from '../Models/Drink';
import {ShoppingBasket} from '../Models/ShoppingBasket';
import {Pizza} from '../Models/Pizza';

// a regisztráció ide tölti majd a usereket, illetve bejelentkezésnél innen lesz hitelesítve
export let users: User[] = [
  // userek (encrypted passwordökkel)
  {
    id: 0,
    name: 'Elliot Alderson',
    nickName: 'Mr Robot',
    email: 'elliota@gmail.com',
    passwordHash: 'fdc94bf9572d3d1dc136a73a75c05666',
    shoppingBasket: new ShoppingBasket()
  },
  {
    id: 1,
    name: 'Tyrell Wellick',
    nickName: 'megalomaniac',
    email: 'tyrellw@ecorp.com',
    passwordHash: '9c848603ec6776355e3401cab09970d4',
    shoppingBasket: new ShoppingBasket()
  },
  {
    id: 2,
    name: 'Darlene Alderson',
    nickName: 'hottie',
    email: 'darling@gmail.com',
    passwordHash: '401bfea1b1151e3eea85bfd333700b60',
    shoppingBasket: new ShoppingBasket()
  }
];

// itt vannak a beégetett feltétek
export const ingredients: Ingredient[] = [
  // feltétek
  {
    id: 0,
    name: 'uborka',
    price: 10,
    type: 'feltét'
  },
  {
    id: 1,
    name: 'Paradicsom',
    price: 10,
    type: 'feltét'
  },
  {
    id: 2,
    name: 'sajt',
    price: 10,
    type: 'feltét'
  },
  {
    id: 3,
    name: 'paprika',
    price: 10,
    type: 'feltét'
  },
  // alapok
  {
    id: 4,
    name: 'paradicsomos',
    price: 10,
    type: 'alap'
  },
  {
    id: 5,
    name: 'tejfölös',
    price: 10,
    type: 'alap'
  },
  // tészta fajták
  {
    id: 6,
    name: 'vastag',
    price: 10,
    type: 'tészta'
  },
  {
    id: 7,
    name: 'vékony',
    price: 10,
    type: 'tészta'
  },
  // tészta típusok
  {
    id: 8,
    name: 'gluténmentes',
    price: 10,
    type: 'tésztatípus'
  },
  {
    id: 4,
    name: 'sima',
    price: 10,
    type: 'tésztatípus'
  },
];

// itt vannak a beégetett innivalók
export const drinks: Drink[] = [
  {
    id: 0,
    name: 'CocaCola',
    price: 300,
    rating: 1
  },
  {
    id: 1,
    name: 'Sprite',
    price: 280,
    rating: 3
  },
  {
    id: 2,
    name: 'Pepsi',
    price: 300,
    rating: 5
  },
  {
    id: 14,
    name: 'beer0',
    price: 199.52,
    rating: 2
  },
  {
    id: 13,
    name: 'beer1',
    price: 520,
    rating: 4.5
  },
  {
    id: 444,
    name: 'beer2',
    price: 320,
    rating: 3
  },
  {
    id: 55,
    name: 'beer3',
    price: 370,
    rating: 3.8
  },
  {
    id: 12,
    name: 'wine0',
    price: 409,
    rating: 3.2
  },
  {
    id: 122,
    name: 'wine1',
    price: 213,
    rating: 5
  },
  {
    id: 132,
    name: 'wine2',
    price: 421,
    rating: 4.1
  },
  {
    id: 112,
    name: 'wine3',
    price: 521,
    rating: 2
  }
];

export const pizzas: Pizza[] = [
  {
    id: 501,
    name: 'Pizzo uno',
    dough: 'Extra thicc',
    ingredientsId: [1, 2, 3],
    price: 1500,
    rating: 3.6
  },
  {
    id: 502,
    name: 'Fishy pizza',
    dough: 'Extra thicc',
    ingredientsId: [1, 2, 3],
    price: 2000,
    rating: 4.1
  },
  {
    id: 503,
    name: 'Ananas pizza',
    dough: 'Extra thicc',
    ingredientsId: [1, 2, 3],
    price: 1999,
    rating: 2.3
  },
  {
    id: 504,
    name: 'Ninja pizza',
    dough: 'Extra thicc',
    ingredientsId: [1, 2, 3],
    price: 1650,
    rating: 2.7
  },
  {
    id: 505,
    name: 'Hungarian pizza',
    dough: 'Extra thicc',
    ingredientsId: [1, 2, 3],
    price: 1870,
    rating: 5
  },
  {
    id: 506,
    name: 'Vietnamese pizza',
    dough: 'Extra thicc',
    ingredientsId: [1, 2, 3],
    price: 1800,
    rating: 4.4
  }

];
