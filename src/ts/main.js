"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.htmlForCartArray = void 0;
require("./../scss/style.scss");
require("./../scss/product.scss");
require("./../scss/vaxter.scss");
require("./../scss/cart.scss");
require("./../scss/hamburger.scss");
require("./../scss/skotselrad.scss");
var plantListArray_1 = require("./plantListArray");
var skotselradArray_ts_1 = require("./skotselradArray.ts");
document.addEventListener("DOMContentLoaded", function () {
    var contactButton = document.getElementById("contactButton");
    contactButton.addEventListener("click", function () {
        window.location.href = "kontaktaOss.html";
    });
});
//Hamburger Menu
var menuToggle = document.getElementById("menuToggle");
var navigationMenu = document.querySelector(".navigation-menu");
var closeButton = document.querySelector(".close-button");
menuToggle.addEventListener("click", function () {
    setTimeout(function () {
        navigationMenu.classList.toggle("show");
    }, 100);
});
closeButton.addEventListener("click", function () {
    navigationMenu.classList.remove("show");
});
//Add To Cart Icon when clicked
var cartButton = document.getElementById("cartBtn");
var cartContainer = document.getElementById("cart");
cartButton === null || cartButton === void 0 ? void 0 : cartButton.addEventListener("click", function () {
    cartContainer.classList.toggle("show");
});
(_a = document.getElementById("btnClose")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    cartContainer.classList.remove("show");
});
// For Loop (Rendering OOP Products) for Landing page
function createHtmlForLandingpage() {
    var productpageDiv = document.getElementById("showPlant");
    var _loop_1 = function (i) {
        var plant = plantListArray_1.plantList[i];
        var plantItemDiv = document.createElement("div");
        plantItemDiv.classList.add("plant");
        var imageElement = document.createElement("img");
        imageElement.src = plant.image;
        imageElement.alt = plant.plantName;
        var nameElement = document.createElement("h1");
        nameElement.innerHTML = plant.plantName;
        var priceElement = document.createElement("p");
        priceElement.innerHTML = "".concat(plant.price, " kr");
        plantItemDiv.appendChild(imageElement);
        plantItemDiv.appendChild(nameElement);
        plantItemDiv.appendChild(priceElement);
        // When clicking on the products in the landing page, open the product page
        plantItemDiv.addEventListener("click", function () {
            window.sessionStorage.setItem("selectedPlant", JSON.stringify(plant));
            window.location.replace("/productPage.html");
        });
        if (productpageDiv) {
            productpageDiv.appendChild(plantItemDiv);
        }
    };
    for (var i = 0; i < 4; i++) {
        _loop_1(i);
    }
}
createHtmlForLandingpage();
// Function for Växter.html page
function createHtmlForVaxterPage() {
    var vaxterPageDiv = document.getElementById("productParent");
    // Create a parent container for all plant containers
    var plantContainerParent = document.createElement("div");
    plantContainerParent.classList.add("plantContainerParent");
    var _loop_2 = function (i) {
        var plant = plantListArray_1.plantList[i];
        var plantItemDiv = document.createElement("div");
        plantItemDiv.classList.add("plantContainer");
        var directionContainer = document.createElement("div");
        directionContainer.classList.add("directionContainer");
        var itemContainer = document.createElement("div");
        itemContainer.classList.add("itemContainer");
        var imageElement = document.createElement("img");
        imageElement.src = plant.image;
        imageElement.alt = plant.plantName;
        var nameElement = document.createElement("h1");
        nameElement.innerHTML = plant.plantName;
        var priceElement = document.createElement("p");
        priceElement.innerHTML = "".concat(plant.price, " kr");
        itemContainer.appendChild(imageElement);
        itemContainer.appendChild(nameElement);
        itemContainer.appendChild(priceElement);
        directionContainer.appendChild(itemContainer);
        plantItemDiv.appendChild(directionContainer);
        plantItemDiv.addEventListener("click", function () {
            window.location.replace("/productPage.html?plantIndex=".concat(i));
            window.sessionStorage.setItem("selectedPlant", JSON.stringify(plant));
        });
        plantContainerParent.appendChild(plantItemDiv);
    };
    for (var i = 0; i < plantListArray_1.plantList.length; i++) {
        _loop_2(i);
    }
    // Clear existing content in vaxterPageDiv before appending
    vaxterPageDiv.innerHTML = "";
    vaxterPageDiv.appendChild(plantContainerParent);
}
document.addEventListener("DOMContentLoaded", function () {
    createHtmlForVaxterPage();
});
//Rendering the class Skötselråd items in html
function createHtmlForSkotselrad() {
    var skotselradDiv = document.getElementById("skotselCardContainers");
    for (var i = 0; i < skotselradArray_ts_1.skotselList.length; i++) {
        var skotsel = skotselradArray_ts_1.skotselList[i];
        var skotselDiv = document.createElement("div");
        skotselDiv.classList.add("skotselcardDiv");
        var skotselImg = document.createElement("img");
        skotselImg.src = skotsel.image;
        skotselImg.classList.add("skotselcardImg");
        var skotselHead = document.createElement("h2");
        skotselHead.innerHTML = skotsel.header;
        var descriptionElement = document.createElement("p");
        descriptionElement.innerHTML = skotsel.description;
        skotselDiv.appendChild(skotselImg);
        skotselDiv.appendChild(skotselHead);
        skotselDiv.appendChild(descriptionElement);
        skotselradDiv === null || skotselradDiv === void 0 ? void 0 : skotselradDiv.appendChild(skotselDiv);
    }
}
createHtmlForSkotselrad();
// Function for searchbar
searchbarFunctionality();
function searchbarFunctionality() {
    document.addEventListener("DOMContentLoaded", function () {
        var _a, _b;
        // Function to make suggestions clickable
        function createSuggestionItem(plant) {
            var listItem = document.createElement("li");
            listItem.classList.add("suggestion-item");
            var contentContainer = document.createElement("div");
            contentContainer.classList.add("suggestion-content-container");
            var imgItem = document.createElement("img");
            imgItem.src = plant.image;
            imgItem.alt = plant.plantName;
            imgItem.classList.add("suggestion-image");
            var plantName = document.createElement("span");
            plantName.textContent = plant.plantName;
            plantName.classList.add("suggestion-text");
            listItem.appendChild(contentContainer);
            contentContainer.appendChild(plantName);
            contentContainer.appendChild(imgItem);
            listItem.addEventListener("click", function () {
                if (plant.plantId !== undefined) {
                    // Navigate to productPage.html if plantId is available
                    window.location.replace("/productPage.html?plantId=".concat(plant.plantId));
                }
                else {
                    // Fallback to default behavior for other pages
                    window.location.replace("/productPage.html?plantIndex=".concat(plantListArray_1.plantList.indexOf(plant)));
                }
                window.sessionStorage.setItem("selectedPlant", JSON.stringify(plant));
            });
            return listItem;
        }
        function renderPlants(plants) {
            var plantListElement = document.getElementById("plantList");
            if (plantListElement) {
                plantListElement.innerHTML = "";
                if (plants) {
                    plants.forEach(function (plant) {
                        var listItem = createSuggestionItem(plant);
                        plantListElement.appendChild(listItem);
                        plantListElement.appendChild(listItem);
                    });
                }
            }
        }
        // Search logic
        function handleSearch() {
            var searchInput = document.querySelector(".inputSearchbar");
            var searchSuggestions = document.getElementById("plantList");
            if (searchInput && searchSuggestions) {
                var searchTerm_1 = searchInput.value.toLowerCase();
                if (searchTerm_1.trim() === "") {
                    searchSuggestions.style.display = "none";
                    return;
                }
                var filteredPlants = plantListArray_1.plantList.filter(function (plant) {
                    return plant.plantName.toLowerCase().includes(searchTerm_1);
                });
                renderPlants(filteredPlants);
                if (filteredPlants.length > 0) {
                    searchSuggestions.style.display = "block";
                }
                else {
                    searchSuggestions.style.display = "none";
                }
            }
        }
        document.addEventListener("click", function (event) {
            var searchInput = document.querySelector(".inputSearchbar");
            var searchSuggestions = document.getElementById("plantList");
            if (searchInput && searchSuggestions) {
                if (!searchInput.contains(event.target) &&
                    !searchSuggestions.contains(event.target)) {
                    searchSuggestions.style.display = "none";
                }
            }
        });
        (_a = document.querySelector(".inputSearchbar")) === null || _a === void 0 ? void 0 : _a.addEventListener("focus", function () {
            var searchSuggestions = document.getElementById("plantList");
            if (searchSuggestions) {
                searchSuggestions.style.display = "none";
            }
        });
        (_b = document
            .querySelector(".inputSearchbar")) === null || _b === void 0 ? void 0 : _b.addEventListener("input", handleSearch);
        renderPlants(plantListArray_1.plantList);
    });
}
// Extracting ID's from html 
var addButton = document.getElementById("increment");
var removeButton = document.getElementById("decrement");
var valueOfPlant = document.getElementById("valueOfPlant");
var addToCartButton = document.getElementById("addToCart");
var productPlantImg = document.getElementById("productPlantImg");
var plantNumber = 1;
// Increase or decrease quantity in product page "add to cart button"
if (valueOfPlant) {
    addButton.addEventListener("click", function () {
        plantNumber += 1;
        valueOfPlant.innerHTML = plantNumber.toString();
    });
    removeButton.addEventListener("click", function () {
        if (plantNumber > 1) {
            plantNumber -= 1;
            valueOfPlant.innerHTML = plantNumber.toString();
        }
        else {
            return false;
        }
    });
}
else {
    console.log("Error: valueOfPlant element not found.");
}
// Show information in the product page
var selectedPlant = JSON.parse((_b = sessionStorage.getItem("selectedPlant")) !== null && _b !== void 0 ? _b : "{}");
if (selectedPlant) {
    clickedPlantInformation(selectedPlant);
}
else {
    console.log("selectedPlant is null or not found in sessionStorage");
}
function clickedPlantInformation(selectedPlant) {
    if (!selectedPlant) {
        console.error("selectedPlant is null or undefined");
        return;
    }
    var plantName = document.getElementById("plantName");
    var plantDescription = document.getElementById("plantDescription");
    var plantCareSunlight = document.getElementById("plantCareSunlight");
    var plantSpecifications = document.getElementById("plantSpecifications");
    var plantCareSpecifications = document.getElementById("plantCareSpecifications");
    var priceOfPlant = document.getElementById("priceOfPlant");
    var nameInLatin = document.getElementById("nameInLatin");
    if (!plantName || !plantDescription || !plantCareSunlight || !plantSpecifications || !plantCareSpecifications || !priceOfPlant || !nameInLatin) {
        console.error("One or more elements not found in the DOM");
        return;
    }
    plantName.innerHTML = selectedPlant.plantName;
    productPlantImg.src = selectedPlant.image;
    plantDescription.innerHTML = selectedPlant.productInfo;
    plantCareSunlight.innerHTML = selectedPlant.needOfSunlight;
    plantCareSpecifications.innerHTML = selectedPlant.plantCareSpecifications;
    plantSpecifications.innerHTML = selectedPlant.plantSpecifications;
    priceOfPlant.innerHTML = selectedPlant.price + "kr inkl. moms";
    nameInLatin.innerHTML = selectedPlant.nameInLatin;
}
var cartArray = JSON.parse((_c = localStorage.getItem("storedProducts")) !== null && _c !== void 0 ? _c : "[]");
document.addEventListener("DOMContentLoaded", function () {
    addToCartButton.addEventListener("click", function () {
        if (selectedPlant) {
            var existingPlant = cartArray.find(function (plant) { return plant.plantId === selectedPlant.plantId; });
            if (existingPlant) {
                existingPlant.quantity = plantNumber;
            }
            else {
                selectedPlant.quantity = plantNumber;
                cartArray.push(selectedPlant);
            }
            updateShoppingCart();
            htmlForCartArray();
        }
    });
});
// Create HTML for cart
function htmlForCartArray() {
    var cartItems = document.getElementById("cartItems");
    var totalAmountElement = document.getElementById("totalAmount");
    cartItems.innerHTML = "";
    var totalAmount = 0;
    var _loop_3 = function (i) {
        var productContent = document.createElement("div");
        var itemContent = document.createElement("div");
        var imageNameContainer = document.createElement("div");
        var quantityPriceContainer = document.createElement("div");
        var quantityButtonsContainer = document.createElement("div");
        var itemImage = document.createElement("img");
        var itemName = document.createElement("p");
        var itemQuantity = document.createElement("span");
        var itemPrice = document.createElement("div");
        var incrementButton = document.createElement("button");
        var decrementButton = document.createElement("button");
        productContent.setAttribute("id", "productContent");
        itemContent.classList.add("itemContent");
        itemContent.setAttribute("id", "itemContent");
        itemName.setAttribute("id", "itemName");
        itemName.classList.add("itemName");
        itemQuantity.setAttribute("id", "itemQuantity");
        itemQuantity.classList.add("itemQuantity");
        itemPrice.setAttribute("id", "itemPrice");
        itemPrice.classList.add("itemPrice");
        imageNameContainer.classList.add("imageNameContainer");
        quantityPriceContainer.classList.add("quantityPriceContainer");
        quantityButtonsContainer.classList.add("quantityButtonsContainer");
        incrementButton.classList.add("incrementButton");
        decrementButton.classList.add("decrementButton");
        itemImage.src = cartArray[i].image;
        itemImage.alt = cartArray[i].plantName;
        itemImage.classList.add("cart-plant-image");
        itemName.innerText = cartArray[i].plantName;
        var quantity = cartArray[i].quantity || 1;
        itemQuantity.innerText = "Antal: ".concat(quantity);
        var price = cartArray[i].price * quantity;
        itemPrice.innerText = "".concat(price, " kr");
        totalAmount += price;
        incrementButton.innerText = "+";
        decrementButton.innerText = "-";
        incrementButton.addEventListener("click", function () {
            cartArray[i].quantity = (cartArray[i].quantity || 1) + 1;
            updateShoppingCart();
            htmlForCartArray();
        });
        decrementButton.addEventListener("click", function () {
            if (cartArray[i].quantity && cartArray[i].quantity > 1) {
                cartArray[i].quantity -= 1;
            }
            else {
                cartArray.splice(i, 1);
            }
            updateShoppingCart();
            htmlForCartArray();
        });
        imageNameContainer.appendChild(itemImage);
        imageNameContainer.appendChild(itemName);
        quantityButtonsContainer.appendChild(incrementButton);
        quantityButtonsContainer.appendChild(decrementButton);
        quantityPriceContainer.appendChild(itemQuantity);
        quantityPriceContainer.appendChild(itemPrice);
        itemContent.appendChild(imageNameContainer);
        itemContent.appendChild(quantityPriceContainer);
        itemContent.appendChild(quantityButtonsContainer);
        productContent.appendChild(itemContent);
        cartItems === null || cartItems === void 0 ? void 0 : cartItems.appendChild(productContent);
    };
    for (var i = 0; i < cartArray.length; i++) {
        _loop_3(i);
    }
    totalAmountElement.innerText = "Summa: ".concat(totalAmount, " kr");
}
exports.htmlForCartArray = htmlForCartArray;
function updateShoppingCart() {
    localStorage.setItem("storedProducts", JSON.stringify(cartArray));
}
// Initial call to update the cart when the page loads
updateShoppingCart();
htmlForCartArray();
//Button to checkout page
var checkoutButtons = document.getElementsByClassName("checkoutBtn");
for (var _i = 0, checkoutButtons_1 = checkoutButtons; _i < checkoutButtons_1.length; _i++) {
    var button = checkoutButtons_1[_i];
    button.addEventListener("click", function () {
        window.location.href = "checkoutPage.html";
    });
}
