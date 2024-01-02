import "./../scss/style.scss";
import "./../scss/product.scss"


const addButton = document.getElementById("increment") as HTMLButtonElement;
const removeButton = document.getElementById("decrement") as HTMLButtonElement;
const numberOfPlant = document.getElementById("numberOfPlant") as HTMLDivElement;
const addToCartButton = document.getElementById("addToCart") as HTMLButtonElement;
let plantNumber = 1;

// may need later
// let incrementAmount: number = 0;
// let decrementAmount: number = 0;

addButton.addEventListener("click", () => {
    plantNumber += 1;
    numberOfPlant.innerHTML = plantNumber.toString();
    return plantNumber;
})

removeButton.addEventListener("click", () => {
    if (plantNumber > 1) {
        plantNumber -= 1;
        numberOfPlant.innerHTML = plantNumber.toString();
    }
    else {
        return false;
    }
})

let selectedPlantData = window.sessionStorage.getItem("selectedPlant");
let selectedPlant = null;
if (selectedPlantData !== null) {
    selectedPlant = JSON.parse(selectedPlantData);
}
else {
    console.log("did not find selected plant in sessionStorage");
}

addToCartButton.addEventListener("click", () => {
    Array.from({length:plantNumber}, () => addProduct(selectedPlant));
})

function addProduct(product) {
    let exisingEntries = JSON.parse(localStorage.getItem("storedProducts") || '[]');
    if (!exisingEntries.includes(product)) {
      exisingEntries.push(product);
      localStorage.setItem("storedProducts", JSON.stringify(exisingEntries));
    } else {
      console.log(product + "Product already in local storage");
    }
}

// may need later
// function removeProduct(product) {
//     let exisingEntries = JSON.parse(localStorage.getItem("storedProducts") || '[]');
//     exisingEntries.pop();
//     localStorage.setItem("storedProducts", JSON.stringify(exisingEntries));
// }

// function updateProduct(product) {
// }

const plantName = document.getElementById("plantName") as HTMLHeadElement;
const productPlantImg = document.getElementById("productPlantImg") as HTMLImageElement;
const plantDescription = document.getElementById("plantDescription") as HTMLParagraphElement;
const plantCareWatering = document.getElementById("plantCareWatering") as HTMLParagraphElement;
const plantCareSunlight = document.getElementById("plantCareSunlight") as HTMLParagraphElement;
const plantSpecifications = document.getElementById("plantSpecifications") as HTMLDivElement;
const plantCareSpecifications = document.getElementById("plantCareSpecifications") as HTMLDivElement;
const priceOfPlant = document.getElementById("priceOfPlant") as HTMLParagraphElement;
const nameInLatin = document.getElementById("nameInLatin") as HTMLParagraphElement;

plantName.innerHTML = selectedPlant.plantName;
productPlantImg.src = selectedPlant.image;
plantDescription.innerHTML = selectedPlant.productInfo;
plantCareSunlight.innerHTML = selectedPlant.needOfSunlight;
plantCareWatering.innerHTML = selectedPlant.watering;
plantCareSpecifications.innerHTML = selectedPlant.plantCareSpecifications;
plantSpecifications.innerHTML = selectedPlant.plantSpecifications;
priceOfPlant.innerHTML = selectedPlant.price +"kr inkl. moms";
nameInLatin.innerHTML= selectedPlant.nameInLatin;