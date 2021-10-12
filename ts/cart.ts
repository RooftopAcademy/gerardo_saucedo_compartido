import { Cart } from "../src/Cart";
import { getCartItem, getTotalItem } from "../src/views/cartItemView";
import { Product } from "../src/Product";
document.getElementById("banner-title").textContent = "Your cart";
const cart: Cart = Cart.fromLocalStorage();
const main = document.getElementById("main");
cart.allProducts.forEach((product: Product) => {
  const child = getCartItem(product);
  main.appendChild(child);
});

main.appendChild(getTotalItem(cart.totalPrice));
