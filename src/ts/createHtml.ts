import { plantList } from "./plantListArray";

export function createHtmlForLandingpage() {
    const productpageDiv = document.getElementById("showPlant") as HTMLDivElement;
  
    for (let i = 0; i < plantList.length; i++) {
      const plant = plantList[i];
  
      const plantItemDiv = document.createElement("div");
      plantItemDiv.classList.add("plant");
  
      const imageElement = document.createElement("img");
      imageElement.src = plant.image;
      imageElement.alt = plant.plantName;
  
      // Create a heading element for the plant name
      const nameElement = document.createElement("h1");
      nameElement.innerHTML = plant.plantName;

      const priceElement = document.createElement("p");
      priceElement.innerHTML = `${plant.price} kr`;
  
      plantItemDiv.appendChild(imageElement);
      plantItemDiv.appendChild(nameElement);
      plantItemDiv.appendChild(priceElement);

      // When clicking on the products in landing page this will open up
      plantItemDiv.addEventListener("click", () =>{
        window.location.replace("https://medieinstitutet.se/utbildningar/front-end-developer/");
      })

      // Append the wrapper div to the main container
      productpageDiv.appendChild(plantItemDiv);
    }
  }
  
export function createHtmlForProductPage(){
    const plantName = document.getElementById("plantName") as HTMLHeadElement;
    const productPlantImg = document.getElementById("productPlantImg") as HTMLImageElement;
    const plantDescription = document.getElementById("plantDescription") as HTMLParagraphElement;
    const plantCareWatering = document.getElementById("plantCareWatering")as HTMLParagraphElement;
    const plantCareSunlight = document.getElementById("plantCareSunlight")as HTMLParagraphElement;
    const plantSpecifications = document.getElementById("plantSpecifications") as HTMLDivElement;
    const plantCareSpecifications = document.getElementById("plantCareSpecifications") as HTMLDivElement;
        for(let i=0; i<plantList.length; i++){  
            plantName.innerHTML = plantList[i].plantName;
            plantName.className = "plantName";

            productPlantImg.src = plantList[i].image;
            productPlantImg.className = "productPlantImg";

            plantDescription.innerHTML = plantList[i].productInfo;
            plantDescription.className = "plantDescription";

            plantCareSunlight.innerHTML = plantList[i].needOfSunlight;
            plantCareSunlight.className = "plantCareSunlight";

            plantCareWatering.innerHTML = plantList[i].watering;
            plantCareWatering.className = "plantCareWatering";

            plantCareSpecifications.innerHTML = plantList[i].plantCareSpecifications;
            plantCareSpecifications.className = "plantCareSpecifications";

            plantSpecifications.innerHTML = plantList[i].plantSpecifications;
            plantSpecifications.className = "plantSpecifications";


        }
    }
