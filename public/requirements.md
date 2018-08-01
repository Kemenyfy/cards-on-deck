### Requirements:

- [x] Have a deck containing 4 Cards
- [x] Cards have to be shuffled when loading the page
- [ ] I need a button in the Face Down Cards that orders a deal
- [ ] Dealt card should show on the right of the face down deck 
- [ ] Have a deck containing 52 Cards

for i from 0 up to n - 1 do:
  j = random integer less than i
  swap items[i] with items[j]


  const deck = ["Hearts", "Spades", "Clubs", "Diamonds"]

let shuffledCard

// const shuffleDeck = () => {
//   // Randomly Shuffle Cards from Array
//   shuffledCard = deck[Math.floor(Math.random() * deck.length)]
//   console.log(shuffledCard)
// }

const shuffleDeck = () => {
  // Randomly shuffle cards from array
  for 
}


const dealCard = () => {
  document.querySelector('.dealtCard').textContent = shuffledCard
}

// document.addEventListener('DOMContentLoaded', shuffleDeck)
document.querySelector('.dealCards').addEventListener('click', dealCard)

for i from 0 up to n - 1 do:
  j = random integer less than i
  swap items[i] with items[j]