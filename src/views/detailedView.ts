import { Product } from "../Product";

export function getDetailedView(product: Product) {
  const template = document.createElement("section");
  template.classList.add(
    "card",
    "display--flex",
    "flex-direction--column",
    "flex--center",
    "text--center"
  );
  console.log(product);
  template.innerHTML = `
      <img class="card__icon" src="${product.getImage()}" alt="lorem" />
          <h2 class="card__title">${product.getQuantity()} ${product.getName()}</h2>
          <p class="card__description text--center">
          ${product.getDescription()}
          </p>
          <div class="card__bottom display--flex flex--space-around">
            <p class="card__price">${product.getPrice()}</p>
            <button id="add-to-cart" class="card__button" data-id="${product.getId()}">Add to cart</button>
          </div>
  `;
  return template;
}
