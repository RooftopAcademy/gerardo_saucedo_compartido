import { Product } from '../src/Product';
import { Cart } from '../src/Cart';
import { User } from '../src/User';

export default class Store {
  productList: Product[];
  cart: Cart;
  user: User;
  constructor() {
    this.productList = [];
    this.cart = Cart.fromLocalStorage();
    this.user = new User();
  }

  async fetchProducts() {
    return await fetch('http://192.168.1.3:3001/products')
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => json)
      .catch((error) => {
        console.error(error);
      });
  }
  setProductList(arr: []) {
    arr.forEach((item) => {
      this.productList.push(new Product(item));
    });
  }

  getProductList(): Product[] {
    return this.productList;
  }

  findProductById(id: number): Product {
    return this.productList.find((product) => product.id == id);
  }
}
