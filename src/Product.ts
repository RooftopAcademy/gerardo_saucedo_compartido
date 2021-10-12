class Product {
  private id: number;
  private name: string;
  private description: string;
  private level: number;
  private image: string;
  private price: number;
  private quantity: number;
  constructor(
    id = 0,
    name = '',
    description = '',
    level = 144,
    image = '../img/anti-air.png',
    price = 50,
    quantity = 200
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.level = level;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
  }
  getId(): number {
    return this.id;
  }
  setId(id: number) {
    this.id = id;
  }
  getName(): string {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
  getDescription(): string {
    return this.description;
  }
  setDescription(description: string) {
    this.description = description;
  }
  getLevel(): number {
    return this.level;
  }
  setLevel(level: number) {
    this.level = level;
  }
  getImage(): string {
    return this.image;
  }
  setImage(image: string) {
    this.image = image;
  }
  getPrice(): number {
    return this.price;
  }
  setPrice(price: number) {
    this.price = price;
  }
  getQuantity(): number {
    return this.quantity;
  }
  setQuantity(quantity: number) {
    this.quantity = quantity;
  }
}

export default Product;
