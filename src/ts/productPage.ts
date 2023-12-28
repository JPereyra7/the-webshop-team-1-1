import "./../scss/style.scss";
import "./../scss/product.scss"
import { plantList } from "./plantListArray";


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
export function listFromLocalStorage (){
localStorage.setItem("plantProducts", JSON.stringify(plantList));
const retrievedPlantProducts = localStorage.getItem("plantProducts");

if(retrievedPlantProducts !== null){
    const newPlantList = JSON.parse(retrievedPlantProducts);
    console.log(newPlantList);
}
else{
    console.log("products not found in local storage");
}
}
