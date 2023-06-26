let firstCard = 10;
let secondCard = 11;
let won = false;
let sum = firstCard + secondCard;


if (sum <= 20) {
    console.log("draw another card")
}

else if (sum == 21) {
    console.log("win")
    won = true;
}

else { 
    console.log("The sum is less than 21:")
}

console.log(won);
