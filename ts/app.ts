function toggleResponsiveMenu() {
  document
    .getElementById("responsive-icon")
    .addEventListener("click", function () {
      document
        .getElementById("menu")
        .classList.toggle("menu--mobile-visibility");
    });
}

function addLiks() {
  (document.getElementById("index-href") as HTMLAnchorElement).href =
    "index.html";
  (document.getElementById("catalog-href") as HTMLAnchorElement).href =
    "products.html";
}
addLiks();
toggleResponsiveMenu();
