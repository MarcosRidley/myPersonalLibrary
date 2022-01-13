let myBookLibrary = [];
let isRead = false;
let whichNode = 0;

const bookCards = document.getElementById("cards");
const newBookButton = document.getElementById("addBook");
const newBookTab = document.getElementById("newBookTab");
const newBookName = document.getElementById("newBookID");
const newBookAuthor = document.querySelector(".author");
const newBookYear = document.querySelector(".launchYear");
const newBookRead = document.querySelector(".isRead");
const confirmAddBook = document.getElementById("confirmAddBook");

newBookRead.addEventListener("click", toggleReadBook);
confirmAddBook.addEventListener("click", () => createBookCard()); //pegar bkname bkauthor e launchyear dos inputs + se ta lido ou não e criar novo Book
newBookButton.addEventListener("click", () => toggleWindow());

function book(title, author, year, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.read = read;
  this.info = function () {
    return `This book is ${this.title}, written by ${this.author}, ${this.pages} pages long and ${read}`;
  };
}

function addBookToLibrary(book) {
  myBookLibrary.push(book);
}

function toggleWindow() {
  bookCards.classList.toggle("hidden");
  newBookTab.classList.toggle("hidden");
  if (newBookButton.textContent == "Add new book") {
    newBookButton.textContent = "Cancel";
  } else {
    newBookButton.textContent = "Add new book";
  }
}

function createBook() {
  const newBook = new book(
    newBookName.value,
    newBookAuthor.value,
    newBookYear.value,
    isRead
  );
  newBookName.value = "";
  newBookAuthor.value = "";
  newBookYear.value = "";
  isRead = false;
  return newBook;
}

function toggleReadBook() {
  isRead == false ? (isRead = true) : (isRead = false);
  if (isRead == true) {
    newBookRead.textContent = "Alraedy read";
  } else {
    newBookRead.textContent = "Not yet read";
  }
}

function appendBook(object) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("card");
  const titleParagraph = document.createElement("p");
  newDiv.appendChild(titleParagraph);
  titleParagraph.textContent = object.title;
  const authorParagraph = document.createElement("p");
  authorParagraph.textContent = object.author;
  newDiv.appendChild(authorParagraph);
  const launchYearParagraph = document.createElement("p");
  launchYearParagraph.textContent = object.year;
  newDiv.appendChild(launchYearParagraph);
  const alreadyRead = document.createElement("button");
  alreadyRead.classList.add("btn");
  object.read == true
    ? (alreadyRead.textContent = "Already read")
    : (alreadyRead.textContent = "Not yet read");
  alreadyRead.addEventListener("click", () => {
    alreadyRead.textContent == "Not yet read"
      ? (alreadyRead.textContent = "Already read")
      : (alreadyRead.textContent = "Not yet read");
  });
  newDiv.appendChild(alreadyRead);
  bookCards.appendChild(newDiv);
  myBookLibrary.push(newDiv);
  const deleteNode = document.createElement("button");
  deleteNode.classList.add("btn");
  deleteNode.textContent = "Remove";
  newDiv.appendChild(deleteNode);
  deleteNode.addEventListener("click", () => {
    newDiv.remove();
  });
}

function createBookCard() {
  appendBook(createBook());
  toggleWindow();
}
