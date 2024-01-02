import { plantList } from "./plantListArray";
import { Plant } from "./products";

// Function for Växter.html page
export function createHtmlForVaxterPage() {
    const vaxterPageDiv = document.getElementById("app") as HTMLDivElement;

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

    const productParent = document.getElementById("productParent") as HTMLDivElement;
    productParent.appendChild(plantContainerParent);

    vaxterPageDiv.appendChild(productParent);
}

// For Loop for Landing page
export function createHtmlForLandingpage() {
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
      productpageDiv?.appendChild(plantItemDiv);
            // When clicking on the products in landing page this will open up
            plantItemDiv.addEventListener("click", () =>{
              window.sessionStorage.setItem("selectedPlant", JSON.stringify(plant));


              // addProduct(plant);
              
              
              window.location.replace("/productPage.html");
            })
            // Append the wrapper div to the main container
    }
}