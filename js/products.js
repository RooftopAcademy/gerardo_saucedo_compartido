const productsContainer = document.getElementById("products");
const store = new Store();
store.fetchProducts();
store.getAllProducts().forEach((product) => {
  const view = getItemView(product);
  productsContainer.innerHTML += view;
});
