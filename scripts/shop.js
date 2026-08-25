const modal = document.getElementById("modal");
document.querySelector("#close-modal").addEventListener("click", () => {
  modal.close();
});

document.querySelector("#clear-cart").addEventListener("click", () => {
  alert("Cart cleared.");
  document.getElementById("cart-info").innerHTML =
    "<li>Your shopping cart is empty.</li>";
  sessionStorage.clear();
});

document.querySelector("#process-order").addEventListener("click", () => {
  alert("Thank you for your order.");
  document.getElementById("cart-info").innerHTML =
    "<li>Your shopping cart is empty.</li>";
  sessionStorage.clear();
});

document.querySelector("#open-modal-button").addEventListener("click", () => {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  if (cart.length) {
    document.getElementById("cart-info").innerHTML = cart
      .map((item) => `<li>${item}</li>`)
      .join("");
  }
  modal.showModal();
});
