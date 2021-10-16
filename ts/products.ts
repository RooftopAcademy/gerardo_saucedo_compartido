import Store from '../src/Store';
import { getItemView } from '../src/views/itemView';
import { Product } from '../src/Product';

async function populateHTML(document: Document) {
  const productsContainer = document.getElementById('products');
  const store = new Store();
  const title = document.getElementById('banner-title');

  title.innerHTML = 'All our items';

  store.setProductList(await store.fetchProducts());

  store.getProductList().forEach((product) => {
    const view = getItemView(product);

    productsContainer.appendChild(view);

    const order = document.getElementById('sort-value') as HTMLSelectElement;
    order.addEventListener('change', function (e) {
      orderBy(productsContainer, this.value, store.getProductList());
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
  productsContainer.innerHTML = '';
  productList.forEach((product) => {
    const view = getItemView(product);
    view.addEventListener('click', function () {
      window.location.href = `detail.html?id=${this.dataset.id}`;
    });
    productsContainer.appendChild(view);
  });
}

populateHTML(document);
