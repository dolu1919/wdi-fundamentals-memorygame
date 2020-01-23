

console.log("Up and running");


const card = ["queen", "queen", "King", "King"];


 const cardsInPlay = [];

 let cardOne = card[0];
 let cardTwo = card[2];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


console.log("user flipped" + " " + cardOne);
console.log("user flipped" + " " + cardTwo);



if ( cardsInPlay.length === 2 && cardTwo === cardsInPlay[1]) {


    alert("You find a match");
}
