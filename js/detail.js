function populateHTML() {
  const productsContainer = document.getElementById("product-detail");
  const store = new Store();
  const id = localStorage.getItem("id");

  store.fetchProducts().then((res) => {
    store.setProducts(res);
    const view = getItemView(store.findProductById(id));
    view.addEventListener("click", function () {
      localStorage.setItem("id", this.dataset.id);
      window.location.href = "detail.html";
    });
    productsContainer.appendChild(view);
  });
}
populateHTML();
