class Store {
  constructor() {
    this.productsList = [];
    this.cart = new Cart();
    this.user = new User();
  }

  async fetchProducts() {
    return fetch(
      "https://my-json-server.typicode.com/RooftopAcademy/gerardo_saucedo_compartido/products"
    )
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .catch((error) => {
        console.error(error);
      });
  }
  setProducts(arr) {
    arr.forEach((item) =>
      this.productsList.push(this.newProductFromJson(item))
    );
  }
  newProductFromJson(json) {
    return new Product(
      json.id,
      json.name,
      json.description,
      json.level,
      json.image,
      json.price,
      json.quantity
    );
  }
  getAllProducts() {
    return this.productsList;
  }
  findProductById(id) {
    return this.productsList.find((product) => product.id == id);
  }
}
