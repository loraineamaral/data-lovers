window.onload = function () {
  showPokemons(getPokes)
  showModal('.poke-img')
  showModal('.poke-namenum')
  hoverIcons(btnType)
  hoverIcons(btnWeak)
  document.getElementById("filter-buttons").style.display = "none"
}

const btnType = document.getElementsByClassName('btn-types');
const pokemonDivFil = document.getElementById("list-poke");
const getPokes = POKEMON.pokemon;
const selectOpt = document.querySelector("select");
const btnWeak = document.getElementsByClassName('btn-weaks');
const stats = document.getElementById("stats-btn")

document.getElementById("home-btn").addEventListener("click", reloadBtn)
document.getElementById("search-show").addEventListener("click", searchAd)
document.getElementById("go-btn").addEventListener("click", searchPoke)
document.getElementById("stats-btn").addEventListener("click", getStats)

function reloadBtn() {
  document.location.reload(true)
}

function searchAd() {
  let displayDiv = document.getElementById("filter-buttons").style.display;
  if (displayDiv == "none") {
    document.getElementById("filter-buttons").style.display = 'flex';
  } else {
    document.getElementById("filter-buttons").style.display = 'none';
  }
}

function searchPoke() {
  let searchName = document.getElementById("search-poke").value
  getPokes.filter((elem) => {
    if (searchName === elem.name) {
      pokemonDivFil.innerHTML = pokeUnit(elem);
    }
  }
  )
}

selectOpt.addEventListener("change", () =>
  sortPoke(selectOpt.selectedIndex));

function pokeUnit(poke) {
  return `
  <div data-num=${poke.num} class="pokemon-unit">
    <img data-num=${poke.num} class="poke-img" src="${poke.img}"/>
    <div data-num=${poke.num} class= "poke-namenum">
    <div class="poke-shadow"></div>
      <p data-num=${poke.num} class="poke-num"> Nº ${poke.num} </p>
      <h3 data-num=${poke.num} class="poke-name">${poke.name}</h3>
    </div> 
  </div>
`
}

function clearScreen(screen) {
  document.querySelector(screen).innerHTML = "";
}

function showPokemons(getPoke) {
  pokemonDivFil.innerHTML =
    `
    ${getPoke.map((pokelist) => pokeUnit(pokelist)).join("")}
`
}

function filterPokeType(btnId) {
  getPokes.filter((elem) => {
    elem.type.filter((ele) => {
      if (btnId === ele) {
        pokemonDivFil.innerHTML += pokeUnit(elem);
      }
    }
    )
  }
  )
  showModal('.poke-img')
  showModal('.poke-namenum')
}

function filterPokeWeak(btnId) {
  getPokes.filter((elem) => {
    elem.weaknesses.filter((ele) => {
      if (btnId === ele) {
        let pokemonDivFil = document.getElementById("list-poke")
        pokemonDivFil.innerHTML += pokeUnit(elem);
      }
    }
    )
  }
  )
  showModal('.poke-img')
  showModal('.poke-namenum')
}

for (button of btnType) {
  let btnData = button.getAttribute("data-btn")
  button.addEventListener('click', () => {
    document.getElementById("list-poke").innerHTML = "";
    filterPokeType(btnData)
  }
  )
}

for (button of btnWeak) {
  let btnData = button.getAttribute("data-btn");
  button.addEventListener('click', () => {
    document.getElementById("list-poke").innerHTML = "";
    filterPokeWeak(btnData);
  }
  )
}

function sortPoke(ka) {
  let namePoke = [];
  getPokes.filter((elem) => {
    namePoke.push(elem.name)
  }
  )
  if (ka === 1) {
    namePoke.sort();
  } else if (ka === 2) {
    namePoke.sort();
    namePoke.reverse();
  }
  clearScreen('.list-poke');
  for (let i of namePoke) {
    for (let j in getPokes) {
      let nameData = getPokes[j].name;
      let pokeObj = getPokes[j];
      if (i === nameData) {
        pokemonDivFil.innerHTML += pokeUnit(pokeObj)
      }
    }
  }
}
for (let btn of document.querySelectorAll('.icon-h-w')) {
  btn.addEventListener('click', function () {
    clearScreen('.list-poke')
    if (btn.id === "short") {
      getPokes.filter((elem) => {
        if (elem.height.replace(" m", "") < 1.0) {
          pokemonDivFil.innerHTML += pokeUnit(elem);
        }
      }
      )
    } else if (btn.id === "medium") {
      getPokes.filter((elem) => {
        if (elem.height.replace(" m", "") > 1.0 && elem.height.replace(" m", "") < 2.0) {
          pokemonDivFil.innerHTML += pokeUnit(elem);
        }
      }
      )
    } else if (btn.id === "tall") {
      getPokes.filter((elem) => {
        if (elem.height.replace(" m", "") > 2.0) {
          pokemonDivFil.innerHTML += pokeUnit(elem);
        }
      }
      )
    } else if (btn.id === "light") {
      getPokes.filter((elem) => {
        if (elem.weight.replace(" kg", "") < 45.0) {
          pokemonDivFil.innerHTML += pokeUnit(elem);
        }
      }
      )
    } else if (btn.id === "mid") {
      getPokes.filter((elem) => {
        if (elem.weight.replace(" kg", "") > 45.0 && elem.weight.replace(" kg", "") < 90.0) {
          pokemonDivFil.innerHTML += pokeUnit(elem);
        }
      }
      )
    } else if (btn.id === "heavy") {
      getPokes.filter((elem) => {
        if (elem.weight.replace(" kg", "") > 90.0) {
          pokemonDivFil.innerHTML += pokeUnit(elem);
        }
      }
      )
    }
    showModal('.poke-img')
    showModal('.poke-namenum')
  }
  )
}

