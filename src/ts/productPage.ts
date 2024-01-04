import "./../scss/style.scss";
import "./../scss/product.scss"
import "./../scss/cart.scss"
import { Plant } from "./products";

const addButton = document.getElementById("increment") as HTMLButtonElement;
const removeButton = document.getElementById("decrement") as HTMLButtonElement;
const valueOfPlant = document.getElementById("valueOfPlant") as HTMLDivElement;
const addToCartButton = document.getElementById("addToCart") as HTMLButtonElement;

let plantNumber = 1;

//Increase or decrease quantity in cart
addButton.addEventListener("click", () => {
    plantNumber += 1;
    valueOfPlant.innerHTML = plantNumber.toString();
    return plantNumber;
});

removeButton.addEventListener("click", () => {
    if (plantNumber > 1) {
        plantNumber -= 1;
        valueOfPlant.innerHTML = plantNumber.toString();
    } else {
        return false;
    }
});

// visar information in the product page
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
    const productPlantImg = document.getElementById("productPlantImg") as HTMLImageElement;
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

// create array
let cartArray: Plant[] = JSON.parse(
    localStorage.getItem("storedProducts") ?? "[]"
);

addToCartButton.addEventListener("click", () => {
    // Update shopping cart before regenerating HTML
    updateShoppingCart();
    htmlForCartArray();
    if (selectedPlant) {
        cartArray.push(selectedPlant);
    }
});

// create html for cart

 export function htmlForCartArray() {
    const cartItems = document.getElementById("cartItems") as HTMLDivElement;
    cartItems.innerHTML = "";
    for (let i = 0; i < cartArray.length; i++) {
        const productContent = document.createElement("div");
        const itemContent = document.createElement("div");
        const itemName = document.createElement("p");
        const itemPrice = document.createElement("div");

        productContent.setAttribute("id", "productContent");

        itemContent.classList.add("itemContent");
        itemContent.setAttribute("id", "itemContent");
        itemName.setAttribute("id", "itemName");
        itemName.classList.add("itemName");
        itemPrice.setAttribute("id", "itemPrice");
        itemPrice.classList.add("itemPrice");

        itemName.innerText = cartArray[i].plantName;
        itemPrice.innerText = `${cartArray[i].price} kr`;

        itemContent.appendChild(itemName);
        itemContent.appendChild(itemPrice);
        productContent.appendChild(itemContent);

        cartItems.appendChild(productContent);
    }
}

// Funktion för klickhändelse inne i varukorgen
export function addtoClicked(product: Plant) {
    if (cartArray.length === 0) {
        // cartArray.push(product);
    } else {
        let indexLookup = cartArray.findIndex((prod) => prod.plantId === product.plantId);

        if (indexLookup === -1) {
            cartArray.push(selectedPlant!);
        } else {
            cartArray[indexLookup].quantity = cartArray[indexLookup].quantity + 1;
        }
    }
    updateShoppingCart()
}

function updateShoppingCart() {
    localStorage.setItem("storedProducts", JSON.stringify(cartArray));
}


htmlForCartArray()