import "./../scss/style.scss";
import "./../scss/productPage.scss";
import { createHtmlForLandingpage } from "./createHtml";

createHtmlForLandingpage() //We call this imported function here

const addButton = document.getElementById("increment") as HTMLButtonElement;
const removeButton = document.getElementById("decrement") as HTMLButtonElement;
const numberOfPlant = document.getElementById("numberOfPlant") as HTMLDivElement;
let plantNumber = 1;

addButton.addEventListener("click", ()=>{
    plantNumber += 1;
    numberOfPlant.innerHTML= plantNumber.toString();
})

removeButton.addEventListener("click", ()=>{
    if(plantNumber > 1){
    plantNumber -= 1;
    numberOfPlant.innerHTML= plantNumber.toString();
    }
    else{
    return false;
    }
})
