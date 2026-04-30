const cartButtons = document.querySelectorAll(".addToCart");

cartButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
 fetch("https://fakestoreapi.com/carts", {
      method: "POST",
            headers: {