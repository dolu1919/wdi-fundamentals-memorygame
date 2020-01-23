
console.log("Up and running");

const cards = ["queen", "queen", "King", "King"];

const cardsInPlay = [];

function checkForMatch () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  }  else if (cardsInPlay.length >= 2) {
    console.log("Sorry, try again.");
  }
}

function flipCard(cardId) {
    cardsInPlay.push(cards[cardId]);
    console.log("User flipped " + cards[cardId]);

    checkForMatch();

}


flipCard(0);
flipCard(2);