function getStats() {
  clearScreen('.list-poke')
  clearScreen('#filter-buttons')
  document.getElementById("filter-buttons").style.display = "none"
  document.getElementById("show-menubar").style.display = "none"

  let chooseStats = document.getElementById("stats-menu")
  chooseStats.innerHTML = `
  <img src="../assets/images/pikachu.png"  alt="picachugif" class="pika-img"/>
        <div class="stats-btn2">
        <button id="type-chart">Tipos</button>
        <button id="stats-h">Altura</button>
        <button id="stats-w">Peso</button>
        <button id="stats-c">Candy</button>
        </div>
   `
  document.getElementById("type-chart").addEventListener("click", getTypes)
  document.getElementById("stats-h").addEventListener("click", getHeight)
  document.getElementById("stats-w").addEventListener("click", getWeight)
  document.getElementById("stats-c").addEventListener("click", getCandy)
}

function getTypes() {
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

  getPokes.filter((elem) => {
    typesArray.push(elem.type[0])
    if (typeof elem.type[1] === "string") {
      typesArray.push(elem.type[1])
    }
  }
  )

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
  }
  )

  google.charts.load("current", { packages: ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    let data = google.visualization.arrayToDataTable([
      ["Tipo", "Quantidade", { role: "style" }],
      ["Normal", contNormal, "#A4ACAF",],
      ["Fire", contFire, "#FB7D33"],
      ["Water", contWater, "#19A6F4"],
      ["Electric", contElectric, "#EDD346"],
      ["Grass", contGrass, "#9CCA58"],
      ["Ice", contIce, "#57C4E5"],
      ["Poison", contPoison, "#B881C7"],
      ["Ground", contGround, "#63491A"],
      ["Fighting", contFighting, "#CE5824"],
      ["Flying", contFlying, "#AEEDFC"],
      ["Psychic", contPsychic, "#F169B8"],
      ["Bug", contBug, "#739E45"],
      ["Rock", contRock, "#5B563F"],
      ["Ghost", contGhost, "#674A9E"],
      ["Dragon", contDragon, "#EF6F5C"],
      ["Dark", contDark, "#484849"],
      ["Steel", contSteel, "#90AFAF"],
      ["Fairy", contFairy, "#FCBAE8"]
    ]
    );

    let view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "none"
      },
      2]
    )

    let options = {
      title: "Tipos de Pokemons",
      titleTextStyle: { fontSize: 20 },
      width: 800,
      height: 400,
      backgroundColor: "white",
      fontName: 'Signika',
      bar: { groupWidth: "90%" },
      legend: { position: "none" },
      hAxis: {
        fontSize: 9,
        slantedText: "true"
      },
      chartArea: {
        width: 700,
      }
    };

    let chart = new google.visualization.ColumnChart(document.getElementById("stats"));
    chart.draw(view, options);
  }
}

function getHeight() {
  let heigthArray = [];
  getPokes.filter((elem) => {
    heigthArray.push(elem.height.replace(" m", ""))
  }
  )
  let sumHeight = heigthArray.reduce((a, b) => parseFloat(a) + parseFloat(b))
  let avgHeight = (sumHeight / heigthArray.length).toFixed(2)
  let maxHeight = Math.max.apply(null, heigthArray)
  let minHeight = Math.min.apply(null, heigthArray)

  let pokeDivHeight = document.getElementById("stats")
  pokeDivHeight.innerHTML = `
     <ul class= "hwc-stats">
       <p class="title-stats">ALTURA</p>
          <li>Altura Média: ${avgHeight} m</li>
          <li>Altura Máxima: ${maxHeight} m</li>
          <li>Altura Mínima: ${minHeight} m</li>
      </ul>
     `
}

function getCandy() {
  let candyArray = [];
  getPokes.filter((elem) => {
    if (typeof elem.candy_count === "number") {
      candyArray.push(elem.candy_count)
    }
  }
  )
  let candySum = candyArray.reduce((a, b) => a + b)
  let avgCandy = candySum / candyArray.length
  let maxCandy = Math.max.apply(null, candyArray)
  let minCandy = Math.min.apply(null, candyArray)
  let pokeDivCandy = document.getElementById("stats")

  pokeDivCandy.innerHTML = `
  <ul class= "hwc-stats">
    <p class="title-stats">CANDY</p>
       <li></i>Candy Médio: ${avgCandy}</li>
       <li></i>Candy Máximo: ${maxCandy}</li>
       <li></i>Candy Mínimo: ${minCandy}</li>
   </ul>
  `
}

function getWeight() {
  let weightArray = [];
  getPokes.filter((elem) => {
    weightArray.push(elem.weight.replace(" kg", ""))
  })
  let sumWeight = weightArray.reduce((a, b) => parseFloat(a) + parseFloat(b));
  let avgWeight = (sumWeight / weightArray.length).toFixed(2);
  let maxWeight = Math.max.apply(null, weightArray);
  let minWeight = Math.min.apply(null, weightArray);

  let pokeDivWeight = document.getElementById("stats")
  pokeDivWeight.innerHTML = `
     <ul class= "hwc-stats">
       <p class="title-stats">PESO</p>
          <li>Peso Médio: ${avgWeight} kg</li>
          <li>Peso Máximo: ${maxWeight} kg</li>
          <li>Peso Mínimo: ${minWeight} kg</li>
      </ul>
     `
}

function hoverIcons(btnHover) {
  for (button of btnHover) {
    let btnData = button.getAttribute("data-btn")
    button.innerHTML +=
      `       
    <span class="btn-hover">${btnData}</span>
    `
  }
}