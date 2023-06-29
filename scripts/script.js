let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;
let cards = [];
let cardsEl = document.getElementById("cards-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  isAlive = true;
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1;
  if (random === 1) return 11;
  else if (random > 10) return 10;
  else return random;
}

function renderGame() {
  // render out first and second card
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  // render out all of the cards
  sumEl.textContent = ` Sum: ${sum}`;

  if (sum <= 20) {
    message = "draw another card";
  } else if (sum == 21) {
    message = "You've got Blackjack";
    hasBlackJack = true;
  } else {
    message = "You're Busted";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  console.log("drawing new card from the deck");
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}
