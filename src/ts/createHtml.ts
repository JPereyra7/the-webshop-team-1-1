import { plantList } from "./plantListArray";

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
        });

        plantContainerParent.appendChild(plantItemDiv);
    }

    const productParent = document.getElementById("productParent") as HTMLDivElement;
    productParent.appendChild(plantContainerParent);

    vaxterPageDiv.appendChild(productParent);
}


  //For Loop for Landing page
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

        // When clicking on the products in the landing page, open the product page
        plantItemDiv.addEventListener("click", () => {
            window.location.replace("/productPage.html");
        });

        if (productpageDiv) {
            // Append the wrapper div to the main container within the <main> section
            productpageDiv.appendChild(plantItemDiv);
        }
    }
}
  
  //Function & Loop for product page
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

    //   const priceElement = document.createElement("p");
    //   priceElement.innerHTML = `${plant.price} kr`;
  
    //   plantItemDiv.appendChild(imageElement);
    //   plantItemDiv.appendChild(nameElement);
    //   plantItemDiv.appendChild(priceElement);
    //   productpageDiv?.appendChild(plantItemDiv);
    //         // When clicking on the products in landing page this will open up
    //         plantItemDiv.addEventListener("click", () =>{
    //           window.sessionStorage.setItem("selectedPlant", JSON.stringify(plant));
    //           window.location.replace("/productPage.html");
    //         })
    //         // Append the wrapper div to the main container
           

      
  