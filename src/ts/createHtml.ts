import { plantList } from "./plantListArray";
import { Plant } from "./products";
import { skotselList } from "./skotselradArray.ts";
import { Skotsel } from "./skotselrad.ts";

//Function for Skötselråd.html
export function createHtmlForSkotselrad() {
    const skotselradDiv = document.getElementById('skotselCardContainers') as HTMLDivElement;

    for (let i = 0; i < skotselList.length; i++) {
        const skotsel = skotselList[i];

        const skotselDiv = document.createElement('div');
        skotselDiv.classList.add("skotselcardDiv");

        const skotselImg = document.createElement('img');
        skotselImg.src = skotsel.image;
        skotselImg.classList.add("skotselcardImg");

        const skotselHead = document.createElement('h2');
        skotselHead.innerHTML = skotsel.header;

        const descriptionElement = document.createElement('p');
        descriptionElement.innerHTML = skotsel.description;


        skotselDiv.appendChild(skotselImg);
        skotselDiv.appendChild(skotselHead);
        skotselDiv.appendChild(descriptionElement);

        skotselradDiv.appendChild(skotselDiv);
    }
}

// Function for Växter.html page
export function createHtmlForVaxterPage() {
    const vaxterPageDiv = document.getElementById("productParent") as HTMLDivElement;

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