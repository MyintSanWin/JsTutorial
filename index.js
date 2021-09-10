let firstCard =12
let secondCard=9
let cards =[firstCard, secondCard]//array  ordered list of item
let sum =firstCard+secondCard;
let hasBlackJack=false
let isAlive =true

let messageEl=document.getElementById("message-el")
let sumEl =document.querySelector('#sum-el')
let cardsEl = document.getElementById('card-el')

function startGame(){
    renderGame()
}

function renderGame(){
    //render out first card and second card
cardsEl.textContent="Cards: " + cards[0] + " " + cards[1]

//render out all the cards we have
sumEl.textContent ="Sum: " + sum
if(sum <= 20 ){
    message="Do u want to draw a new card?"
}
else if(sum === 21){
message="wohoo! You've got Blackjack!"
}
else {
message="You're out of the game!"
isAlive=false
}
messageEl.textContent=message
}
function newCard(){
    // console.log("Drawing a new card from the deck!")
    let card = 7
    sum += card

    renderGame()
}