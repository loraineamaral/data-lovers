function showModal(classPokes) {
	let pokesClass = document.querySelectorAll(classPokes)
	for (let oneClass of pokesClass) {
		oneClass.addEventListener('click', function (event) {
			let dataNum = event.target.getAttribute("data-num")
			clearScreen('.btn-weak')
			clearScreen('.btn-type')
			clearScreen('.sec-evol')

			getPokes.filter((elem) => {
				if (dataNum === elem.num) {
					document.querySelector('#sec-modal').style.display = "block";
					document.querySelector('.title-name').innerHTML = elem.name;
					document.querySelector('#photo-poke').innerHTML =
						`
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${elem.num}.png"/>
          `
					document.querySelector('.poke-description').innerHTML =
						`
          <ul>
          <li>N° ${elem.num}</li>
          <li>Altura: ${elem.height}</li>
          <li>Peso: ${elem.weight}</li>
          <li>${elem.candy}</li>
          </ul>
		  `
					elem.type.filter((typ) => {
						for (let btn of document.querySelectorAll('.btn-types')) {
							if (typ === btn.getAttribute('data-btn')) {
								document.querySelector('.btn-type').innerHTML += btn.outerHTML
							}
						}
					}
					)

					elem.weaknesses.filter((typ) => {
						for (let btn of document.querySelectorAll('.btn-weaks')) {
							if (typ === btn.getAttribute('data-btn')) {
								document.querySelector('.btn-weak').innerHTML += btn.outerHTML
							}
						}
					}
					)

					if (elem.hasOwnProperty('prev_evolution') === true) {
						elem.prev_evolution.filter((evol) => {
							getPokes.filter((element) => {
								if (evol.num === element.num) {
									document.querySelector('.sec-evol').innerHTML +=
										`
									${pokeUnit(element)}
									<div class="arrow">
									<div class="candyCount">${element.candy_count}</div>
									<div class="candyPoke">${element.candy}</div>
									<i class="fas fa-arrow-right"></i>
									</div>`
								}
							}
							)
						}
						)
						document.querySelector('.sec-evol').innerHTML += pokeUnit(elem)
					} else if (elem.hasOwnProperty('prev_evolution') === false) {
						document.querySelector('.sec-evol').innerHTML += pokeUnit(elem)
					}
					if (elem.hasOwnProperty('next_evolution') === true) {
						elem.next_evolution.filter((evol) => {
							getPokes.filter((element) => {
								if (evol.num === element.num) {
									document.querySelector('.sec-evol').innerHTML +=
										`
									<div class="arrow">
									<div class="candyCount">${elem.candy_count}</div>
									<div class="candyPoke">${element.candy}</div>
									<i class="fas fa-arrow-right"></i></div>
									${pokeUnit(element)}
									`
								}
							}
							)
						}
						)
					}
					const btn = document.getElementById('arrow')
					btn.setAttribute('data-balloon-visible', '')
				}
			}
			)
		}
		)
	}
}

document.getElementById('close-sec').addEventListener('click', () =>
	document.getElementById('sec-modal').style.display = "none"
)
