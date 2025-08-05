let pokemon = pokemonArray[2];
console.log(pokemon);


/** @TODO - Update the page data using a single pokemon */
/**  
 *      1. Update the #poke_name heading with the name and dex number
 *      2. Update the #poke_img with the pokemon's image URL
 *      3. Update the type heading with the pokemon's type(s)
 *      4. Change the width of each stat bar using the 
 *          pokemon's base stats
 */
let nameHeading = document.querySelector("#poke_name");
nameHeading.innerHTML = `#${pokemon.id} - ${pokemon.name}`;

let pokeImg = document.querySelector("#poke_img");
pokeImg.src = pokemon.image[0];

let types = document.querySelector("#poke_types");
if (pokemon.type[1] == "none") {
    types.innerHTML = `${pokemon.type[0]} - Type`;
} else {
    types.innerHTML = `${pokemon.type[0]}/${pokemon.type[1]} - Type`;
}

let statDivs = document.querySelectorAll("#poke_stats div");
for (let i = 0; i < statDivs.length; i++) {
    let stat = statDivs[i].id;
    statDivs[i].style["width"] = `${pokemon.base[stat] * 4}px`;
}


/** @TODO - Assign #random_btn to pick a random starter on click */
/**         and update the page data accordingly
 * 
 *      1. Make a new function for the code from the previous task
 *      2. Generate a random index for the pokemon array
 *      3. Replace references to the specific pokemon with references
 *          to the randomly-chosen pokemon
 *      4. Add an eventListener to #random_btn with our new function!
 */
function getRandomPokemon() {
    let pokemon = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
    let nameHeading = document.querySelector("#poke_name");
    nameHeading.innerHTML = `#${pokemon.id} - ${pokemon.name}`;

    let pokeImg = document.querySelector("#poke_img");
    pokeImg.src = pokemon.image[0];

    let types = document.querySelector("#poke_types");
    if (pokemon.type[1] == "none") {
        types.innerHTML = `${pokemon.type[0]} - Type`;
    } else {
        types.innerHTML = `${pokemon.type[0]}/${pokemon.type[1]} - Type`;
    }

    let statDivs = document.querySelectorAll("#poke_stats div");
    for (let i = 0; i < statDivs.length; i++) {
        let stat = statDivs[i].id;
        statDivs[i].style["width"] = `${pokemon.base[stat] * 4}px`;
    }
}

let randomBtn = document.querySelector("#random_btn");
randomBtn.addEventListener("click", getRandomPokemon);