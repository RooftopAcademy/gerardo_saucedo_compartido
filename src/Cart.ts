import { Product } from "./Product";
import { Store } from "./Store";

export class Cart {
  private productsList: Product[];
  constructor() {}
  addProduct(product: Product) {
    this.productsList.push(product);
    Cart.saveToLocalStorage(this);
  }
  get totalPrice(): number {
    let total = 0;
    this.productsList.forEach((product: Product) => {
      console.log(product.getPrice());
      total += Number(product.getPrice().toString().replace("$", ""));
    });
    return total;
  }
  get productsCount(): number {
    return this.productsList.length;
  }
  get allProducts(): Product[] {
    return this.productsList;
  }
  static fromLocalStorage(): Cart {
    const object: any = JSON.parse(localStorage.getItem("cart"));
    const products: Product[] = [];
    if (object) {
      object.productsList.forEach(
        (product: {
          id: number;
          name: string;
          description: string;
          level: number;
          image: string;
          price: number;
          quantity: number;
        }) => {
          products.push(Store.newProductFromJson(product));
        }
      );
    }
    const cart = new Cart();
    cart.productsList = products;

    return cart;
  }
  static saveToLocalStorage(cart: Cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
