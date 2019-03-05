
window.onload = function () {
  showPokemons(getPokemons())
  showModal('.poke-img')
  showModal('.poke-namenum')
}

function getPokemons() {
  return POKEMON["pokemon"];
}

function showPokemons(getPoke) {
  let pokemonDiv = document.getElementById("list-poke");
  pokemonDiv.innerHTML =
    `
    ${getPoke.map((pokelist) =>
      `
      <div data-num=${pokelist.num} class="pokemon-unit">
        <img data-num=${pokelist.num} class="poke-img" src="${pokelist.num}"/>
        <div data-num=${pokelist.num} class= "poke-namenum">
          <p data-num=${pokelist.num} class="poke-num"> Nº ${pokelist.num}</p>
          <h3 data-num=${pokelist.num} class="poke-name">${pokelist.name}</h3>
        </div> 
      </div>
`).join("")}
`
}

function filterPoke(btnId) {
  POKEMON.pokemon.filter((elem) => {
    elem.type.filter((ele) => {
      if (btnId === ele) {
        let pokemonDivFil = document.getElementById("list-poke")
        pokemonDivFil.innerHTML +=
          `
    <div} class="pokemon-unit">
      <img data-num=${elem.num} src="${elem.img}" class="poke-img"/>
      <div data-num=${elem.num} class= "poke-namenum">
        <p data-num=${elem.num} class="poke-num" > Nº ${elem.num}</p>
        <h3 data-num=${elem.num} class="poke-name">${elem.name}</h3>
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
  })
}

function showModal(classPokes) {
  let pokesClass = document.querySelectorAll(classPokes)
  for (let oneClass of pokesClass) {
    oneClass.addEventListener('click', function (event) {

      let dataNum = event.target.getAttribute("data-num")
      POKEMON["pokemon"].filter((elem) => {
        if (dataNum === elem.num) {
          document.querySelector('#sec-modal').style.display = "block";
          document.querySelector('.title-name').innerHTML = elem.name;
          document.querySelector('#photo-poke').innerHTML = `
          <img src="${elem.img}"/>
          `
          document.querySelector('.poke-description').innerHTML = `
          <ul>
          <li>N° ${elem.num}</li>
          <li>Altura: ${elem.height}</li>
          <li>Peso: ${elem.weight}</li>
          <li>${elem.candy}</li>
          </ul>
          `

          elem.weaknesses.filter((typ) => {
            for (let btn of document.querySelectorAll('.btn-types')) {
              if (typ === btn.id) {
                document.querySelector('.div-weak').innerHTML += btn.outerHTML
              }
            }
          })

          elem.type.filter((typ) => {
            for (let btn of document.querySelectorAll('.btn-types')) {
              if (typ === btn.id) {
                document.querySelector('.div-types').innerHTML += `${btn.outerHTML}`;
              }
            }
          })

          elem.prev_evolution.filter((evol) => {
            POKEMON["pokemon"].filter((elem) => {
              if (evol.num === elem.num) {
                document.querySelector('.sec-evol').innerHTML +=
                `
                <div data-num=${elem.num} class="pokemon-unit">
                  <img data-num=${elem.num} class="poke-img" src="${elem.num}"/>
                  <div data-num=${elem.num} class= "poke-namenum">
                    <p data-num=${elem.num} class="poke-num"> Nº ${elem.num}</p>
                    <h3 data-num=${elem.num} class="poke-name">${elem.name}</h3>
                  </div> 
                </div>
          `
              }
            })
          })

          elem.next_evolution.filter((evol) => {
            POKEMON["pokemon"].filter((elem) => {
              if (evol.num === elem.num) {
                document.querySelector('.sec-evol').innerHTML +=
                `
                <div data-num=${elem.num} class="pokemon-unit">
                  <img data-num=${elem.num} class="poke-img" src="${elem.num}"/>
                  <div data-num=${elem.num} class= "poke-namenum">
                    <p data-num=${elem.num} class="poke-num"> Nº ${elem.num}</p>
                    <h3 data-num=${elem.num} class="poke-name">${elem.name}</h3>
                  </div> 
                </div>
          `
              }
            })
          })

          }
        }
      )
    }
    )}
}