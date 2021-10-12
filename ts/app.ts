import getHeaderView from '../src/views/headerView';
import { Cart } from '../src/Cart';
import Product from '../src/Product';

function addHeader() {
  const header = document.getElementById('header');
  header.innerHTML = getHeaderView();
}

function toggleResponsiveMenu() {
  document
    .getElementById('responsive-icon')
    .addEventListener('click', function () {
      document
        .getElementById('menu')
        .classList.toggle('menu--mobile-visibility');
    });
}

function addLiks() {
  (document.getElementById('index-href') as HTMLAnchorElement).href = '/';
  (document.getElementById('catalog-href') as HTMLAnchorElement).href =
    'products';
  (document.getElementById('cart-href') as HTMLAnchorElement).href = 'cart';
}

export function showCartCount() {
  const cart = Cart.fromLocalStorage();
  document.getElementById('cart-count').textContent =
    cart.productsCount.toString();
}

addHeader();
addLiks();
toggleResponsiveMenu();
showCartCount();
