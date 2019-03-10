
window.onload = function () {
  showPokemons(getPokemons())
  showModal('.poke-img')
  showModal('.poke-namenum')
}

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
          } if (elem.hasOwnProperty('next_evolution') === true) {
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

var stats = document.getElementById("stats-btn")
stats.addEventListener("click", candyCount)
stats.addEventListener("click", getHeight)
stats.addEventListener("click", getWeight)
stats.addEventListener("click", getTypes)

function getTypes() {
  clearScreen();
  document.getElementById("filter-buttons").innerHTML = ""
  document.getElementById("show-poke").innerHTML = ""

  let typesArray = [];
  let contNormal = 0;
  let contFire = 0;
  let contWater = 0;
  let contElectric = 0;
  let contGrass = 0;
  let contIce = 0;
  let contPoison = 0;
  let contGround = 0;
  let contFighting = 0;
  let contFlying = 0;
  let contPsychic = 0;
  let contBug = 0;
  let contRock = 0;
  let contGhost = 0;
  let contDragon = 0;
  let contDark = 0;
  let contSteel = 0;
  let contFairy = 0;

  POKEMON.pokemon.filter((elem) => {
    typesArray.push(elem.type[0])
    if (typeof elem.type[1] === "string") {
      typesArray.push(elem.type[1])
    }
  })
  typesArray.filter((elem) => {
    if (elem === "Normal") {
      contNormal += 1;
    } if (elem === "Fire") {
      contFire += 1;
    } if (elem === "Water") {
      contWater += 1;
    } if (elem === "Electric") {
      contElectric += 1;
    } if (elem === "Grass") {
      contGrass += 1;
    } if (elem === "Ice") {
      contIce += 1;
    } if (elem === "Poison") {
      contPoison += 1;
    } if (elem === "Ground") {
      contGround += 1;
    } if (elem === "Fighting") {
      contFighting += 1;
    } if (elem === "Flying") {
      contFlying += 1;
    } if (elem === "Psychic") {
      contPsychic += 1;
    } if (elem === "Bug") {
      contBug += 1;
    } if (elem === "Rock") {
      contRock += 1;
    } if (elem === "Ghost") {
      contGhost += 1;
    } if (elem === "Dragon") {
      contDragon += 1;
    } if (elem === "Dark") {
      contDark += 1;
    } if (elem === "Steel") {
      contSteel += 1;
    } if (elem === "Fairy") {
      contFairy += 1;
    }

  })

  google.charts.load("current", { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    let data = google.visualization.arrayToDataTable([
      ["Tipo", "Quantidade", { role: "style" }],
      ["Normal", contNormal, "black",],
      ["Fire", contFire, "red"],
      ["Water", contWater, "#54e5ca"],
      ["Electric", contElectric, "#fca002"],
      ["Grass", contGrass, "#01fc6a"],
      ["Ice", contIce, "#336a8c"],
      ["Poison", contPoison, "#680c7f"],
      ["Ground", contGround, "#664617"],
      ["Fighting", contFighting, "#c11313"],
      ["Flying", contFlying, "#133ac6"],
      ["Psychic", contPsychic, "#d154e"],
      ["Bug", contBug, "##b7e554"],
      ["Rock", contRock, "#949989"],
      ["Ghost", contGhost, "#c8abcc"],
      ["Dragon", contDragon, "#f97b04"],
      ["Dark", contDark, "#120e84"],
      ["Steel", contSteel, "#8989a3"],
      ["Fairy", contFairy, "deeppink"]

    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "none"
      },
      2]);

    var options = {
      title: "Tipos de Pokemons",
      width: 800,
      height: 400,
      bar: { groupWidth: "90%" },
      legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
  }
}

function getHeight() {
  let heigthArray = [];
  POKEMON.pokemon.filter((elem) => {
    heigthArray.push(elem.height.replace(" m", ""))
  })
  let sumHeight = heigthArray.reduce((a, b) => parseFloat(a) + parseFloat(b));
  let avgHeight = (sumHeight / heigthArray.length).toFixed(2);
  let maxHeight = Math.max.apply(null, heigthArray);
  let minHeight = Math.min.apply(null, heigthArray);

  let pokeDivHeight = document.getElementById("height-stats")
  pokeDivHeight.innerHTML = `
     <ul class= "hwc-stats">
       <p class="title-stats">ALTURA</p>
          <li>Altura Média: ${avgHeight} m</li>
          <li>Altura Máxima: ${maxHeight} m</li>
          <li>Altura Mínima: ${minHeight} m</li>
      </ul>
     `
}

function getWeight() {
  let weightArray = [];
  POKEMON.pokemon.filter((elem) => {
    weightArray.push(elem.weight.replace(" kg", ""))
  })
  let sumWeight = weightArray.reduce((a, b) => parseFloat(a) + parseFloat(b));
  let avgWeight = (sumWeight / weightArray.length).toFixed(2);
  let maxWeight = Math.max.apply(null, weightArray);
  let minWeight = Math.min.apply(null, weightArray);

  let pokeDivWeight = document.getElementById("weight-stats")
  pokeDivWeight.innerHTML = `
     <ul class= "hwc-stats">
       <p class="title-stats">PESO</p>
          <li>Peso Médio: ${avgWeight} kg</li>
          <li>Peso Máximo: ${maxWeight} kg</li>
          <li>Peso Mínimo: ${minWeight} kg</li>
      </ul>
     `
}

function candyCount() {
  let candyArray = [];
  POKEMON.pokemon.filter((elem) => {
    if (typeof elem.candy_count === "number") {
      candyArray.push(elem.candy_count)
    }
  })
  let candySum = candyArray.reduce((a, b) => a + b);
  let avgCandy = candySum / candyArray.length;
  let maxCandy = Math.max.apply(null, candyArray);
  let minCandy = Math.min.apply(null, candyArray);

  let pokeDivCandy = document.getElementById("candy-stats")
  pokeDivCandy.innerHTML = `
  <ul class= "hwc-stats">
    <p class="title-stats">CANDY</p>
       <li></i>Candy Médio: ${avgCandy}</li>
       <li></i>Candy Máximo: ${maxCandy}</li>
       <li></i>Candy Mínimo: ${minCandy}</li>
   </ul>
  `
}