import {User} from '../Models/Users';
import {Ingredient} from '../Models/Ingredient';
import {Drink} from '../Models/Drink';
import {ShoppingBasket} from '../Models/ShoppingBasket';

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
    id: 4,
    name: 'tejfölös',
    price: 10,
    type: 'alap'
  },
  // tészta fajták
  {
    id: 4,
    name: 'vastag',
    price: 10,
    type: 'tészta'
  },
  {
    id: 4,
    name: 'vékony',
    price: 10,
    type: 'tészta'
  },
  // tészta típusok
  {
    id: 4,
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
    price: 300
  },
  {
    id: 1,
    name: 'Sprite',
    price: 280
  }
];
