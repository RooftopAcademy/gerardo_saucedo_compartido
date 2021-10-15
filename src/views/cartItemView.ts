import Product from '../Product';

export function getCartItem(product: Product): HTMLElement {
  const template = document.createElement('section');
  template.classList.add('card', 'display--flex', 'flex--space-between');
  template.innerHTML = `
    <img class="card__icon" src="${product.getImage()}" alt="" />
    <div>
      <h2 class="card__title">${product.getName()}</h2>
      <p class="card__description">Quantity: ${product.getQuantity()}</p>
    </div>
    <h2 class="card__price">$${product.getPrice()}</h2>`;
  return template;
}
export function getTotalItem(quantity: number): HTMLElement {
  const template = document.createElement('section');
  template.classList.add('card', 'display--flex', 'flex--space-between');
  template.innerHTML = `<h2 class="card__title">Total</h2>
   <p class="card__price">$${quantity}</p>`;
  return template;
}
