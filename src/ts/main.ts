import "./../scss/style.scss";
import "./../scss/productPage.scss";
import { createHtmlForLandingpage } from "./createHtml";

createHtmlForLandingpage() //We call this imported function here

//Function to open hamburger menu
const hamburgerMenu = document.querySelector('.hamburger-menu') as HTMLElement;
const navigationMenu = document.querySelector('.navigation-menu') as HTMLElement;
const closeButton = document.querySelector('.close-button') as HTMLButtonElement;

hamburgerMenu.addEventListener('click', () => {
  navigationMenu.classList.toggle('show');
});

closeButton.addEventListener('click', () => {
    navigationMenu.classList.remove('show');
});


//Function to open up cart in landingpage
const cartButton = document.getElementById("cartBtn");
const cartContainer = document.querySelector(".cartContainer") as HTMLElement;

cartButton?.addEventListener("click", () =>{
    cartContainer.classList.toggle("show");
});

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
