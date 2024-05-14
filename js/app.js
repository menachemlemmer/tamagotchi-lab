/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/

const states = {
  hunger: 0,
  boredom: 0,
  sleepiness: 0,
};

let timer;
let gameOver;

/*------------------------ Cached Element References ------------------------*/

const hungerStatEl = document.querySelector("#hunger-stat");
const boredomStatEl = document.querySelector("#boredom-stat");
const sleepinessStatEl = document.querySelector("#sleepiness-stat");

const playBtnEl = document.querySelector("#play");
const feedBtnEl = document.querySelector("#feed");
const sleepBtnEl = document.querySelector("#sleep");

const buttonsEl = document.querySelector(".button-wrapper");

const gameMsgEl = document.querySelector("#message");

const resetBtnEl = document.querySelector("#restart");
/*-------------------------------- Functions --------------------------------*/

function init() {
  resetBtnEl.classList.add("hidden");
  gameMsgEl.classList.add("hidden");
  for (let state in states) {
    states[state] = 0;
  }
  gameOver = false;
  timer = setInterval(runGame, 2000);
  console.log("hello");
  render();
}

function runGame() {
  updateStates();
  checkGameOver();
  render();
}

function render() {
  if (gameOver === true) {
    clearInterval(timer);
    resetBtnEl.classList.remove("hidden");
    gameMsgEl.classList.remove("hidden");
  }
  hungerStatEl.textContent = states.hunger;
  boredomStatEl.textContent = states.boredom;
  sleepinessStatEl.textContent = states.sleepiness;
}

function updateStates() {
  for (let state in states) {
    states[state] += Math.floor(Math.random() * 3);
  }
}

function checkGameOver() {
  for (let state in states) {
    if (states[state] >= 10) {
      gameOver = true;
    }
  }
}

function playBtnClick(event) {
  if (event.target.id === "feed") {
    states.hunger = 0;
  } else if (event.target.id === "sleep") {
    states.sleepiness = 0;
  } else if (event.target.id === "play") {
    states.boredom = 0;
  }
  render();
}

/*----------------------------- Event Listeners -----------------------------*/

buttonsEl.addEventListener("click", playBtnClick);

resetBtnEl.addEventListener("click", init);

init();
