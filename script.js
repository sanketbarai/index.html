const cartButtons = document.querySelectorAll(".addToCart");

cartButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
 fetch("https://fakestoreapi.com/carts", {
      method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                  userId: 1,
                date: new Date(),
                products: [{
                    productId: index + 1,
                    quantity: 1
                }]
            })
        })
         .then(res => res.json())
        .then(data => {
            alert("Product added to cart!");