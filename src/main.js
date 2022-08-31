// Create variables targetting the relevant DOM elements here 👇
//**anything that is on your HTML that needs to be accessed made into a variable */
var randomCoverButton = document.querySelector('.random-cover-button')
var mainCoverDisplay = document.querySelector('.main-cover')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
//**anything that you want clicked will be an event listener//
randomCoverButton.addEventListener('click', displayNewRandom)

// Create your event handlers and other functions here 👇)
function createNewRandom() {
  var currentCover = new Cover
  currentCover.title = Math.floor(Math.random() * titles.length)
  currentCover.cover = Math.floor(Math.random() * covers.length)
  currentCover.tagline1 = Math.floor(Math.random() * descriptors.length)
  currentCover.tagline2 = Math.floor(Math.random() * descriptors.length)
  return currentCover
}

function displayNewRandom() {
  mainCoverDisplay.innerHTML = createNewRandom()
}


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
