const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_img');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');



const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    if (APIResponse == 200){
        const data = await APIResponse.json();  
        console.log(data)
        return data;
    }
    
}
console.log(fetchPokemon)

const RenderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon);

    if (data){
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    } else{
        pokemonName.innerHTML = `Not Founded ☹`;
        pokemonNumber.innerHTML = ``;
    }
}
form.addEventListener("submit", (event) => {

    event.preventDefault();
    RenderPokemon(input.value());
    input.value ='';

})


