const cardArray = [
  {
    name: "fries",
    img: "Images/fries.avif",
  },
  {
    name: "cheeseburger",
    img: "Images/cheeseburger.jpg",
  },
  {
    name: "hotdog",
    img: "Images/hotdog.webp",
  },
  {
    name: "ice-cream",
    img: "Images/ice-cream.jpg",
  },
  {
    name: "milkshake",
    img: "Images/milkshake.jpg",
  },
  {
    name: "pizza",
    img: "Images/pizza.jpg",
  },
  {
    name: "fries",
    img: "Images/fries.avif",
  },
  {
    name: "cheeseburger",
    img: "Images/cheeseburger.jpg",
  },
  {
    name: "hotdog",
    img: "Images/hotdog.webp",
  },
  {
    name: "ice-cream",
    img: "Images/ice-cream.jpg",
  },
  {
    name: "milkshake",
    img: "Images/milkshake.jpg",
  },
  {
    name: "pizza",
    img: "Images/pizza.jpg",
  },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "Images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    gridDisplay.appendChild(card);
  }
}
createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("img");
  console.log("Check for a match");

  if (cardsChosenIds[0] === cardsChosenIds[1]) {
    alert("oops 🥴! You have clicked the same image");
  } else if (cardsChosen[0] === cardsChosen[1]) {
    alert("Great 😊! You found a match");
    // Set the matched cards to a different state (ex., "Images/white.jpg")
    cards[cardsChosenIds[0]].setAttribute("src", "Images/white.jpg");
    cards[cardsChosenIds[1]].setAttribute("src", "Images/white.jpg");
    // Disable click event for matched cards
    cards[cardsChosenIds[0]].removeEventListener("click", flipcard);
    cards[cardsChosenIds[1]].removeEventListener("click", flipcard);
    // Store the matched cards in cardsWon
    cardsWon.push(cardsChosen[0]);
  } else {
    // Reset the unmatched cards to the blank state
    cards[cardsChosenIds[0]].setAttribute("src", "Images/blank.png");
    cards[cardsChosenIds[1]].setAttribute("src", "Images/blank.png");
    alert("Sorry 🥺! Try again");
  }

  resultDisplay.innerHTML = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations ♡! You won";
  }
}

function flipcard() {
  const cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId); // Store the cardId to check for duplicates
  this.setAttribute("src", cardArray[cardId].img);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
