
var score = 0;

const cards = [
  {
    rank:"queen",
    suit:"hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank:"queen",
    suit:"diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank:"king",
    suit:"hearts",
    cardImage: "images/king-of-hearts.png"

  },
  {
    rank:"king",
    suit:"diamonds",
    cardImage: "images/king-of-diamonds.png"
  }

];

const cardElements = [];

var cardsInPlay = [];

function checkForMatch () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    score+=1;
    alert("You found a match! Current score: "+score);
  }  else {
    alert("Sorry, try again.");
  }
}

function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    if(cardsInPlay.length >= 2) {
      checkForMatch();
    }
    this.setAttribute('src', cards[cardId].cardImage);
}

function createBoard() {
  for(let i = 0; i <  cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
    cardElements.push(cardElement);
  }
}

function createButton() {
  document.getElementById("reset-button").addEventListener('click', reset);
}

function reset() {
    console.log("Resetting");
    for(let i = 0; i < cards.length; i++){
      cardElements[i].setAttribute('src', "images/back.png");
    }
    cardsInPlay = [];
}
createButton();
createBoard();
