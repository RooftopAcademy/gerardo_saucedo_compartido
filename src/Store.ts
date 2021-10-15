import Product from '../src/Product';
import { Cart } from '../src/Cart';
import { User } from '../src/User';
export class Store {
  productsList: Product[];
  cart: Cart;
  user: User;
  constructor() {
    this.productsList = [];
    this.cart = Cart.fromLocalStorage();
    this.user = new User();
  }

  async fetchProducts() {
    return fetch('http://192.168.1.3:3001/products')
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .catch((error) => {
        console.error(error);
      });
  }
  setProducts(arr: []) {
    arr.forEach((item) => {
      this.productsList.push(Store.newProductFromJson(item));
    });
  }
  static newProductFromJson(json: {
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
  getAllProducts(): Product[] {
    return this.productsList;
  }
  findProductById(id: number): Product {
    return this.productsList.find((product) => product.getId() == id);
  }
}
