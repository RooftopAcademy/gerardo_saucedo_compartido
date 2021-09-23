function populateHTML() {
  const productsContainer = document.getElementById("products");
  const store = new Store();

  store.fetchProducts().then((res) => {
    store.setProducts(res);
    store.getAllProducts().forEach((product) => {
      console.log(product);
      const view = getItemView(product);
      view.addEventListener("click", function () {
        localStorage.setItem("id", this.dataset.id);
        window.location.href = "detail.html";
      });
      productsContainer.appendChild(view);
    });
  });
}
populateHTML();
