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
  document.getElementById("index-href").href = "index.html";
  document.getElementById("catalog-href").href = "products.html";
}
addLiks();
toggleResponsiveMenu();
