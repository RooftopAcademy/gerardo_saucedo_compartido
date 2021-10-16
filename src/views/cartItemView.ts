import { Product } from '../Product';

export function getCartItem(product: Product): HTMLElement {
  const template = document.createElement('section');
  template.classList.add('card', 'display--flex', 'flex--space-between');
  template.innerHTML = `
    <img class="card__icon" src="${product.image}" alt="" />
    <div>
      <h2 class="card__title">${product.name}</h2>
      <p class="card__description">Quantity: ${product.quantity}</p>
    </div>
    <h2 class="card__price">$${product.price}</h2>`;
  return template;
}
export function getTotalItem(quantity: number): HTMLElement {
  const template = document.createElement('section');
  template.classList.add('card', 'display--flex', 'flex--space-between');
  template.innerHTML = `<h2 class="card__title">Total</h2>
   <p class="card__price">$${quantity}</p>`;
  return template;
}
