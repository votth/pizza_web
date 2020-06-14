import {User} from '../Models/Users';
import {Ingredient} from '../Models/Ingredient';
import {Drink} from '../Models/Drink';

// tslint:disable-next-line:no-namespace
export namespace DatabaseHelper {
  export let loggedUser: User = null;

  export let users: User[] = []; // a regisztráció ide tölti majd a usereket, illetve bejelentkezésnél innen lesz hitelesítve

// alapanyagok
  export const ingredients: Ingredient[] = [
    // feltétek
    {
      id: 0,
      name: 'uborka',
      price: 10,
      picture: '',
      type: 'topping'
    },
    {
      id: 1,
      name: 'Paradicsom',
      price: 10,
      picture: '',
      type: 'topping'
    },
    {
      id: 2,
      name: 'sajt',
      price: 10,
      picture: '',
      type: 'topping'
    },
    {
      id: 3,
      name: 'paprika',
      price: 10,
      picture: '',
      type: 'topping'
    },
    // alapok
    {
      id: 4,
      name: 'paradicsomos',
      price: 10,
      picture: '',
      type: 'base'
    },
    {
      id: 5,
      name: 'fokhagymás tejfölös',
      price: 10,
      picture: '',
      type: 'base'
    },
    // tészta fajták
    {
      id: 6,
      name: 'vastag',
      price: 10,
      picture: 'https://lh3.googleusercontent.com/proxy/eRifIrmlCB3lVj4chbe_mbcCEOsmpZPsFplapHmtmTkoo9FBbQpHH4RiUT1WzFf8A1qoRTUjupN13KsEhfRdn3nKLcbGCXJIiLQ7zk6Y7_wQeGN74uwop7F4AjKtng',
      type: 'doughThickness'
    },
    {
      id: 7,
      name: 'vékony',
      price: 10,
      picture: 'https://www.pikpng.com/pngl/b/420-4203889_menu-nancy-s-thin-crust-sausage-pizza-clipart.png',
      type: 'doughThickness'
    },
    // pizza size
    {
      id: 6,
      name: '28',
      price: 10,
      picture: '',
      type: 'size'
    },
    {
      id: 6,
      name: '32',
      price: 10,
      picture: '',
      type: 'size'
    },
    {
      id: 6,
      name: '45',
      price: 10,
      picture: '',
      type: 'size'
    },
    {
      id: 6,
      name: '60',
      price: 10,
      picture: '',
      type: 'size'
    },
    // tészta típusok
    {
      id: 8,
      name: 'gluténmentes',
      price: 10,
      picture: 'https://shelleycase.com/wp-content/uploads/2017/01/gluten-free-icon.png',
      type: 'doughType'
    },
    {
      id: 8,
      name: 'szénhidrátcsökkentett',
      price: 10,
      picture: 'https://shelleycase.com/wp-content/uploads/2017/01/gluten-free-icon.png',
      type: 'doughType'
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
}
