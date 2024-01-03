import "./../scss/style.scss";
import "./../scss/product.scss"
import "./../scss/cart.scss"
import { Plant } from "./products";

const addButton = document.getElementById("increment") as HTMLButtonElement;
const removeButton = document.getElementById("decrement") as HTMLButtonElement;
const valueOfPlant = document.getElementById("valueOfPlant") as HTMLDivElement;
let plantNumber = 1;

// may need later
// let incrementAmount: number = 0;
// let decrementAmount: number = 0;

addButton.addEventListener("click", () => {
    plantNumber += 1;
    valueOfPlant.innerHTML = plantNumber.toString();

})

removeButton.addEventListener("click", () => {
    if (plantNumber > 1) {
        plantNumber -= 1;
        valueOfPlant.innerHTML = plantNumber.toString();
    }
    else {
        return false;
    }
})

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