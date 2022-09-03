//Home Page
var randomCoverButton = document.querySelector('.random-cover-button')
var saveCoverButton = document.querySelector('.save-cover-button')
var viewSavedButton = document.querySelector('.view-saved-button')
var makeYourOwnButton = document.querySelector('.make-new-button')
makeYourOwnButton.type = 'button'
var homeButton = document.querySelector('.home-button')
//Form Page
var newBookButton = document.querySelector('.create-new-book-button')
var mainCoverDisplay = document.querySelector('.main-cover')
var displayCoverImage = document.querySelector('.cover-image')
var displayCoverTitle = document.querySelector('.cover-title')
var displayTagline1 = document.querySelector('.tagline-1')
var displayTagline2 = document.querySelector('.tagline-2')
var formPage = document.querySelector('.form-view')
var homePage = document.querySelector('.home-view')
//View Saves Page
var savedPage = document.querySelector('.saved-view')
var userCover = document.getElementById('cover')
var userTitle = document.getElementById('title')
var userDescriptor1 = document.getElementById('descriptor1')
var userDescriptor2 = document.getElementById('descriptor2')
//
var customCoversPage

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover 

//**EventListeners
//Home Page
randomCoverButton.addEventListener('click', showNewCover)
saveCoverButton.addEventListener('click', saveBook)
makeYourOwnButton.addEventListener('click', displayFormPage)
viewSavedButton.addEventListener('click', displaySavedPage)
//Form Page
homeButton.addEventListener('click', displayHomePage)
newBookButton.addEventListener('click', displayUserBook)


// Create your event handlers and other functions here 👇)
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

//Home Page -- Random Button
function showNewCover() {
var coverImgSrc = covers[getRandomIndex(covers)]
var title = titles[getRandomIndex(titles)]
var descriptor1 = descriptors[getRandomIndex(descriptors)]
var descriptor2 = descriptors[getRandomIndex(descriptors)]

currentCover = new Cover(coverImgSrc, title, descriptor1, descriptor2)
  displayCoverImage.src = currentCover.cover
  displayCoverTitle.innerText = currentCover.title
  displayTagline1.innerText = currentCover.tagline1
  displayTagline2.innerText = currentCover.tagline2
}
//Home Page -- Button Navs
function displayHomePage() {
  formPage.classList.add('hidden')
  homePage.classList.remove('hidden')
  savedPage.classList.add('hidden')
  homeButton.classList.add('hidden')
  randomCoverButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
}

//Home Page >> Save Cover Button
function saveBook() {
  for (var i = 0; i < savedCovers.length; i++) {
    if (currentCover.cover === savedCovers[i].cover && 
        currentCover.title === savedCovers[i].title && 
        currentCover.tagline1 === savedCovers[i].tagline1 &&
        currentCover.tagline2 === savedCovers[i].tagline2) {
      return   
    } else {
      savedCovers.push(currentCover)
    }
  }    
}

//View Saved Page
function viewSavedCovers() {
  // var galleryPage = document.createElement('div')
  //   galleryPage.setAttribute('id', )
}
//View Saved Covers Page -- Button Navs
function displaySavedPage() {
  formPage.classList.add('hidden')
  homePage.classList.add('hidden')
  savedPage.classList.remove('hidden')
  homeButton.classList.remove('hidden')
  randomCoverButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
}

//Form Page -- Button Navs
function displayFormPage() {
  formPage.classList.remove('hidden')
  homePage.classList.add('hidden')
  savedPage.classList.add('hidden')
  homeButton.classList.remove('hidden')
  randomCoverButton.classList.add('hidden')
  saveCoverButton.classList.add('hidden')
}
//Form Page -- User Input
function displayUserBook() {
  event.preventDefault()
  displayCoverImage.src = userCover.value
  displayCoverTitle.innerText = userTitle.value
  displayTagline1.innerText = userDescriptor1.value
  displayTagline2.innerText = userDescriptor2.value
  returnHome()
}
function returnHome() {
  formPage.classList.add('hidden')
  homePage.classList.remove('hidden')
  savedPage.classList.add('hidden')
  homeButton.classList.add('hidden')
  randomCoverButton.classList.remove('hidden')
  saveCoverButton.classList.remove('hidden')
}

// function newCoverForm() {
//   // userBook = new Cover (userCover, userTitle, userDescriptor1, userDescriptor2)//   currentCover = userBook
//   covers.push(userCover.value)
//   titles.push(userTitle.value)
//   descriptors.push(userDescriptor1.value, userDescriptor2.value)
//   displayUserBook()
// }





