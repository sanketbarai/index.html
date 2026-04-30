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
            console.log(data);
        })
        .catch(err => console.error(err));
    });
});
const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("reviewerName").value;
    const review = document.getElementById("reviewText").value;