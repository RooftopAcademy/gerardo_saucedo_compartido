import { Product } from "../src/Product";
import { Cart } from "../src/Cart";
import { User } from "../src/User";
export class Store {
  productsList: Product[];
  cart: Cart;
  user: User;
  constructor() {
    this.productsList = [];
    this.cart = new Cart();
    this.user = new User();
  }
  fetchProducts() {
    this.productsList.push(
      new Product(
        0,
        "Anti air trap",
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        144,
        "../img/anti-air.png"
      )
    );
    this.productsList.push(
      new Product(
        1,
        "Broadside trap",
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        144,
        "../img/broadside.png"
      )
    );
    this.productsList.push(
      new Product(
        2,
        "Ceiling drop trap",
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        144,
        "../img/ceiling-drop-trap.png"
      )
    );
    this.productsList.push(
      new Product(
        3,
        "Ceiling electric field trap",
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        144,
        "../img/ceiling-electric-field.png"
      )
    );
    this.productsList.push(
      new Product(
        4,
        "Ceiling gas trap",
        "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
        144,
        "../img/ceiling-gas-trap.png"
      )
    );
  }
  getAllProducts() {
    return this.productsList;
  }
  findProductById(id: number) {
    return this.productsList.find((product) => product.id == id);
  }
}
