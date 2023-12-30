import "./../scss/style-checkout.scss";

// Table for Order Details
const table: HTMLElement | null = document.getElementById("checkout-products");
const caption: HTMLTableCaptionElement = document.createElement("caption");

const thead: HTMLTableSectionElement = document.createElement("thead");
const theadRow1: HTMLTableRowElement = document.createElement("tr");
const theadHeaderCell1: HTMLTableCellElement = document.createElement("th");
const theadHeaderCell2: HTMLTableCellElement = document.createElement("th");
const theadHeaderCell3: HTMLTableCellElement = document.createElement("th");
const theadHeaderCell4: HTMLTableCellElement = document.createElement("th");

const tbody: HTMLElement = document.createElement("tbody");
const tbodyRow1: HTMLTableRowElement = document.createElement("tr");
const tbodyHeaderCell1: HTMLTableCellElement = document.createElement("th");
const tbodyDataCell1: HTMLTableCellElement = document.createElement("td");
const tbodyDataCell2: HTMLTableCellElement = document.createElement("td");
const tbodyDataCell3: HTMLTableCellElement = document.createElement("td");

const tfoot: HTMLTableSectionElement = document.createElement("tfoot");
const tfootRow1: HTMLTableRowElement = document.createElement("tr");
const tfootRow2: HTMLTableRowElement = document.createElement("tr");
const tfootHeaderCell1: HTMLTableCellElement = document.createElement("th");
const tfootHeaderCell2: HTMLTableCellElement = document.createElement("th");
const tfootDataCell1: HTMLTableCellElement = document.createElement("td");
const tfootDataCell2: HTMLTableCellElement = document.createElement("td");

caption.innerText = "Din order";
theadHeaderCell1.scope = "col";
theadHeaderCell2.scope = "col";
theadHeaderCell3.scope = "col";
theadHeaderCell4.scope = "col";
theadHeaderCell1.innerText = "Produkt";
theadHeaderCell2.innerText = "Pris";
theadHeaderCell3.innerText = "Antal";
theadHeaderCell4.innerText = "Belopp";

tbodyHeaderCell1.scope = "row";
tbodyHeaderCell1.innerText = "Fredskalla";
tbodyDataCell1.innerText = "79,00";
tbodyDataCell2.innerHTML = '<input type="number" value="1" min="0" max="10" required>';
tbodyDataCell3.innerText = "79,00";

tfootHeaderCell1.scope = "row";
tfootHeaderCell1.colSpan = 3;
tfootHeaderCell2.scope = "row";
tfootHeaderCell2.colSpan = 3;
tfootDataCell1.colSpan = 1;
tfootDataCell2.colSpan = 1;

tfootHeaderCell1.innerText = "Fraktkostnad";
tfootDataCell1.innerText = "59,00";
tfootHeaderCell2.innerText = "Totalbelopp";
tfootDataCell2.innerText = "138,00";

table?.appendChild(caption);
table?.appendChild(thead);
thead.appendChild(theadRow1);
theadRow1.appendChild(theadHeaderCell1);
theadRow1.appendChild(theadHeaderCell2);
theadRow1.appendChild(theadHeaderCell3);
theadRow1.appendChild(theadHeaderCell4);
table?.appendChild(tbody);
tbody.appendChild(tbodyRow1);
tbodyRow1.appendChild(tbodyHeaderCell1);
tbodyRow1.appendChild(tbodyDataCell1);
tbodyRow1.appendChild(tbodyDataCell2);
tbodyRow1.appendChild(tbodyDataCell3);
table?.appendChild(tfoot);
tfoot.appendChild(tfootRow1);
tfoot.appendChild(tfootRow2);
tfootRow1.appendChild(tfootHeaderCell1);
tfootRow1.appendChild(tfootDataCell1);
tfootRow2.appendChild(tfootHeaderCell2);
tfootRow2.appendChild(tfootDataCell2);

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