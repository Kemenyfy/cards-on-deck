const suits = ["Hearts", "Spades", "Clubs", "Diamonds"]

const rank = ['Ace of ','2 of ','3 of ','4 of ','5 of ','6 of ','7 of ','8 of ','9 of ','10 of ','Jack of ','Queen of ','King of ']

const deck = []


shuffleDeck = () => {
  for (let i = 0; i < rank.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push(rank[i] + suits[j])
      }
  }
  // Randomly shuffle cards from array
  let i = 0
  let j = 0
  let temp = null

  for (i = 0; i < deck.length; i++ ) {
    j = Math.floor(Math.random() * (i + 1))
    temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
    console.log(deck)
  }
}

const dealCard = () => {
  const cardDealt = deck.pop()
  console.log(cardDealt); 
  document.querySelector('.dealtCard').textContent = cardDealt
}

document.addEventListener('DOMContentLoaded', shuffleDeck)
document.querySelector('.dealCards').addEventListener('click', dealCard)