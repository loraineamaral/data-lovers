function showModal(classPokes) {
    let pokesClass = document.querySelectorAll(classPokes)
    for (let oneClass of pokesClass) {
        oneClass.addEventListener('click', function (event) {
            let dataNum = event.target.getAttribute("data-num")
            getPokes.filter((elem) => {
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
                    }
                    )
                    elem.type.filter((typ) => {
                        for (let btn of document.querySelectorAll('.btn-types')) {
                            if (typ === btn.id) {
                                document.querySelector('.div-types').innerHTML += `${btn.outerHTML}`;
                            }
                        }
                    }
                    )
                    if (elem.hasOwnProperty('prev_evolution') === true) {
                        elem.prev_evolution.filter((evol) => {
                            getPokes.filter((elem) => {
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
                            }
                            )
                        }
                        )
                    } else if (elem.hasOwnProperty('next_evolution') === true) {
                        elem.next_evolution.filter((evol) => {
                            getPokes.filter((elem) => {
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
                            }
                            )
                        }
                        )
                    }
                }
            }
            )
        }
        )
    }
}