class Store {
  constructor() {
    this.productsList = [];
    this.cart = new Cart();
    this.user = new User();
  }
  fetchProducts() {
    this.productsList.push(new Product());
  }
}
