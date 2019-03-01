
window.onload = function () {
  showPokemons(getPokemons())
  showModal('.pokemon-unit')
}

function getPokemons() {
  return POKEMON["pokemon"];
}

function showPokemons(getPoke) {
  let pokemonDiv = document.getElementById("list-poke");
  pokemonDiv.innerHTML = `
    ${getPoke.map((pokelist) => `
      <div data-num=${pokelist["num"]} class="pokemon-unit">
        <img data-num=${pokelist["num"]} src="${pokelist["img"]}" class="poke-img"/>
        <div data-num=${pokelist["num"]} class= "poke-namenum">
          <p data-num=${pokelist["num"]} class="poke-num"> Nº ${pokelist["num"]}</p>
          <h3 data-num=${pokelist["num"]} class="poke-name">${pokelist["name"]}</h3>
        </div> 
      </div>
`).join("")}
`
}

function filterPoke(btnId) {
  POKEMON["pokemon"].filter((elem) => {
    elem.type.filter((ele) => {
      if (btnId === ele) {
        let pokemonDivFil = document.getElementById("list-poketwo");
        pokemonDivFil.innerHTML +=
          `
    <div} class="pokemon-unit">
      <img data-num=${elem["num"]} src="${elem.img}" class="poke-img"/>
      <div data-num=${elem["num"]} class= "poke-namenum">
        <p data-num=${elem["num"]} class="poke-num" > Nº ${elem["num"]}</p>
        <h3 data-num=${elem["num"]} class="poke-name">${elem["name"]}</h3>
      </div> 
    </div>
`
      }
    })
  })
}

let btnType = document.getElementsByClassName('btn-types')

for (button of btnType) {
  let btnId = button.id;

  button.addEventListener('click', () => {
    document.getElementById("list-poke").innerHTML = "";
    filterPoke(btnId);
  });
}
function showModal(classPokes) {
  let pokesClass = document.querySelectorAll(classPokes)
  for (let oneClass of pokesClass) {
    oneClass.addEventListener('click', function (event) {
      let dataNum = event.target.getAttribute("data-num")
      
    }
    )
  }
}
