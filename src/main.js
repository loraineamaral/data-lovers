window.onload = function () {
  showPokemons(getPokemons());

};

function clearScreen(){
document.getElementById("list-poke").innerHTML = ""
}

function getPokemons() {
  return POKEMON["pokemon"];
}

// console.log("Lista de Pokemons: ", getPokemons())

function showPokemons(getPoke) {
  let pokemonDiv = document.getElementById("list-poke");
  pokemonDiv.innerHTML = `
    ${getPoke.map((pokelist) => `
      <div class="pokemon-unit">
        <img src="${pokelist["img"]}" class="poke-img"/>
        <div class= "poke-namenum">
        <div class="poke-shadow"></div>
          <p class="poke-num"> Nº ${pokelist["num"]}</p>
          <h3 class="poke-name">${pokelist["name"]}</h3>
        </div> 
      </div>
`).join("")}
`
}

let btnType = document.getElementsByClassName("btn-types")

for (button of btnType) {
  let btnId = button.id;
  // console.log("BOTAO AIDI", btnId)

  button.addEventListener('click', () => {
    document.getElementById("list-poke").innerHTML = "";
    filterPoke(btnId);
  });
}

function filterPoke(btnId) {

  for (let i in POKEMON["pokemon"]) {
    let pokeObj = POKEMON["pokemon"][i];
    let types = POKEMON["pokemon"][i]["type"];

    for (j of types) {
      if (btnId === j) {
        // console.log("JOTA", j)
        // console.log("botaoIDDD", btnId)


        let pokemonDivFil = document.getElementById("list-poke");
        pokemonDivFil.innerHTML += `
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

let selectOpt = document.querySelector("select");
selectOpt.addEventListener("change", () => 
sortPoke(selectOpt.selectedIndex)); 

function sortPoke(ka) {
  let namePoke = [];

  for (i in POKEMON["pokemon"]) {
    namePoke.push(POKEMON["pokemon"][i]["name"]);
   
    if (ka === 1) {
      namePoke.sort();
    }else if (ka === 2) {
      console.log("passounoelseif")
      namePoke.sort();
      namePoke.reverse();
    }
  }
clearScreen();
  for (let i of namePoke){
    // console.log("NAMEP", i)
    for (let j in POKEMON["pokemon"]) {
      let nameData = POKEMON["pokemon"][j]["name"]
      // console.log(nameData);
      let pokeObj = POKEMON["pokemon"][j];
      // console.log(pokeObj);
      if (i === nameData){
        console.log("NAMEP", i, nameData)

         let pokemonDivFil = document.getElementById("list-poke");
        pokemonDivFil.innerHTML += `
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
