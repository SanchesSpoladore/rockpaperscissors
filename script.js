const choices = ['paper', 'scissors', 'rock', ]
const buttons = document.querySelectorAll('.pick')
const scoreEl = document.getElementById('score')
const main = document.getElementById('main')
const selection = document.getElementById('selection')
const reset = document.getElementById('reset')
const userSelect = document.getElementById('user_select')
const computerSelect = document.getElementById('computer_select')
const winner = document.getElementById('winner')
const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const modalBtn = document.getElementById('modal')
let userChoice = ''
let score = 0

buttons.forEach(button => {
  button.addEventListener('click', () => {
    userChoice = button.getAttribute('id')
    whoWin()
  })
})

reset.addEventListener('click', () => {
  main.style.display = 'flex'
  selection.style.display = 'none'
  computerSelect.innerHTML = '<div class="shadow"></div>'
  winner.innerHTML = ''
  selection.classList.add('game')
})

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})

function getRandomChoice() {
  return choices[Math.floor((Math.random() * choices.length))]
}

function whoWin() {
  const computerChoice = getRandomChoice()

  updadeSelection(userSelect, userChoice)
  setTimeout(() => {
    updadeSelection(computerSelect, computerChoice)
    selection.classList.remove('game')
    if (userChoice === computerChoice) {
      updadeScore(0)
      winner.innerText = 'draw'
    } else if (userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper' || userChoice === 'rock' && computerChoice === 'scissors') {
      updadeScore(1)
      winner.innerText = 'win'
    } else {
      winner.innerText = 'loser'
      if (score === 0) {
        updadeScore(0)
      } else {
        updadeScore(-1)
      }
    }
  }, 1000)


  main.style.display = 'none'
  selection.style.display = 'flex'
}

function updadeSelection(selectionEl, choice) {
  selectionEl.innerHTML = `
    <div class="btn-circle btn-${choice}">
      <span class="wrapper">
        <img src="./images/icon-${choice}.svg" alt="${choice}">
      </span>
    </div>
  `
}

function updadeScore(value) {
  score += value
  scoreEl.innerHTML = score
}