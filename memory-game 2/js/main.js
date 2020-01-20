//Logic du programme


console.log("Up and running!");


let cardThree = "king";
let cardFour = "King";

console.log("User flipped" + cardThree);
console.log("User flipped" + cardFour);


let card = ["queen", "queen", "King", "king"];
card.pop;

let cardInPlay = [];


let cardOne = card[0];
let cardTwo = card[2];

cardInPlay.push(cardOne);
cardInPlay.push(cardTwo);




if ( cardInPlay.length === 2) {

    if(cardOne === cardInPlay[0]) {

     console.log("User flipped King");

    }
    if (cardTwo === cardInPlay[1]) {

      console.log("User flipped King");
    }

    alert("You found a match!");
}
