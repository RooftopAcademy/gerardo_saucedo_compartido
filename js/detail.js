function populateHTML() {
  const productsContainer = document.getElementById("product-detail");
  const store = new Store();
  store.fetchProducts();
  const view = getItemView(store.findProductById(localStorage.getItem("id")));

  productsContainer.appendChild(view);
}
populateHTML();
