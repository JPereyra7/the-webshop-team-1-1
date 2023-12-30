import "./../scss/style.scss";
import "./../scss/productPage.scss";
import "./../scss/vaxter.scss";
import "./../scss/cart.scss"
import "./../scss/hamburger.scss"

import { createHtmlForLandingpage } from "./createHtml";
import { createHtmlForVaxterPage } from './createHtml';

document.addEventListener("DOMContentLoaded", () => { //Don't touch or we will see bugs
    createHtmlForVaxterPage();
});

createHtmlForLandingpage(); //Calling function OOP from createHtml for landing page




//Function to open hamburger menu
const menuToggle = document.getElementById('menuToggle') as HTMLElement;
// const hamburgerMenu = document.querySelector('.hamburger-menu') as HTMLElement;
const navigationMenu = document.querySelector('.navigation-menu') as HTMLElement;
const closeButton = document.querySelector('.close-button') as HTMLButtonElement;

menuToggle.addEventListener('click', () => {
    setTimeout(() => {
        navigationMenu.classList.toggle('show');  
    }, 100);

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


