import "./../scss/style.scss";
import "./../scss/product.scss";
import "./../scss/vaxter.scss";
import "./../scss/cart.scss";
import "./../scss/hamburger.scss";
import "./../scss/skotselrad.scss";

import { plantList } from "./plantListArray";
import { skotselList } from "./skotselradArray.ts";
import { htmlForCartArray } from "./productPage.ts";

// document.addEventListener("DOMContentLoaded", () => {
//     createHtmlForVaxterPage();
// });

// createHtmlForLandingpage();
// searchbarFunctionality();

document.addEventListener("DOMContentLoaded", () => {
    createHtmlForSkotselrad();
});

document.addEventListener("DOMContentLoaded", () => {
    const contactButton = document.getElementById(
        "contactButton"
        ) as HTMLButtonElement;
        
        contactButton.addEventListener("click", function () {
            window.location.href = "kontaktaOss.html";
        });
    });
    
    
//Var försiktig med allt ovanför detta. Rörs dem störs arbetet!
//---------------------------------------------------------------
//---------------------------------------------------------------

//nav - hamburgaremeny - varukorg
//----------------------------------------------------------------
//hamburger
const menuToggle = document.getElementById("menuToggle") as HTMLElement;
const navigationMenu = document.querySelector(
  ".navigation-menu"
) as HTMLElement;
const closeButton = document.querySelector(
  ".close-button"
) as HTMLButtonElement;
menuToggle.addEventListener("click", () => {
  setTimeout(() => {
    navigationMenu.classList.toggle("show");
  }, 100);
});

closeButton.addEventListener("click", () => {
  navigationMenu.classList.remove("show");
});

//varukorg
const cartButton = document.getElementById("cartBtn");
const cartContainer = document.getElementById("cart") as HTMLElement;
cartButton?.addEventListener("click", () => {
  cartContainer.classList.toggle("show");
});

document.getElementById("btnClose")?.addEventListener("click", () => {
  cartContainer.classList.remove("show");
});

//rendering av produkter till startsidan
//----------------------------------------------------------------

// For Loop for Landing page
function createHtmlForLandingpage() {
  const productpageDiv = document.getElementById("showPlant") as HTMLDivElement;

  for (let i = 0; i < 4; i++) {
    const plant = plantList[i];

    const plantItemDiv = document.createElement("div");
    plantItemDiv.classList.add("plant");

    const imageElement = document.createElement("img");
    imageElement.src = plant.image;
    imageElement.alt = plant.plantName;

    const nameElement = document.createElement("h1");
    nameElement.innerHTML = plant.plantName;

    const priceElement = document.createElement("p");
    priceElement.innerHTML = `${plant.price} kr`;

    plantItemDiv.appendChild(imageElement);
    plantItemDiv.appendChild(nameElement);
    plantItemDiv.appendChild(priceElement);

    // When clicking on the products in the landing page, open the product page
    plantItemDiv.addEventListener("click", () => {
      window.sessionStorage.setItem("selectedPlant", JSON.stringify(plant));
      window.location.replace("/productPage.html");
    });

    if (productpageDiv) {
      // Append the wrapper div to the main container within the <main> section
      productpageDiv.appendChild(plantItemDiv);
    }
  }
}
createHtmlForLandingpage();

//rendering av produkter till växter sidan
//-----------------------------------------------------------------
// Function for Växter.html page
function createHtmlForVaxterPage() {
  const vaxterPageDiv = document.getElementById(
    "productParent"
  ) as HTMLDivElement;

  // Parent container for all plant containers
  const plantContainerParent = document.createElement("div");
  plantContainerParent.classList.add("plantContainerParent");

  for (let i = 0; i < plantList.length; i++) {
    const plant = plantList[i];

    const plantItemDiv = document.createElement("div");
    plantItemDiv.classList.add("plantContainer");

    const directionContainer = document.createElement("div");
    directionContainer.classList.add("directionContainer");

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("itemContainer");

    const imageElement = document.createElement("img");
    imageElement.src = plant.image;
    imageElement.alt = plant.plantName;

    const nameElement = document.createElement("h1");
    nameElement.innerHTML = plant.plantName;

    const priceElement = document.createElement("p");
    priceElement.innerHTML = `${plant.price} kr`;

    itemContainer.appendChild(imageElement);
    itemContainer.appendChild(nameElement);
    itemContainer.appendChild(priceElement);

    directionContainer.appendChild(itemContainer);

    plantItemDiv.appendChild(directionContainer);

    plantItemDiv.addEventListener("click", () => {
      window.location.replace(`/productPage.html?plantIndex=${i}`);
      window.sessionStorage.setItem("selectedPlant", JSON.stringify(plant));
    });

    plantContainerParent.appendChild(plantItemDiv);
  }

  const productParent = document.getElementById(
    "productParent"
  ) as HTMLDivElement;
  productParent.appendChild(plantContainerParent);

  vaxterPageDiv.appendChild(productParent);
}
createHtmlForVaxterPage();

