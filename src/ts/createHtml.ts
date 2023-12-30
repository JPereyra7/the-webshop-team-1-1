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
            listItem.textContent = plant.plantName;

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
