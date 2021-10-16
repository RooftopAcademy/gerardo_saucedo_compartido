import { Product } from '../Product';

export function getDetailedView(product: Product) {
  const template = document.createElement('section');
  template.classList.add(
    'card',
    'display--flex',
    'flex-direction--column',
    'flex--center',
    'text--center'
  );
  template.innerHTML = `
      <img class="card__icon" src="${product.image}" alt="lorem" />
          <h2 class="card__title">${product.quantity} ${product.name}</h2>
          <p class="card__description text--center">
          ${product.description}
          </p>
          <div class="card__bottom display--flex flex--space-around">
            <p class="card__price">${product.price}</p>
            <button id="add-to-cart" class="card__button" data-id="${product.id}">Add to cart</button>
          </div>
  `;
  return template;
}
