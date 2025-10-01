
export function renderPokemonCard(data, container) {
    container.innerHTML = ""; 
    
    const name = document.createElement("h2");
    name.textContent = data.name;
    container.appendChild(name);
    
    const img = document.createElement("img");
    img.src = data.sprites.front_default;
    img.alt = data.name;
    container.appendChild(img);
    
    const type = document.createElement("p");
    type.textContent = "Type: " + data.types.map(t => t.type.name).join(", ");
    container.appendChild(type);
    
    const abilities = document.createElement("p");
    abilities.textContent =
    "Abilities: " + data.abilities.map(a => a.ability.name).join(", ");
    container.appendChild(abilities);
    
    
  
    const favBtn = document.createElement("button");
    favBtn.textContent = "favorite";
    container.appendChild(favBtn);
    favBtn.addEventListener("click", async () => {
        toggleFavorites(data);
        await saveFavorites(data); 
    });
}
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

import { saveFavorites } from "./api.js";


 export function toggleFavorites(pokemon) {
    const index = favorites.findIndex(fav => fav.name === pokemon.name);


    if (index >= 0 ) {
        favorites.splice(index, 1);
        alert(`${pokemon.name} removed from favorites`);
    } else {
        favorites.push(pokemon);
        alert(`${pokemon.name} added to favorites`);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
 }

 export function renderFavorites(container) {
    container.innerHTML ="";
    favorites.forEach(pokemon => {
        const item = document.createElement("p");
        item.textContent = pokemon.name;
        container.appendChild(item);
    });
 }