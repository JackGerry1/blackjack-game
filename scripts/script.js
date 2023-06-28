let firstCard = 2;
let secondCard = 2;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum = firstCard + secondCard;
let cardsEl = document.getElementById("cards-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = `Card: ${firstCard} ${secondCard}`;
  sumEl.textContent = ` Sum: ${sum}`;

  if (sum <= 20) {
    message = "draw another card";
  } else if (sum == 21) {
    message = "Y ou've got Blackjack";
    hasBlackJack = true;
  } else {
    message = "You're Busted";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  console.log("drawing new card from the deck");
  let card = 3;
  sum += card;
  renderGame();
}
