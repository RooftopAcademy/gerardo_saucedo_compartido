import { Product } from './Product';
import Store from './Store';

export class Cart {
  private cartList: Product[];
  constructor(productlist: Product[] = []) {
    this.cartList = productlist;
  }

  addProduct(product: Product) {
    this.cartList.push(product);
    Cart.saveToLocalStorage(this);
  }

  get totalPrice(): number {
    let total = 0;
    this.cartList.forEach((product: Product) => {
      total += Number(product.price);
    });
    return total;
  }

  get productsCount(): number {
    return this.cartList.length;
  }

  get allProducts(): Product[] {
    return this.cartList;
  }

  static fromLocalStorage(): Cart {
    try {
      const rawData: [] = JSON.parse(localStorage.getItem('cart')).cartList;
      const list: Product[] = rawData.map((item) => new Product(item));
      return new Cart(list);
    } catch (err) {
      return new Cart();
    }
  }
  static saveToLocalStorage(cart: Cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
