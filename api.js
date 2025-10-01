// Data fetch from the API


export async function getPokemon(pokemonName) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data; 
  } catch (error) {
    console.error("Fetch error", error);
  }
}

export async function saveFavorites(pokemon) {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            name: pokemon.name,
            types: pokemon.types.map(t => t.type.name),
            abilities: pokemon.abilities.map(a => a.ability.name),
        }),
    });
    
    const data = await response.json();
    console.log('Saved favorites:', data);
    alert(`${pokemon.name} was saved to favorites!`);
} catch (error) {
        console.error("Error saving favorites:", error);

     }
}
