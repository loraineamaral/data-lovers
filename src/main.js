window.onload = function () {
  showPokemons();

};

function getPokemons() {
  return POKEMON["pokemon"];
}

// console.log("Lista de Pokemons: ", getPokemons())

function showPokemons() {
  let pokemonDiv = document.getElementById("list-poke");
  pokemonDiv.innerHTML = `
    ${getPokemons().map((pokelist) => `
      <div class="pokemon-unit">
        <img src="${pokelist["img"]}" class="poke-img"/>
        <div class= "poke-namenum">
          <p class="poke-num"> Nº ${pokelist["num"]}</p>
          <h3 class="poke-name">${pokelist["name"]}</h3>
        </div> 
      </div>
`).join("")}
`
}
