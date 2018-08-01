// const deck = () => {

// }
const deck = [1,2,3,4,5,6]

shuffleDeck = () => {
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
  console.log(deck.pop()); 
  document.querySelector('.dealtCard').textContent = deck.pop() 
}

document.addEventListener('DOMContentLoaded', shuffleDeck)
document.querySelector('.dealCards').addEventListener('click', dealCard)