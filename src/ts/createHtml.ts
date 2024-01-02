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

// Function for searchbar
export function searchbarFunctionality() {
    document.addEventListener("DOMContentLoaded", () => {
        // Function to make suggestions clickable
        function createSuggestionItem(plant: Plant): HTMLLIElement {
            const listItem = document.createElement('li');
            listItem.classList.add('suggestion-item'); // Add a class for styling

            const contentContainer = document.createElement('div');
            contentContainer.classList.add('suggestion-content-container');

            const imgItem = document.createElement('img');
            imgItem.src = plant.image;
            imgItem.alt = plant.plantName;
            imgItem.classList.add('suggestion-image');

            const plantName = document.createElement('span');
            plantName.textContent = plant.plantName;
            plantName.classList.add('suggestion-text');

            listItem.appendChild(contentContainer);
            contentContainer.appendChild(plantName); // Swap the order
            contentContainer.appendChild(imgItem); // Swap the order

            listItem.addEventListener('click', () => {
                if (plant.plantId !== undefined) {
                    // Navigate to productPage.html if plantId is available
                    window.location.replace(`/productPage.html?plantId=${plant.plantId}`);
                } else {
                    // Fallback to default behavior for other pages
                    window.location.replace(`/productPage.html?plantIndex=${plantList.indexOf(plant)}`);
                }
                window.sessionStorage.setItem('selectedPlant', JSON.stringify(plant));
            });
            return listItem;
        }

        function renderPlants(plants?: Plant[]) {
            const plantListElement = document.getElementById('plantList');

            if (plantListElement) {
                plantListElement.innerHTML = "";

                if (plants) {
                    plants.forEach((plant) => {
                        const listItem = createSuggestionItem(plant);
                        plantListElement.appendChild(listItem);
                        plantListElement.appendChild(listItem);
                    });
                }
            }
        }

        // Search logic
        function handleSearch() {
            const searchInput = document.querySelector('.inputSearchbar') as HTMLInputElement;
            const searchSuggestions = document.getElementById('plantList') as HTMLUListElement;

            if (searchInput && searchSuggestions) {
                const searchTerm = searchInput.value.toLowerCase();

                if (searchTerm.trim() === '') {
                    searchSuggestions.style.display = 'none';
                    return;
                }

                const filteredPlants = plantList.filter((plant) =>
                    plant.plantName.toLowerCase().includes(searchTerm)
                );

                renderPlants(filteredPlants);

                if (filteredPlants.length > 0) {
                    searchSuggestions.style.display = 'block';
                } else {
                    searchSuggestions.style.display = 'none';
                }
            }
        }

        document.addEventListener('click', (event) => {
            const searchInput = document.querySelector('.inputSearchbar') as HTMLInputElement;
            const searchSuggestions = document.getElementById('plantList') as HTMLUListElement;

            if (searchInput && searchSuggestions) {
                if (!searchInput.contains(event.target as Node) && !searchSuggestions.contains(event.target as Node)) {
                    searchSuggestions.style.display = 'none';
                }
            }
        });

        document.querySelector('.inputSearchbar')?.addEventListener('focus', () => {
            const searchSuggestions = document.getElementById('plantList') as HTMLUListElement
            if (searchSuggestions) {
                searchSuggestions.style.display = 'none';
            }
        });

        document.querySelector('.inputSearchbar')?.addEventListener('input', handleSearch);

        renderPlants(plantList);
    });
}
