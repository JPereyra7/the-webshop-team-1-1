import "./../scss/style-checkout.scss";

const form: HTMLElement | null = document.getElementById("customer-details");
const personField: HTMLFieldSetElement = document.createElement("fieldset");
const adressField: HTMLFieldSetElement = document.createElement("fieldset");

const legend: HTMLLegendElement = document.createElement("legend");

const adressLegend: HTMLLegendElement = document.createElement("legend");


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

legend.innerText = "Personuppgifter";
adressLegend.innerText = "Adress";

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

form?.appendChild(personField);

personField.appendChild(legend);

personField.appendChild(emailLabel);
personField.appendChild(emailInput);

personField.appendChild(firstNameLabel);
personField.appendChild(firstNameInput);

personField.appendChild(lastNameLabel);
personField.appendChild(lastNameInput);

form?.appendChild(adressField);

adressField.appendChild(adressLegend);

adressField.appendChild(streetLabel);
adressField.appendChild(streetInput);

adressField.appendChild(zipLabel);
adressField.appendChild(zipInput);

adressField.appendChild(cityLabel);
adressField.appendChild(cityInput);


const saveButton: HTMLButtonElement = document.createElement("button");
saveButton.innerText = "Bekräfta köp";
form?.appendChild(saveButton);