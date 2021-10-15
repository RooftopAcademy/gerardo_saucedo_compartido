import { Store } from '../src/Store';
import { getItemView } from '../src/views/itemView';
import Product from '../src/Product';

function populateHTML() {
  const title = document.getElementById('banner-title');
  title.innerHTML = 'All our items';

  const productsContainer = document.getElementById('products');
  const store = new Store();
  store.fetchProducts().then((res) => {
    store.setProducts(res);
    store.getAllProducts().forEach((product) => {
      const view = getItemView(product);
      view.addEventListener('click', function () {
        window.location.href = `detail.html?id=${this.dataset.id}`;
      });
      productsContainer.appendChild(view);
    });

    const order = document.getElementById('sort-value') as HTMLSelectElement;
    order.addEventListener('change', function (e) {
      orderBy(productsContainer, this.value, store.getAllProducts());
    });
  });
}

function orderBy(
  productsContainer: HTMLElement,
  value: String,
  productList: Product[]
) {
  productList.sort((a: Product, b: Product): number => {
    return a[`${value}`] > b[`${value}`] ? 1 : -1;
  });
  console.log(productList);
  productsContainer.innerHTML = '';
  productList.forEach((product) => {
    const view = getItemView(product);
    view.addEventListener('click', function () {
      window.location.href = `detail.html?id=${this.dataset.id}`;
    });
    productsContainer.appendChild(view);
  });
}

populateHTML();
