export class Product implements ProductInterface {
  id: number;
  name: string;
  description: string;
  level: number;
  image: string;
  price: number;
  quantity: number;
  constructor(
    {
      id,
      name,
      description,
      level,
      image,
      price,
      quantity,
    }: ProductInterface = {
      id: 0,
      name: '',
      description: '',
      level: 144,
      image: '../img/anti-air.png',
      price: 50,
      quantity: 200,
    }
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.level = level;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
  }
}

export interface ProductInterface {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly level: number;
  readonly image: string;
  readonly price: number;
  readonly quantity: number;
}
