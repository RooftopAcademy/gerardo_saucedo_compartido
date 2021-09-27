export class Product {
  id: number;
  name: string;
  description: string;
  level: number;
  image: string;
  price: number;
  quantity: number;
  constructor(
    id = 0,
    name = "",
    description = "",
    level = 144,
    image = "../img/anti-air.png",
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
  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  getDescription() {
    return this.description;
  }
  setDescription(description) {
    this.description = description;
  }
  getLevel() {
    return this.level;
  }
  setLevel(level) {
    this.level = level;
  }
  getImage() {
    return this.image;
  }
  setImage(image) {
    this.image = image;
  }
  getPrice() {
    return this.price;
  }
  setPrice(price) {
    this.price = price;
  }
  getQuantity() {
    return this.quantity;
  }
  setQuantity(quantity) {
    this.quantity = quantity;
  }
}
