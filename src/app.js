// mobile menu
const menu = document.querySelector("#menu");

const burger = document.querySelector("#burger");
const close = document.querySelector("#menu .close");
const modalBg = document.querySelector("#menu .modal-bg");

burger.onclick = () => {
  menu.classList.remove("hidden");
};

modalBg.onclick = () => {
  menu.classList.add("hidden");
};

close.onclick = () => {
  menu.classList.add("hidden");
};

// Product Image Modal
const productModal = document.querySelector("#productModal");
const productImage = document.querySelector("#productImage");
const closeModal = document.querySelector("#productModal .close");

closeModal.onclick = () => {
  productModal.classList.remove("md:flex");
};

productImage.onclick = () => {
  productModal.classList.add("md:flex");
};

// shopping cart
const cart = document.querySelector("#cart");
const cartBox = document.querySelector("#cartBox");

cart.onclick = () => {
  cartBox.classList.toggle("hidden");
};

// count
const count = document.querySelector("#count");
const countMinusBtn = document.querySelector("#countMinusBtn");
const countPlusBtn = document.querySelector("#countPlusBtn");

countMinusBtn.onclick = () => {
  const num = parseInt(count.innerText);
  if (num >= 1) {
    count.innerText = num - 1;
  }
};

countPlusBtn.onclick = () => {
  count.innerText = parseInt(count.innerText) + 1;
};

// Add to cart
const addToCartBtn = document.querySelector("#addToCartBtn");
const cartCount = document.querySelector("#cartCount");

addToCartBtn.onclick = () => {
  if (count.innerText > 0) {
    cartCount.innerText =
      parseInt(cartCount.innerText) + parseInt(count.innerText);
    count.innerText = 0;
    checkCartCount();
  }
};

// functions
function checkCartCount() {
  if (parseInt(cartCount.innerText) > 0) {
    if (cartCount.classList.contains("hidden")) {
      cartCount.classList.remove("hidden");
    }
  }
}
