import { Store } from "../src/Store";
import { getItemView } from "../src/views/itemView";

function populateHTML() {
  const productsContainer = document.getElementById("products");
  const store = new Store();

  store.fetchProducts().then((res) => {
    store.setProducts(res);
    store.getAllProducts().forEach((product) => {
      const view = getItemView(product);
      view.addEventListener("click", function () {
        window.location.href = `detail.html?id=${this.dataset.id}`;
      });
      productsContainer.appendChild(view);
    });
  });
}
populateHTML();
