const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_img');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let buscaPokemon = 1;

const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIResponse.status == 200) {
        const data = await APIResponse.json();
        console.log(data)
        return data;
    }
}
console.log(fetchPokemon)

const RenderPokemon = async (pokemon) => {

    pokemonName.innerHTML = `Loading...`;
    pokemonNumber.innerHTML = ``;

    const data = await fetchPokemon(pokemon);
if(data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    buscaPokemon = data.id;
    input.value = "";
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
} else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = `Not Founded :(`;
    pokemonNumber.innerHTML = "";
}
}
form.addEventListener("submit", (event) => {

    event.preventDefault();
    RenderPokemon(input.value.toLowerCase());
    input.value ='';

});


buttonNext.addEventListener("click", ()=>{
    buscaPokemon += 1;
        RenderPokemon(buscaPokemon);
});
buttonPrev.addEventListener("click", ()=>{
    if(buscaPokemon >1) {
        buscaPokemon -= 1;
        RenderPokemon(buscaPokemon);
    }
});

RenderPokemon(buscaPokemon);

