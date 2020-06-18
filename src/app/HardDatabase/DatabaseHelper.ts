import {User} from '../Models/Users';
import {Ingredient} from '../Models/Ingredient';
import {Drink} from '../Models/Drink';
import {ShoppingBasket} from '../Models/ShoppingBasket';
import {Pizza} from '../Models/Pizza';

// tslint:disable-next-line:no-namespace
export let loggedUser: User = new User();

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
  },
  {
    id: 9999,
    name: 'admin admin',
    nickName: 'admin',
    email: 'a@a.com',
    passwordHash: '47bce5c74f589f4867dbd57e9ca9f808', // aaa
    shoppingBasket: new ShoppingBasket()
  }
];

// alapanyagok
export const ingredients: Ingredient[] = [
  // feltétek
  {
    id: 0,
    name: 'uborka',
    price: 10,
    picture: 'https://www.pizzaemerigo.hu/wp-content/uploads/2016/10/csemegeuborka.jpg',
    type: 'topping'
  },
  {
    id: 1,
    name: 'Paradicsom',
    price: 10,
    picture: 'https://www.natursziget.com/wp-content/uploads/2019/09/20190912-paradicsom-1200x630-c-default.jpg',
    type: 'topping'
  },
  {
    id: 2,
    name: 'sajt',
    price: 10,
    picture: 'http://www.letrappistebrugge.com/wp-content/uploads/2018/02/trappist_monk_cheese-640x430.png',
    type: 'topping'
  },
  {
    id: 3,
    name: 'paprika',
    price: 10,
    picture: 'https://static.euronews.com/articles/3327954/1280x720_3327954.jpg',
    type: 'topping'
  },
  // alapok
  {
    id: 4,
    name: 'paradicsomos',
    price: 10,
    picture: 'http://www.mindmegette.hu/images/186/O/paradicsommartas.jpg',
    type: 'base'
  },
  {
    id: 5,
    name: 'fokhagymás tejfölös',
    price: 10,
    picture: 'http://www.mindmegette.hu/images/263/O/fokhagymamartas.jpg',
    type: 'base'
  },
  // tészta fajták
  {
    id: 6,
    name: 'vastag',
    price: 10,
    picture: 'https://www.2brotherspizza.co.za/sites/all/themes/twobrothers/images/thick-pizza-base.png',
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
    id: 8,
    name: '28',
    price: 10,
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/28_white%2C_red_rounded_rectangle.svg/1200px-28_white%2C_red_rounded_rectangle.svg.png',
    type: 'size'
  },
  {
    id: 9,
    name: '32',
    price: 10,
    picture: 'https://cdn.pixabay.com/photo/2012/04/23/15/32/number-38545_960_720.png',
    type: 'size'
  },
  {
    id: 10,
    name: '45',
    price: 10,
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Bundesautobahn_45_number.svg/1200px-Bundesautobahn_45_number.svg.png',
    type: 'size'
  },
  {
    id: 11,
    name: '60',
    price: 10,
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Bundesautobahn_60_number.svg/1200px-Bundesautobahn_60_number.svg.png',
    type: 'size'
  },
  // tészta típusok
  {
    id: 12,
    name: 'gluténmentes',
    price: 10,
    picture: 'https://shelleycase.com/wp-content/uploads/2017/01/gluten-free-icon.png',
    type: 'doughType'
  },
  {
    id: 13,
    name: 'szénhidrátcsökkentett',
    price: 10,
    picture: 'https://nano-fit.com/wp-content/uploads/2018/10/icon-testsulycsokkentes-01.png',
    type: 'doughType'
  }
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
    dough: '',
    ingredients: [
      ingredients[1],
      ingredients[2],
      ingredients[3]
    ],
    price: 1500,
    rating: 3.6
  },
  {
    id: 502,
    name: 'Fishy pizza',
    dough: '',
    ingredients: [
      ingredients[1],
      ingredients[2],
      ingredients[3]
    ],
    price: 2000,
    rating: 4.1
  },
  {
    id: 503,
    name: 'Ananas pizza',
    dough: '',
    ingredients: [
      ingredients[1],
      ingredients[2],
      ingredients[3]
    ],
    price: 1999,
    rating: 2.3
  },
  {
    id: 504,
    name: 'Ninja pizza',
    dough: '',
    ingredients: [
      ingredients[1],
      ingredients[7],
      ingredients[3]
    ],
    price: 1650,
    rating: 2.7
  },
  {
    id: 505,
    name: 'Hungarian pizza',
    dough: '',
    ingredients: [
      ingredients[1],
      ingredients[5],
      ingredients[3]
    ],
    price: 1870,
    rating: 3.5
  },
  {
    id: 506,
    name: 'Vietnamese pizza',
    dough: '',
    ingredients: [
      ingredients[1],
      ingredients[0],
      ingredients[3]
    ],
    price: 1800,
    rating: 3.5
  },
  {
    id: 507,
    name: 'Somogyi pizza',
    dough: '',
    ingredients: [
      ingredients[2],
      ingredients[2],
      ingredients[2],
      ingredients[2],
      ingredients[2]
    ],
    price: 2200,
    rating: 5
  }

];
