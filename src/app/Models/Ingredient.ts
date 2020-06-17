export class Ingredient {
  id: number;
  name: string;
  price: number;
  picture: string;
  type: string;

  constructor(
    id: number = -1,
    name: string = '',
    price: number = 0,
    picture: string = '',
    type: string = '') {

    this.id = id;
    this.name = name;
    this.price = price;
    this.picture = picture;
    this.type = type;
  }
}
