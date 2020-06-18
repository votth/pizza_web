export class Address {
  address: string;
  city: string;
  county: string;
  zipCode: number;

  constructor(address: string = '', city: string = '', county: string = '', zipCode: number = 0) {
    this.address = address;
    this.city = city;
    this.county = county;
    this.zipCode = zipCode;
  }
}
