import "./../scss/style.scss";
import "./../scss/product.scss";
import "./../scss/cart.scss";
import { Plant } from "./products";

// Get HTML elements
//----------------------------------------------------------------
const addButton = document.getElementById("increment") as HTMLButtonElement;
const removeButton = document.getElementById("decrement") as HTMLButtonElement;
const valueOfPlant = document.getElementById("valueOfPlant") as HTMLDivElement;
const addToCartButton = document.getElementById(
  "addToCart"
) as HTMLButtonElement;
const productPlantImg = document.getElementById(
  "productPlantImg"
) as HTMLImageElement;

let plantNumber = 1;

// Increase or decrease quantity in product page "add to cart button"
//----------------------------------------------------------------
addButton.addEventListener("click", () => {
  plantNumber += 1;
  valueOfPlant.innerHTML = plantNumber.toString();
});

removeButton.addEventListener("click", () => {
  if (plantNumber > 1) {
    plantNumber -= 1;
    valueOfPlant.innerHTML = plantNumber.toString();
  } else {
    return false;
  }
});

// Show information in the product page
//----------------------------------------------------------------
let selectedPlantData = sessionStorage.getItem("selectedPlant");
let selectedPlant: Plant | null = null;
if (selectedPlantData !== null) {
  selectedPlant = JSON.parse(selectedPlantData) as Plant;
} else {
  console.log("did not find selected plant in sessionStorage");
}

if (selectedPlant !== null) {
  console.log(selectedPlant.plantName);
  clickedPlantInformation();
} else {
  console.log("selectedPlant is null");
}

function clickedPlantInformation() {
  const plantName = document.getElementById("plantName") as HTMLHeadElement;
  const plantDescription = document.getElementById("plantDescription") as HTMLParagraphElement;
  const plantCareWatering = document.getElementById("plantCareWatering") as HTMLParagraphElement;
  const plantCareSunlight = document.getElementById("plantCareSunlight") as HTMLParagraphElement;
  const plantSpecifications = document.getElementById("plantSpecifications") as HTMLDivElement;
  const plantCareSpecifications = document.getElementById("plantCareSpecifications") as HTMLDivElement;
  const priceOfPlant = document.getElementById("priceOfPlant") as HTMLParagraphElement;
  const nameInLatin = document.getElementById("nameInLatin") as HTMLParagraphElement;

  plantName.innerHTML = selectedPlant!.plantName;
  productPlantImg.src = selectedPlant!.image;
  plantDescription.innerHTML = selectedPlant!.productInfo;
  plantCareSunlight.innerHTML = selectedPlant!.needOfSunlight;
  plantCareWatering.innerHTML = selectedPlant!.watering;
  plantCareSpecifications.innerHTML = selectedPlant!.plantCareSpecifications;
  plantSpecifications.innerHTML = selectedPlant!.plantSpecifications;
  priceOfPlant.innerHTML = selectedPlant!.price + "kr inkl. moms";
  nameInLatin.innerHTML = selectedPlant!.nameInLatin;
}

// Add to cart function
//----------------------------------------------------------------
// Create array
let cartArray: Plant[] = JSON.parse(
  localStorage.getItem("storedProducts") ?? "[]"
);

addToCartButton.addEventListener("click", () => {
  if (selectedPlant) {
    const existingPlant = cartArray.find(
      (plant) => plant.plantId === selectedPlant!.plantId
    );

    if (existingPlant) {
      existingPlant.quantity = plantNumber;
    } else {
      selectedPlant.quantity = plantNumber;
      cartArray.push(selectedPlant);
    }
    updateShoppingCart();
    htmlForCartArray();

  }
});

// Create HTML for cart
export function htmlForCartArray() {
  const cartItems = document.getElementById("cartItems") as HTMLDivElement;
  const totalAmountElement = document.getElementById(
    "totalAmount"
  ) as HTMLDivElement;

  cartItems.innerHTML = "";
  let totalAmount = 0;

  for (let i = 0; i < cartArray.length; i++) {
    const productContent = document.createElement("div");
    const itemContent = document.createElement("div");
    const itemImage = document.createElement("img");
    const itemName = document.createElement("p");
    const itemQuantity = document.createElement("span");
    const itemPrice = document.createElement("div");
    const incrementButton = document.createElement("button");
    const decrementButton = document.createElement("button");

    productContent.setAttribute("id", "productContent");

    itemContent.classList.add("itemContent");
    itemContent.setAttribute("id", "itemContent");
    itemName.setAttribute("id", "itemName");
    itemName.classList.add("itemName");
    itemQuantity.setAttribute("id", "itemQuantity");
    itemQuantity.classList.add("itemQuantity");
    itemPrice.setAttribute("id", "itemPrice");
    itemPrice.classList.add("itemPrice");

    itemImage.src = cartArray[i].image;
    itemImage.alt = cartArray[i].plantName;
    itemImage.classList.add("cart-plant-image");

    itemName.innerText = cartArray[i].plantName;
    const quantity = cartArray[i].quantity || 1;
    itemQuantity.innerText = `Antal: ${quantity}`;
    const price = cartArray[i].price * quantity;
    itemPrice.innerText = `${price} kr`;

    totalAmount += price;

    incrementButton.innerText = "+";
    decrementButton.innerText = "-";

    incrementButton.addEventListener("click", () => {
      cartArray[i].quantity = (cartArray[i].quantity || 1) + 1;

      updateShoppingCart();
      htmlForCartArray();
    });

    decrementButton.addEventListener("click", () => {
      if (cartArray[i].quantity && cartArray[i].quantity > 1) {
        cartArray[i].quantity -= 1;

        updateShoppingCart();
        htmlForCartArray();
      }
    });

    itemContent.appendChild(itemImage);
    itemContent.appendChild(itemName);
    itemContent.appendChild(itemQuantity);
    itemContent.appendChild(itemPrice);
    itemContent.appendChild(incrementButton);
    itemContent.appendChild(decrementButton);
    productContent.appendChild(itemContent);

    cartItems.appendChild(productContent);
  }

  totalAmountElement.innerText = `Summa: ${totalAmount} kr`;
}

// Function for click event inside the shopping cart
// export function addtoClicked(product: Plant) {
//     updateShoppingCartAndRender();
// }

function updateShoppingCart() {
  localStorage.setItem("storedProducts", JSON.stringify(cartArray));
}

// Initial call to update the cart when the page loads
htmlForCartArray();

//Button to checkout page
const checkoutButtons = document.getElementsByClassName("checkoutBtn");

for (const button of checkoutButtons) {
  button.addEventListener("click", function () {
    window.location.href = "checkoutPage.html";
  });
}
