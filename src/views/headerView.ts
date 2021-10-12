export default function getHeaderView() {
  const header = document.createElement('header');
  header.innerHTML = `
  <nav class="navbar">
  <figure class="brand">
    <a href="#" class="menu__link">Items Shop</a>
  </figure>
  <div id="responsive-icon" class="menu__icon-container">
    <div class="menu__icon menu__icon--top"></div>
    <div class="menu__icon"></div>
    <div class="menu__icon menu__icon--bottom"></div>
  </div>

  <ul id="menu" class="menu">
    <li class="menu__item">
      <a id="index-href" href="#" class="menu__link"> Home </a>
    </li>
    <li class="menu__item">
      <a id="catalog-href" href="#" class="menu__link"> Products </a>
    </li>
    <li class="menu__item">
      <a
        id="cart-href"
        href="#"
        class="menu__link display--flex flex--space-around cart"
      >
        Cart
        <div id="cart-count" class="cart__count">0</div>
      </a>
    </li>
  </ul>
</nav>
<section class="banner display--flex">
  <h1 id="banner-title" class="title text--center">
    Lorem ipsum dolor sit.
  </h1>
</section>
    `;
  return header.innerHTML;
}
