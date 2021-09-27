import { getHeaderView } from "../src/views/headerView";

function addHeader() {
  const header = document.getElementById("header");
  header.innerHTML = getHeaderView();
}

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

addHeader();
addLiks();
toggleResponsiveMenu();
