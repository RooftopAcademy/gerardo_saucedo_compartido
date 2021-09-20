class Product {
  constructor(
    id = 0,
    name = "",
    description = "",
    level = 144,
    image = "../img/anti-air.png",
    price = "$50"
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.level = level;
    this.image = image;
    this.price = price;
  }
}
