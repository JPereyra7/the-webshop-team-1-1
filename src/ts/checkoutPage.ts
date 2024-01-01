import "./../scss/style.scss";
import "./../scss/style-checkout.scss";
import { plantList } from "./plantListArray";

// function idProductAmount() {

// }
console.log(plantList);
function calcTotalPrice() {
    let costOfProducts: number = 0;
    let costOfShipping = 98;
    let costOfTotal: number = 0;
    let freeShippingFloor = 500;
    for (let i = 0; i < plantList.length; i++) {
        costOfProducts += plantList[i].price;
    }
    if (costOfProducts < freeShippingFloor) {
        costOfTotal = costOfProducts + costOfShipping;
    } else {
        costOfTotal = costOfProducts;
    }
    console.log("Products cost:",costOfProducts);
    console.log("Shipping cost:",costOfShipping);
    console.log("Total cost:",costOfTotal);
}
calcTotalPrice();

function createOrderDetails() {
    const orderDetails = document.getElementById("order-details");
    if (plantList.length > 0) {
        const table = document.createElement("table");
        const caption = document.createElement("caption");
        const thead = document.createElement("thead");
        const theadtr = document.createElement("tr");
        const theadth1 = document.createElement("th");
        const theadth2 = document.createElement("th");
        const theadth3 = document.createElement("th");
        const theadth4 = document.createElement("th");
        const tbody = document.createElement("tbody");
      
        caption.innerHTML = "Din order";
        theadth1.scope = "col";
        theadth2.scope = "col";
        theadth3.scope = "col";
        theadth4.scope = "col";
        theadth1.innerText = "Produkt";
        theadth2.innerText = "Pris";
        theadth3.innerText = "Antal";
        theadth4.innerText = "Belopp";

        table.appendChild(caption);
        table.appendChild(thead);
        thead.appendChild(theadtr);
        theadtr.appendChild(theadth1);
        theadtr.appendChild(theadth2);
        theadtr.appendChild(theadth3);
        theadtr.appendChild(theadth4);
        table.appendChild(tbody);

        for (let i = 0; i < plantList.length; i++) {
            const product = plantList[i];
            const tbodytr = document.createElement("tr");
            const tbodyth = document.createElement("th");
            const tbodytd1 = document.createElement("td");
            const tbodytd2 = document.createElement("td");
            const tbodytd3 = document.createElement("td");

            tbodyth.scope = "row";
            tbodyth.innerHTML = product.plantName;
            tbodytd1.innerHTML = `${product.price}`;
            tbodytd2.innerHTML = `${2}`;
            tbodytd3.innerHTML = "";

            tbody.appendChild(tbodytr);
            tbodytr.appendChild(tbodyth);
            tbodytr.appendChild(tbodytd1);
            tbodytr.appendChild(tbodytd2);
            tbodytr.appendChild(tbodytd3);
        }

        const tfoot = document.createElement("tfoot");
        const tfoottr1 = document.createElement("tr");
        const tfoottr2 = document.createElement("tr");
        const tfootth1 = document.createElement("th");
        const tfootth2 = document.createElement("th");
        const tfoottd1 = document.createElement("td");
        const tfoottd2 = document.createElement("td");
        const tfoottd3 = document.createElement("td");
        const tfoottd4 = document.createElement("td");
        
        tfootth1.scope = "row";
        tfootth1.innerText = "Frakt";
        tfoottd1.innerText = "400";
        tfoottd2.innerText = "x";
        tfoottd3.innerText = "x";

        tfootth2.scope = "row";
        tfootth2.innerText = "Totalt";
        tfootth2.colSpan = 3;
        tfoottd4.innerText = "x";

        tfoottr1.appendChild(tfootth1);
        tfoottr1.appendChild(tfoottd1);
        tfoottr1.appendChild(tfoottd2);
        tfoottr1.appendChild(tfoottd3);
        tfoot.appendChild(tfoottr1);


        tfoottr2.appendChild(tfootth2);
        tfoottr2.appendChild(tfoottd4);
        tfoot.appendChild(tfoottr2);

        table.appendChild(tbody);
        table.appendChild(tfoot);

        orderDetails?.appendChild(table);
    } else {
        const p = document.createElement("p");
        p.innerText = "Din varukorg är tom!";
        orderDetails?.appendChild(p);
    }
}
createOrderDetails();

// Form for personal and contact details
const form: HTMLElement | null = document.getElementById("customer-details");
const personField: HTMLFieldSetElement = document.createElement("fieldset");
const adressField: HTMLFieldSetElement = document.createElement("fieldset");
const personLegend: HTMLLegendElement = document.createElement("legend");
const addressLegend: HTMLLegendElement = document.createElement("legend");
const emailLabel: HTMLLabelElement = document.createElement("label");
const firstNameLabel: HTMLLabelElement = document.createElement("label");
const lastNameLabel: HTMLLabelElement = document.createElement("label");
const streetLabel: HTMLLabelElement = document.createElement("label");
const zipLabel: HTMLLabelElement = document.createElement("label");
const cityLabel: HTMLLabelElement = document.createElement("label");
const emailInput: HTMLInputElement = document.createElement("input");
const firstNameInput: HTMLInputElement = document.createElement("input");
const lastNameInput: HTMLInputElement = document.createElement("input");
const streetInput: HTMLInputElement = document.createElement("input");
const zipInput: HTMLInputElement = document.createElement("input");
const cityInput: HTMLInputElement = document.createElement("input");
const confirmButton: HTMLButtonElement = document.createElement("button");

personLegend.innerText = "Personuppgifter";
addressLegend.innerText = "Adress";
emailLabel.innerText = "E-postadress:";
emailLabel.setAttribute("for", "email");
firstNameLabel.innerText = "Förnamn:";
firstNameLabel.setAttribute("for", "firstName");
lastNameLabel.innerText = "Efternamn:";
lastNameLabel.setAttribute("for", "lastName");
streetLabel.innerText = "Gatuadress:";
streetLabel.setAttribute("for", "street");
zipLabel.innerText = "Postnummer:";
zipLabel.setAttribute("for", "zip");
cityLabel.innerText = "Postort:";
cityLabel.setAttribute("for", "city");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "email");
emailInput.setAttribute("name", "email");
firstNameInput.setAttribute("type", "text");
firstNameInput.setAttribute("id", "firstName");
firstNameInput.setAttribute("name", "firstName");
lastNameInput.setAttribute("type", "text");
lastNameInput.setAttribute("id", "lastName");
lastNameInput.setAttribute("name", "lastName");
streetInput.setAttribute("type", "text");
streetInput.setAttribute("id", "street");
streetInput.setAttribute("name", "street");
zipInput.setAttribute("type", "text");
zipInput.setAttribute("id", "zip");
zipInput.setAttribute("name", "zip");
cityInput.setAttribute("type", "text");
cityInput.setAttribute("id", "city");
cityInput.setAttribute("name", "city");
confirmButton.type = "button";
confirmButton.innerText = "Bekräfta köp";

form?.appendChild(personField);
personField.appendChild(personLegend);
personField.appendChild(emailLabel);
personField.appendChild(emailInput);
personField.appendChild(firstNameLabel);
personField.appendChild(firstNameInput);
personField.appendChild(lastNameLabel);
personField.appendChild(lastNameInput);
form?.appendChild(adressField);
adressField.appendChild(addressLegend);
adressField.appendChild(streetLabel);
adressField.appendChild(streetInput);
adressField.appendChild(zipLabel);
adressField.appendChild(zipInput);
adressField.appendChild(cityLabel);
adressField.appendChild(cityInput);
form?.appendChild(confirmButton);