import "./../scss/style.scss";
import "./../scss/hamburger.scss";
import { Plant } from "./products";

// Globally declared
let products: Plant[] = [];

// Hamburger Menu
const menuToggle = document.getElementById("menuToggle") as HTMLElement;
const navigationMenu = document.querySelector(".navigation-menu") as HTMLElement;
const closeButton = document.querySelector(".close-button") as HTMLButtonElement;
menuToggle.addEventListener("click", () => {
  setTimeout(() => {
    navigationMenu.classList.toggle("show");
  }, 100);
});

closeButton.addEventListener("click", () => {
  navigationMenu.classList.remove("show");
});

document.addEventListener("DOMContentLoaded", function () {
  const toPayCartDiv = document.getElementById("toPayCart") as HTMLDivElement;
  const orderDetailsSection = document.getElementById("order-details");

  if (toPayCartDiv && orderDetailsSection) {
    function renderCartItem(product: Plant) {
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
      cartItemName.innerText = `${product.plantName}`;

      // Create a paragraph element for the plant price
      const cartItemPrice = document.createElement("p");
      const quantity = product.quantity || 1;
      const price = product.price * quantity;
      cartItemPrice.innerText = `${price} kr`;

      // Create buttons to increment and decrement quantity
      const incrementButton = document.createElement("button");
      incrementButton.innerText = "+";
      incrementButton.classList.add("quantity-button");

      const decrementButton = document.createElement("button");
      decrementButton.innerText = "-";
      decrementButton.classList.add("quantity-button");

      // Append the image and text
      imageAndTextContainer.appendChild(plantImage);
      imageAndTextContainer.appendChild(cartItemName);

      // Append the container div, price, and other elements to the cart item div
      cartItem.appendChild(imageAndTextContainer);
      cartItem.appendChild(cartItemPrice);
      cartItem.appendChild(incrementButton);
      cartItem.appendChild(decrementButton);
      toPayCartDiv.appendChild(cartItem);
    }

    function updateCartAndRender() {
      localStorage.setItem("storedProducts", JSON.stringify(products));
      toPayCartDiv.innerHTML = "";
      renderCartContents(products);
    }

    function renderCartContents(products: Plant[]) {
      let totalAmount = 0;

      for (const product of products) {
        renderCartItem(product);
        const quantity = product.quantity || 1;
        const price = product.price * quantity;
        totalAmount += price;
      }

      toPayCartDiv.innerHTML += `<h2>Summa: ${totalAmount} kr</h2>`;
    }

    // Event delegation for increment and decrement buttons
    toPayCartDiv.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      const isIncrementButton = target.innerText === "+";
      // const isDecrementButton = target.innerText === "-";
      
      // Find the closest cart item
      const cartItem = target.closest(".cart-item");
    
      if (cartItem) {
        const index = Array.from(toPayCartDiv.children).indexOf(cartItem);
    
        if (index !== -1) {
          const product = products[index];
    
          if (isIncrementButton) {
            product.quantity = (product.quantity || 1) + 1;
          } else {
            product.quantity = (product.quantity || 1) - 1;
            if (product.quantity < 1) {
              // If quantity is below 1, remove the item
              products.splice(index, 1);
            }
          }
    
          updateCartAndRender();
        }
      }
    });

    const storedProducts = localStorage.getItem("storedProducts");
    const storedProductsArray: Plant[] = storedProducts ? JSON.parse(storedProducts) : [];

    // Copy the items from storedProductsArray to the global products array
    products.push(...storedProductsArray);

    renderCartContents(products);
  }

  const checkoutBtn = document.querySelector(".checkoutBtn") as HTMLButtonElement;

  checkoutBtn.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "orderConfirmation.html";
  });
});
