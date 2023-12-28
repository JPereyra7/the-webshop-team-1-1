import { plantList } from "./plantListArray";

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
