
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
  POKEMON["pokemon"].filter((elem) => {
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
  });
}

function showModal(classPokes) {
  let pokesClass = document.querySelectorAll(classPokes)
  for (let oneClass of pokesClass) {
    oneClass.addEventListener('click', function (event) {

      let dataNum = event.target.getAttribute("data-num")
      POKEMON["pokemon"].filter((elem) => {
        if (dataNum === elem.num) {
          document.querySelector('#sec-modal').style.display = "block";
          document.querySelector('#sec-modal').innerHTML =
            `
            <section id="modal-content" class="modal-content">
            <h1 class="title-name">${elem.name}</h1>
            <div class="pic-description">
                <figure id="photo-poke" class="poke-img">
                <img src="${elem.img}"></figure>
                <article class="poke-description">
                  <ul>
                    <li>N° ${elem.num}</li>
                    <li>Altura: ${elem.height}</li>
                    <li>Peso: ${elem.weight}</li>
                    <li>${elem.candy}</li>
                  </ul>
                </article>
            </div>
            <div class="types-weak">
              <div class="div-types">
                <h2 class="subtitles">Tipos</h2>
                <div class="div-types">
                ${elem.type.filter((elem) => {
              for (btn of document.querySelectorAll('.btn-types')) {
                if (elem === btn.id) {
                  document.querySelector('.div-types').innerHTML= btn
                }
              }
            }
            )}
                </div>
              </div>
              <div class="weak">
                <h2 class="subtitles">Fraquezas</h2>
              </div>
            </div>
            <h2 class="subtitles">Evoluções</h2>
            <div class="sec-evol"></div>
          </section>
          `
        }
      })
    })
  }
}