function showModal(classPokes) {
	let pokesClass = document.querySelectorAll(classPokes)
	for (let oneClass of pokesClass) {
		oneClass.addEventListener('click', function (event) {
			let dataNum = event.target.getAttribute("data-num")
			clearScreen('.btn-weak')
			clearScreen('.btn-type')
			clearScreen('.sec-evol')
			clearScreen('#photo-poke')
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
					getWeakB('.btn-weak')
					getTypeB('.btn-type')
					if (elem.hasOwnProperty('prev_evolution') === true) {
						elem.prev_evolution.filter((evol) => {
							getPokes.filter((elem) => {
								if (evol.num === elem.num) {
									document.querySelector('.sec-evol').innerHTML += `<h2 class="subtitles">Pré-evolução</h2> ${pokeUnit(elem)}`
									pokeUnit(elem)
								}
							}
							)
						}
						)
					} if (elem.hasOwnProperty('next_evolution') === true) {
						elem.next_evolution.filter((evol) => {
							getPokes.filter((elem) => {
								if (evol.num === elem.num) {
									document.querySelector('.sec-evol').innerHTML += `<h2 class="subtitles">Evolução</h2> ${pokeUnit(elem)}`

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

function getWeakB(div) {
	elem.weaknesses.filter((typ) => {
		for (let btn of document.querySelectorAll('.btn-weaks')) {
			if (typ === btn.getAttribute("data-btn")) {
				document.querySelector(div).innerHTML += btn.outerHTML
			}
		}
	}
	)
}
function getTypeB(div) {
	elem.type.filter((typ) => {
		for (let btn of document.querySelectorAll('.btn-types')) {
			if (typ === btn.getAttribute("data-btn")) {
				document.querySelector(div).innerHTML += btn.outerHTML
			}
		}
	}
	)
}

document.getElementById('close-sec').addEventListener('click', () =>
	document.getElementById('sec-modal').style.display = "none"
)