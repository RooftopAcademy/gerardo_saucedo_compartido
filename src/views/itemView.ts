import { Product } from '../Product';

export function getItemView(product: Product) {
  const template = document.createElement('section');
  template.dataset.id = product.id.toString();
  template.classList.add(
    'card',
    'display--flex',
    'flex-direction--column',
    'flex--center',
    'text--center'
  );
  template.innerHTML = `
      <img class="card__icon" src="${product.image}"></ alt="lorem" />
      <h2 class="card__title">
        ${product.quantity} ${product.name}
      </h2>
      <p class="card__description text--center">
        ${product.description} ${product}
      </p>
      <p class="card__price">$${product.price}</p>
  `;

  template.addEventListener('click', function () {
    window.location.href = `detail.html?id=${product.id}`;
  });
  return template;
}
