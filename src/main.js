window.onload = function () {
  showPokemons();

};

function getPokemons() {
  return POKEMON["pokemon"];
}

console.log("Lista de Pokemons: ", getPokemons())

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
 
  button.addEventListener('click', ()=>{
    document.getElementById("list-poke").innerHTML="";  
    filterPoke(btnId);
  } );
}

function filterPoke(btnId){
console.log(btnId)
POKEMON["pokemon"].filter((elem)=> {elem.type.filter((ele) => {

  
  if (btnId === ele){


let pokemonDivFil = document.getElementById("list-poketwo");
pokemonDivFil.innerHTML = 
   `
    <div class="pokemon-unit">
      <img src="${elem.img}" class="poke-img"/>
      <div class= "poke-namenum">
        <p class="poke-num"> Nº ${elem["num"]}</p>
        <h3 class="poke-name">${elem["name"]}</h3>
      </div> 
    </div>
`
}
  
})} )


}
