import {User} from '../Models/Users';
import {Ingredient} from '../Models/Ingredient';
import {Drink} from '../Models/Drink';

export let users: User[] = []; // a regisztráció ide tölti majd a usereket, illetve bejelentkezésnél innen lesz hitelesítve

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
