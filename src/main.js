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

let btnType = document.getElementsByClassName("btn-types")

for (button of btnType){
  let btnId = button.id;
  console.log("BOTAO AIDI", btnId)
 
  button.addEventListener('click', ()=>{
    document.getElementById("list-poke").innerHTML="";  
    filterPoke(btnId);
  } );
}

function filterPoke(btnId){
  
  for (let i in POKEMON["pokemon"]){
    let pokeObj = POKEMON["pokemon"][i];
    let types = POKEMON["pokemon"][i]["type"];

    for(j of types){
      if (btnId === j){
        console.log("JOTA", j)
        console.log("botaoIDDD", btnId)
       
      
let pokemonDivFil = document.getElementById("list-poke");
pokemonDivFil.innerHTML +=  `
    <div class="pokemon-unit">
      <img src="${pokeObj["img"]}" class="poke-img"/>
      <div class= "poke-namenum">
        <p class="poke-num"> Nº ${pokeObj["num"]}</p>
        <h3 class="poke-name">${pokeObj["name"]}</h3>
      </div> 
    </div>
`
      }
    }
  }
}  

