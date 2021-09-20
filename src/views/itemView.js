/*
 *@param product
 */
function getItemView(product) {
  return `<section class="card">
          <a
            class="
              product__link
              display--flex
              flex-direction--column
              flex--center
            "
            href="detail.html"
          >
            <img class="card__icon" src="${product.getImage()}" alt="lorem" />
            <h2 class="card__title">${product.getQuantity()} ${product.getName()}</h2>
            <p class="card__description text--center">
              ${product.getDescription()}
            </p>
            <p class="card__price">${product.getPrice()}</p>
          </a>
        </section>
    `;
}
