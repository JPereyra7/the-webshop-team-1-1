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

//Var försiktig med allt ovanför detta. Rörs dem störs arbetet!
//---------------------------------------------------------------
//---------------------------------------------------------------

//nav - hamburgaremeny - varukorg
//----------------------------------------------------------------


//rendering av produkter till startsidan
//----------------------------------------------------------------

//rendering av produkter till växter sidan
//-----------------------------------------------------------------

//rendering av skötselråd ts till skötselråd sidan


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



