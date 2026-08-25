const subscribeButton = document.getElementById("subscribe-button");
subscribeButton.onclick = () => {
  alert("Thank you for subscribing.");
};

const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.onclick = (event) => {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const bookTitle =
      event.target.previousElementSibling.previousElementSibling;
    cart.push(bookTitle.textContent);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
  };
});

document
  .querySelector("#feedback-form")
  ?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData);
    localStorage.setItem("feedback-form", JSON.stringify(formObject));
    alert("Thank you for your message.");
  });
