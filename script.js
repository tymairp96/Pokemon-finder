import { getPokemon } from "./api.js";
import { renderPokemonCard } from "./ui.js";

const input = document.getElementById("pokemonInput");
const searchBtn = document.getElementById("searchBtn");
const pokemonCard = document.getElementById("pokemonCard");

searchBtn.addEventListener("click", async () => {
  const pokemonName = input.value.toLowerCase();
  const data = await getPokemon(pokemonName);
  if (data) {
    renderPokemonCard(data, pokemonCard);
  }
});
