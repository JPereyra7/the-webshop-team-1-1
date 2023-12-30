import "./../scss/style.scss";
import "./../scss/product.scss"
import { Plant } from "./products";

const addButton = document.getElementById("increment") as HTMLButtonElement;
const removeButton = document.getElementById("decrement") as HTMLButtonElement;
const numberOfPlant = document.getElementById("numberOfPlant") as HTMLDivElement;
let plantNumber = 1;

addButton.addEventListener("click", () => {
    plantNumber += 1;
    numberOfPlant.innerHTML = plantNumber.toString();
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

// let selectedPlantData = window.sessionStorage.getItem("selectedPlant");
// let selectedPlant = null;
// if (selectedPlantData !== null) {
//     selectedPlant = JSON.parse(selectedPlantData) as Plant;
// }
// else {
//     console.log("did not find selected plant in sessionStorage");
// }
// console.log(selectedPlant.plantName);

let selectedPlantData = sessionStorage.getItem("selectedPlant");
let selectedPlant: Plant | null = null;

if (selectedPlantData !== null) {
    selectedPlant = JSON.parse(selectedPlantData) as Plant;
}
else {
    console.log("did not find selected plant in sessionStorage");
}

if (selectedPlant !== null) {
    console.log(selectedPlant.plantName);
    clickedPlantInformation()
}
else {
    console.log("selectedPlant is null");
}

function clickedPlantInformation (){
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
priceOfPlant.innerHTML = selectedPlant!.price +"kr inkl. moms";
nameInLatin.innerHTML= selectedPlant!.nameInLatin;
}

document.getElementById("addToCart")?.addEventListener("click",()=>{
const productCard = document.getElementById("productCard") as HTMLDivElement;
    const cartDiv = document.createElement("div");
    const cartItemName = document.createElement("h3");
    cartItemName.innerHTML = selectedPlant!.plantName;
    console.log(selectedPlant!.plantName);

    

    cartDiv.appendChild(cartItemName);
    productCard?.appendChild(cartDiv);
})

