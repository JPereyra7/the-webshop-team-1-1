import { plantList } from "./plantListArray";

export function createHtmlForLandingpage() {
    const productpageDiv = document.getElementById("showPlant") as HTMLDivElement;
  
    for (let i = 0; i < plantList.length; i++) {
      const plant = plantList[i];
  
      // Create a wrapper div for each plant item
      const plantItemDiv = document.createElement("div");
      plantItemDiv.classList.add("plant");
  
      // Create an image element
      const imageElement = document.createElement("img");
      imageElement.src = plant.image;
      imageElement.alt = plant.plantName;
  
      // Create a heading element for the plant name
      const nameElement = document.createElement("h1");
      nameElement.innerHTML = plant.plantName;

      const priceElement = document.createElement("p");
      priceElement.innerHTML = `${plant.price} kr`;
  
      // Append image and name to the wrapper div
      plantItemDiv.appendChild(imageElement);
      plantItemDiv.appendChild(nameElement);
      plantItemDiv.appendChild(priceElement);
      // Append the wrapper div to the main container
      productpageDiv.appendChild(plantItemDiv);
    }
  }
  