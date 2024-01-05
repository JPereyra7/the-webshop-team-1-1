import "./../scss/style.scss";
import "./../scss/product.scss";
import "./../scss/vaxter.scss";
import "./../scss/cart.scss";
import "./../scss/hamburger.scss";
import "./../scss/skotselrad.scss";

import { createHtmlForCart, createHtmlForLandingpage } from "./createHtml";
import { createHtmlForVaxterPage } from './createHtml';
import { searchbarFunctionality } from "./createHtml";
import { createHtmlForSkotselrad } from "./createHtml";
// Importing types and functions from productPage.ts is not needed here

document.addEventListener("DOMContentLoaded", () => {
    createHtmlForVaxterPage();
});

createHtmlForLandingpage();
searchbarFunctionality();

document.addEventListener("DOMContentLoaded", () => {
    createHtmlForCart();
});

document.addEventListener("DOMContentLoaded", () => {
    createHtmlForSkotselrad();
});

document.addEventListener("DOMContentLoaded", () => {
    const contactButton = document.getElementById('contactButton') as HTMLButtonElement;

    contactButton.addEventListener('click', function () {
        window.location.href = 'kontaktaOss.html';
    });
});

const menuToggle = document.getElementById('menuToggle') as HTMLElement;
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

const cartButton = document.getElementById("cartBtn");
const cartContainer = document.getElementById("cart") as HTMLElement;
cartButton?.addEventListener("click", () => {
    cartContainer.classList.toggle("show");
});

document.getElementById("btnClose")?.addEventListener("click", () => {
    cartContainer.classList.remove("show");
});

const checkoutButtons = document.getElementsByClassName("checkoutBtn");

for (const button of checkoutButtons) {
    button.addEventListener('click', function () {
        window.location.href = 'checkoutPage.html';
    });
}

const addButton = document.getElementById("increment") as HTMLButtonElement;
const removeButton = document.getElementById("decrement") as HTMLButtonElement;
const numberOfPlant = document.getElementById("numberOfPlant") as HTMLDivElement;
let plantNumber = 1;

addButton.addEventListener("click", () => {
    plantNumber += 1;
    numberOfPlant.innerHTML = plantNumber.toString();
});

removeButton.addEventListener("click", () => {
    if (plantNumber > 1) {
        plantNumber -= 1;
        numberOfPlant.innerHTML = plantNumber.toString();
    } else {
        return false;
    }
});

