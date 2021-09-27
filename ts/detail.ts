import { Store } from "../src/Store";
import { getItemView } from "../src/views/itemView";

function populateHTML() {
  const title = document.getElementById("banner-title");
  title.innerHTML = "Detailed item";

  const productsContainer = document.getElementById("product-detail");
  const store = new Store();
  const id = new URLSearchParams(window.location.search).get("id");
  store.fetchProducts().then((res) => {
    store.setProducts(res);
    const view = getItemView(
      store.findProductById(id == null ? -1 : Number(id))
    );
    productsContainer.appendChild(view);
  });
}
populateHTML();
