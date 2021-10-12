(()=>{var t={659:(t,e,n)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Cart=void 0;var r=n(331),o=function(){function t(){}return t.prototype.addProduct=function(e){this.productsList.push(e),t.saveToLocalStorage(this)},Object.defineProperty(t.prototype,"totalPrice",{get:function(){var t=0;return this.productsList.forEach((function(e){console.log(e.getPrice()),t+=Number(e.getPrice().toString().replace("$",""))})),t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"productsCount",{get:function(){return this.productsList.length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"allProducts",{get:function(){return this.productsList},enumerable:!1,configurable:!0}),t.fromLocalStorage=function(){var e=JSON.parse(localStorage.getItem("cart")),n=[];e&&e.productsList.forEach((function(t){n.push(r.Store.newProductFromJson(t))}));var o=new t;return o.productsList=n,o},t.saveToLocalStorage=function(t){localStorage.setItem("cart",JSON.stringify(t))},t}();e.Cart=o},366:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e,n,r,o,i,c){void 0===t&&(t=0),void 0===e&&(e=""),void 0===n&&(n=""),void 0===r&&(r=144),void 0===o&&(o="../img/anti-air.png"),void 0===i&&(i=50),void 0===c&&(c=200),this.id=t,this.name=e,this.description=n,this.level=r,this.image=o,this.price=i,this.quantity=c}return t.prototype.getId=function(){return this.id},t.prototype.setId=function(t){this.id=t},t.prototype.getName=function(){return this.name},t.prototype.setName=function(t){this.name=t},t.prototype.getDescription=function(){return this.description},t.prototype.setDescription=function(t){this.description=t},t.prototype.getLevel=function(){return this.level},t.prototype.setLevel=function(t){this.level=t},t.prototype.getImage=function(){return this.image},t.prototype.setImage=function(t){this.image=t},t.prototype.getPrice=function(){return this.price},t.prototype.setPrice=function(t){this.price=t},t.prototype.getQuantity=function(){return this.quantity},t.prototype.setQuantity=function(t){this.quantity=t},t}();e.default=n},331:function(t,e,n){"use strict";var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function c(t){try{s(r.next(t))}catch(t){i(t)}}function u(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,u)}s((r=r.apply(t,e||[])).next())}))},o=this&&this.__generator||function(t,e){var n,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=e.call(t,c)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.Store=void 0;var i=n(366),c=n(659),u=n(546),s=function(){function t(){this.productsList=[],this.cart=c.Cart.fromLocalStorage(),this.user=new u.User}return t.prototype.fetchProducts=function(){return r(this,void 0,void 0,(function(){return o(this,(function(t){return[2,fetch("https://my-json-server.typicode.com/RooftopAcademy/gerardo_saucedo_compartido/products").then((function(t){return t.ok?t.json():Promise.reject(t)})).catch((function(t){console.error(t)}))]}))}))},t.prototype.setProducts=function(e){var n=this;e.forEach((function(e){n.productsList.push(t.newProductFromJson(e))}))},t.newProductFromJson=function(t){return new i.default(t.id,t.name,t.description,t.level,t.image,t.price,t.quantity)},t.prototype.getAllProducts=function(){return this.productsList},t.prototype.findProductById=function(t){return this.productsList.find((function(e){return e.getId()==t}))},t}();e.Store=s},546:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.User=void 0;e.User=function(){}},516:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){var t=document.createElement("header");return t.innerHTML='\n  <nav class="navbar">\n  <figure class="brand">\n    <a href="#" class="menu__link">Items Shop</a>\n  </figure>\n  <div id="responsive-icon" class="menu__icon-container">\n    <div class="menu__icon menu__icon--top"></div>\n    <div class="menu__icon"></div>\n    <div class="menu__icon menu__icon--bottom"></div>\n  </div>\n\n  <ul id="menu" class="menu">\n    <li class="menu__item">\n      <a id="index-href" href="#" class="menu__link"> Home </a>\n    </li>\n    <li class="menu__item">\n      <a id="catalog-href" href="#" class="menu__link"> Products </a>\n    </li>\n    <li class="menu__item">\n      <a\n        id="cart-href"\n        href="#"\n        class="menu__link display--flex flex--space-around cart"\n      >\n        Cart\n        <div id="cart-count" class="cart__count">0</div>\n      </a>\n    </li>\n  </ul>\n</nav>\n<section class="banner display--flex">\n  <h1 id="banner-title" class="title text--center">\n    Lorem ipsum dolor sit.\n  </h1>\n</section>\n    ',t.innerHTML}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}(()=>{"use strict";var t,e=n(516),r=n(659);document.getElementById("header").innerHTML=(0,e.default)(),document.getElementById("index-href").href="/",document.getElementById("catalog-href").href="products",document.getElementById("cart-href").href="cart",document.getElementById("responsive-icon").addEventListener("click",(function(){document.getElementById("menu").classList.toggle("menu--mobile-visibility")})),t=r.Cart.fromLocalStorage(),document.getElementById("cart-count").textContent=t.productsCount.toString()})(),document.getElementById("banner-title").innerHTML="Save the world <br/> items shop"})();
//# sourceMappingURL=index.js.map