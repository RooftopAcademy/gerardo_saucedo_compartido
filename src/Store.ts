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

  async fetchProducts() {
    return fetch(
      "https://my-json-server.typicode.com/RooftopAcademy/gerardo_saucedo_compartido/products"
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .catch((error) => {
        console.error(error);
      });
  }
  setProducts(arr: []) {
    arr.forEach((item) => {
      this.productsList.push(this.newProductFromJson(item));
    });
  }
  newProductFromJson(json: {
    id: number;
    name: string;
    description: string;
    level: number;
    image: string;
    price: number;
    quantity: number;
  }) {
    return new Product(
      json.id,
      json.name,
      json.description,
      json.level,
      json.image,
      json.price,
      json.quantity
    );
  }
  getAllProducts() {
    return this.productsList;
  }
  findProductById(id: number) {
    return this.productsList.find((product) => product.id == id);
  }
}
