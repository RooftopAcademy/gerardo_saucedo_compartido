/*
 *@param product
 */
function getItemView(product) {
  const patter = `
    <section class="card">
          <a
            class="
              product__link
              display--flex
              flex-direction--column
              flex--center
            "
            href="detail.html"
          >
            <img class="card__icon" src="img/anti-air.png" alt="lorem" />
            <h2 class="card__title">200 Anti air traps</h2>
            <p class="card__description text--center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              mollitia maxime cupiditate eaque perspiciatis obcaecati a quidem,
              ullam cum, est, impedit facere ab dolores doloribus. Est voluptas
              vero sint laborum?
            </p>
            <p class="card__price">$6.99</p>
          </a>
        </section>
    `;
}
