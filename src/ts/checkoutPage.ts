import "./../scss/style.scss";
import { Plant } from "./products";

document.addEventListener("DOMContentLoaded", function () {
    const toPayCartDiv = document.getElementById("toPayCart") as HTMLDivElement;
    const orderDetailsSection = document.getElementById("order-details");

    if (toPayCartDiv && orderDetailsSection) {
        function renderCartContents(products: Plant[]) {
            let totalAmount = 0;

            for (const product of products) {
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");

                const plantImage = document.createElement("img");
                plantImage.src = product.image;
                plantImage.alt = product.plantName;
                plantImage.classList.add("plant-image");

                const imageAndTextContainer = document.createElement("div");
                imageAndTextContainer.classList.add("image-text-container");

                // Create a paragraph element for the plant name
                const cartItemName = document.createElement("p");
                const quantity = product.quantity || 1;
                cartItemName.innerText = `${product.plantName}${quantity > 1 ? ` x${quantity}` : ''}`;

                // Create a paragraph element for the plant price
                const cartItemPrice = document.createElement("p");
                const price = product.price * quantity;
                totalAmount += price;
                cartItemPrice.innerText = `${price} kr`;

                // Append the image and text
                imageAndTextContainer.appendChild(plantImage);
                imageAndTextContainer.appendChild(cartItemName);

                // Append the container div, price, and other elements to the cart item div
                cartItem.appendChild(imageAndTextContainer);
                cartItem.appendChild(cartItemPrice);
                toPayCartDiv.appendChild(cartItem);
            }

            toPayCartDiv.innerHTML += `<h2>Total Amount: ${totalAmount} kr</h2>`;
        }

        const storedProducts = localStorage.getItem("storedProducts");
        const products: Plant[] = storedProducts ? JSON.parse(storedProducts) : [];

        renderCartContents(products);
    }
    
    const checkoutBtn = document.querySelector(".checkoutBtn") as HTMLButtonElement;

    checkoutBtn.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = 'orderConfirmation.html';
    })
});