// Create HTML for cart
//------------------------------------------------------------------
htmlForCartArray(); //---------------------KAOS!!!!!!!!!!!! ----------------

//rendering av skötselråd ts till skötselråd sidan
//-----------------------------------------------------------------
function createHtmlForSkotselrad() {
  const skotselradDiv = document.getElementById(
    "skotselCardContainers"
  ) as HTMLDivElement;

  for (let i = 0; i < skotselList.length; i++) {
    const skotsel = skotselList[i];

    const skotselDiv = document.createElement("div");
    skotselDiv.classList.add("skotselcardDiv");

    const skotselImg = document.createElement("img");
    skotselImg.src = skotsel.image;
    skotselImg.classList.add("skotselcardImg");

    const skotselHead = document.createElement("h2");
    skotselHead.innerHTML = skotsel.header;

    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = skotsel.description;

    skotselDiv.appendChild(skotselImg);
    skotselDiv.appendChild(skotselHead);
    skotselDiv.appendChild(descriptionElement);

    skotselradDiv.appendChild(skotselDiv);
  }
}

//Search function
//-----------------------------------------------------------
// Function for searchbar
// searchbarFunctionality();
// function searchbarFunctionality() {
//   document.addEventListener("DOMContentLoaded", () => {
//     // Function to make suggestions clickable
//     function createSuggestionItem(plant: Plant): HTMLLIElement {
//       const listItem = document.createElement("li");
//       listItem.classList.add("suggestion-item"); // Add a class for styling

//       const contentContainer = document.createElement("div");
//       contentContainer.classList.add("suggestion-content-container");

//       const imgItem = document.createElement("img");
//       imgItem.src = plant.image;
//       imgItem.alt = plant.plantName;
//       imgItem.classList.add("suggestion-image");

//       const plantName = document.createElement("span");
//       plantName.textContent = plant.plantName;
//       plantName.classList.add("suggestion-text");

//       listItem.appendChild(contentContainer);
//       contentContainer.appendChild(plantName); // Swap the order
//       contentContainer.appendChild(imgItem); // Swap the order

//       listItem.addEventListener("click", () => {
//         if (plant.plantId !== undefined) {
//           // Navigate to productPage.html if plantId is available
//           window.location.replace(`/productPage.html?plantId=${plant.plantId}`);
//         } else {
//           // Fallback to default behavior for other pages
//           window.location.replace(
//             `/productPage.html?plantIndex=${plantList.indexOf(plant)}`
//           );
//         }
//         window.sessionStorage.setItem("selectedPlant", JSON.stringify(plant));
//       });
//       return listItem;
//     }

//     function renderPlants(plants?: Plant[]) {
//       const plantListElement = document.getElementById("plantList");

//       if (plantListElement) {
//         plantListElement.innerHTML = "";

//         if (plants) {
//           plants.forEach((plant) => {
//             const listItem = createSuggestionItem(plant);
//             plantListElement.appendChild(listItem);
//             plantListElement.appendChild(listItem);
//           });
//         }
//       }
//     }

//     // Search logic
//     function handleSearch() {
//       const searchInput = document.querySelector(
//         ".inputSearchbar"
//       ) as HTMLInputElement;
//       const searchSuggestions = document.getElementById(
//         "plantList"
//       ) as HTMLUListElement;

//       if (searchInput && searchSuggestions) {
//         const searchTerm = searchInput.value.toLowerCase();

//         if (searchTerm.trim() === "") {
//           searchSuggestions.style.display = "none";
//           return;
//         }

//         const filteredPlants = plantList.filter((plant) =>
//           plant.plantName.toLowerCase().includes(searchTerm)
//         );

//         renderPlants(filteredPlants);

//         if (filteredPlants.length > 0) {
//           searchSuggestions.style.display = "block";
//         } else {
//           searchSuggestions.style.display = "none";
//         }
//       }
//     }

//     document.addEventListener("click", (event) => {
//       const searchInput = document.querySelector(
//         ".inputSearchbar"
//       ) as HTMLInputElement;
//       const searchSuggestions = document.getElementById(
//         "plantList"
//       ) as HTMLUListElement;

//       if (searchInput && searchSuggestions) {
//         if (
//           !searchInput.contains(event.target as Node) &&
//           !searchSuggestions.contains(event.target as Node)
//         ) {
//           searchSuggestions.style.display = "none";
//         }
//       }
//     });

//     document.querySelector(".inputSearchbar")?.addEventListener("focus", () => {
//       const searchSuggestions = document.getElementById(
//         "plantList"
//       ) as HTMLUListElement;
//       if (searchSuggestions) {
//         searchSuggestions.style.display = "none";
//       }
//     });

//     document
//       .querySelector(".inputSearchbar")
//       ?.addEventListener("input", handleSearch);

//     renderPlants(plantList);
//   });
// }

// //Button to checkout page
// const checkoutButtons = document.getElementsByClassName("checkoutBtn");

// for (const button of checkoutButtons) {
//   button.addEventListener("click", function () {
//     window.location.href = "checkoutPage.html";
//   });
// }
