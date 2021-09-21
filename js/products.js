const productsContainer = document.getElementById("products");
const store = new Store();
store.fetchProducts();
store.getAllProducts().forEach((product) => {
  productsContainer.innerHTML += getItemView(product);
});
