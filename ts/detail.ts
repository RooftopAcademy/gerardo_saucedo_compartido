import Store from '../src/Store';
import { getDetailedView } from '../src/views/detailedView';
import { showCartCount } from './app';

function populateHTML() {
  const title = document.getElementById('banner-title');
  title.innerHTML = 'Detailed item';

  const productsContainer = document.getElementById('product-detail');
  const store = new Store();
  const id = new URLSearchParams(window.location.search).get('id');
  store.fetchProducts().then((res) => {
    store.setProductList(res);
    const view = getDetailedView(
      store.findProductById(id == null ? -1 : Number(id))
    );
    const addToCartButton = view.querySelector('#add-to-cart');
    addToCartButton.addEventListener('click', function () {
      store.cart.addProduct(store.findProductById(this.dataset.id));
      showCartCount();
    });
    productsContainer.appendChild(view);
  });
}
populateHTML();
