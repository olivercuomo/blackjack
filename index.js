let firstcard = Math.floor(Math.random() * 10) + 2;
let secondcard = Math.floor(Math.random() * 10) + 2;
let cards = [firstcard, secondcard]
let sum = firstcard + secondcard
let blackjack = false
isalive = false
message = ' '
let hasblackjack = false
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

let player = {
    name: 'PLAYER 1',
    chips: 128
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ' : $' + player.chips

function startgame(){

    renderGame()
    isalive = true 
}



function renderGame(){ 
    
    cardsEl.textContent = 'cards: '
        for (let i = 0; i < cards.length; i++){ 
        cardsEl.textContent += cards[i] + ' '
        }      
    sumEl.textContent = 'sum of the cards: ' + sum
        if (sum <= 20){
            message = 'DRAW A CARD'
        } 
        
        else if (sum === 21){
            message = ' WINNER'
            blackjack = true 
        } 
        
        else {
            message = 'LOSER'
            isalive = false    
        }
    messageEl.textContent = message
    
}

function newcard(){
    if (isalive === true) {    
    let nuovaCarta = Math.floor(Math.random() * 10) + 2
    sum = sum + nuovaCarta  
    cards.push(nuovaCarta)
    console.log(cards)
    renderGame()
    } else if (blackjack === true) {
    messageEl.textContent = "ur a WINNER, u cant draw any more"

    }
    else {
        messageEl.textContent = 'ur a loser, u cant draw any more'
    }
     
}

