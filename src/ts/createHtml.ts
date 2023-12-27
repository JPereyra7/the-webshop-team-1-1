import { plantList } from "./plantListArray";

export function createHtmlForProductPage(){
    const plantName = document.getElementById("plantName") as HTMLHeadElement;
    const productPlantImg = document.getElementById("productPlantImg") as HTMLImageElement;
    
        for(let i=0; i<plantList.length; i++){  
            plantName.innerHTML = plantList[i].plantName;
            productPlantImg.src = plantList[i].image;
                
        
               
                
        }
    }
