window.onload = function () {
  showPokemons(getPokemons())
  showModal('.poke-img')
  showModal('.poke-namenum')
}

let btnType = document.getElementsByClassName('btn-types');
let pokemonDivFil = document.getElementById("list-poke");

function clearScreen() {
  document.getElementById("list-poke").innerHTML = ""
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
        <img data-num=${pokelist.num} class="poke-img" src="${pokelist.img}"/>
        <div data-num=${pokelist.num} class= "poke-namenum">
        <div class="poke-shadow"></div>
          <p data-num=${pokelist.num} class="poke-num"> Nº ${pokelist.num}</p>
          <h3 data-num=${pokelist.num} class="poke-name">${pokelist.name}</h3>
        </div> 
      </div>
`).join("")}
`
}

let btnType = document.getElementsByClassName('btn-types')
for (button of btnType) {
  let btnId = button.getAttribute("data-btn")
  button.addEventListener('click', () => {
    document.getElementById("list-poke").innerHTML = "";
    filterPokeType(btnId);
  })
}

function filterPokeType(btnId) {
  
  POKEMON.pokemon.filter((elem) => {
    elem.type.filter((ele) => {
      if (btnId === ele) {
        // let pokemonDivFil = document.getElementById("list-poke")
        pokemonDivFil.innerHTML +=
          `
    <div data-num=${elem.num} class="pokemon-unit">
     <img data-num=${elem.num} class="poke-img" src="${elem.img}"/>
      <div data-num=${elem.num} class= "poke-namenum">
      <div class="poke-shadow"></div>
        <p data-num=${elem.num} class="poke-num" > Nº ${elem.num}</p>
        <h3 data-num=${elem.num} class="poke-name">${elem.name}</h3>
      </div> 
    </div>
`
      }
    })
  })
}

for (button of btnType) {
  let btnId = button.id;

let btnWeak = document.getElementsByClassName('btn-weaks')

for (button of btnWeak) {
  let btnId = button.getAttribute("data-btn");

  button.addEventListener('click', () => {
    document.getElementById("list-poke").innerHTML = "";
    filterPokeWeak(btnId);
  })
}

function filterPokeWeak(btnId) {
  POKEMON.pokemon.filter((elem) => {
    elem.weaknesses.filter((ele) => {
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
              // for (let btn of document.querySelectorAll('.btn-weaks')) {
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

          if (elem.hasOwnProperty('prev_evolution') === true) {
            elem.prev_evolution.filter((evol) => {
              POKEMON["pokemon"].filter((elem) => {
                if (evol.num === elem.num) {
                  document.querySelector('.sec-evol').innerHTML +=
                    `
                  <div data-num=${elem.num} class="pokemon-unit">
                    <img data-num=${elem.num} class="poke-img" src="${elem.img}"/>
                    <div data-num=${elem.num} class= "poke-namenum">
                      <p data-num=${elem.num} class="poke-num"> Nº ${elem.num}</p>
                      <h3 data-num=${elem.num} class="poke-name">${elem.name}</h3>
                    </div> 
                  </div>
            `
                }
              })
            })
          } else if (elem.hasOwnProperty('next_evolution') === true) {
            elem.next_evolution.filter((evol) => {
              POKEMON["pokemon"].filter((elem) => {
                if (evol.num === elem.num) {
                  document.querySelector('.sec-evol').innerHTML +=
                    `
                  <div data-num=${elem.num} class="pokemon-unit">
                    <img data-num=${elem.num} class="poke-img" src="${elem.img}"/>
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
      }
      )

    let selectOpt = document.querySelector("select");
    selectOpt.addEventListener("change", () =>
      sortPoke(selectOpt.selectedIndex));

    function sortPoke(ka) {
      let namePoke = [];

      for (i in POKEMON["pokemon"]) {
        namePoke.push(POKEMON["pokemon"][i]["name"]);

        if (ka === 1) {
          namePoke.sort();
        } else if (ka === 2) {
          namePoke.sort();
          namePoke.reverse();
        }
      }

      clearScreen();

      for (let i of namePoke) {
        for (let j in POKEMON["pokemon"]) {
          let nameData = POKEMON["pokemon"][j]["name"]
          let pokeObj = POKEMON["pokemon"][j];
          if (i === nameData) {
            let pokemonDivFil = document.getElementById("list-poke");
            pokemonDivFil.innerHTML += `
    }
    )
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
    } else if (ka === 2) {
      console.log("passounoelseif")
      namePoke.sort();
      namePoke.reverse();
    }
  }

  clearScreen();

  for (let i of namePoke) {
    // console.log("NAMEP", i)
    for (let j in POKEMON["pokemon"]) {
      let nameData = POKEMON["pokemon"][j]["name"]
      // console.log(nameData);
      let pokeObj = POKEMON["pokemon"][j];
      // console.log(pokeObj);
      if (i === nameData) {
        // console.log("NAMEP", i, nameData)

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
  }
}

for (let btn of document.querySelectorAll('.icon-h-w')) {
  btn.addEventListener('click', function () {
    clearScreen();
    if (btn.id === "short") {
      POKEMON["pokemon"].filter((elem) => {
        if (elem.height.replace(" m", "") < 1.0) {
          innerPoke()
        }
      })
    } else if (btn.id === "medium") {
      POKEMON["pokemon"].filter((elem) => {
        if (elem.height.replace(" m", "") > 1.0 && elem.height.replace(" m", "") < 2.0) {
          innerPoke()
        }
      })
    } else if (btn.id === "tall") {
      POKEMON["pokemon"].filter((elem) => {
        if (elem.height.replace(" m", "") > 2.0) {
          innerPoke()
        }
      })
    } else if (btn.id === "light") {
      POKEMON["pokemon"].filter((elem) => {
        if (elem.weight.replace(" kg", "") < 45.0) {
          innerPoke()
        }
      })
    } else if (btn.id === "mid") {
      POKEMON["pokemon"].filter((elem) => {
        if (elem.weight.replace(" kg", "") > 45.0 && elem.weight.replace(" kg", "") < 90.0) {
          innerPoke()
        }
      })
    } else if (btn.id === "heavy") {
      POKEMON["pokemon"].filter((elem) => {
        if (elem.weight.replace(" kg", "") > 90.0) {
          innerPoke()
        }
      })
    }
  })
}

function innerPoke() {
  pokemonDivFil.innerHTML += `
  <div data-num=${elem.num} class="pokemon-unit">
  <img data-num=${elem.num} class="poke-img" src="${elem.img}"/>
    <div data-num=${elem.num} class= "poke-namenum">
    <div class="poke-shadow"></div>
      <p data-num=${elem.num} class="poke-num" > Nº ${elem.num}</p>
      <h3 data-num=${elem.num} class="poke-name">${elem.name}</h3>
    </div> 
  </div>
`}

let candyArray = [];
let sum = 0;

// function candyCount() {
  
  POKEMON.pokemon.filter((elem) => {
    if (typeof elem.candy_count === "number"){
      candyArray.push (elem.candy_count) 
    }
    })
    for (i of candyArray){
      sum += i;
      }
      let average = sum/candyArray.length;
      let max = Math.max.apply(null, candyArray );
      let min = Math.min.apply(null, candyArray );
        
    console.log(candyArray)
    console.log(sum)
    console.log(average)
    console.log(max)
    console.log(min)

// }

