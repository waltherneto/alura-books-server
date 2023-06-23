const fs = require("fs")

function getAllBooks() {
  return JSON.parse(fs.readFileSync("books.json"))
}

function getBookByID(id) {
  const books = JSON.parse(fs.readFileSync("books.json"))

  const filteredBook = books.filter ( book => book.id == id )[0]
  return filteredBook
}

function postBook(newBook) {
  const books = JSON.parse(fs.readFileSync("books.json"))

  const newBookList = [...books, newBook]

  fs.writeFileSync("books.json", JSON.stringify(newBookList))
}

function modifyBook(data, id) {
  let books = JSON.parse(fs.readFileSync("books.json"))

  const modifyIndex = books.findIndex( book => book.id == id )

  const newContent = { ...books[modifyIndex], ...data }

  books[modifyIndex] = newContent

  fs.writeFileSync("books.json", JSON.stringify(books))
}

function deleteBook(id) {
  let books = JSON.parse(fs.readFileSync("books.json"))

  const filteredBook = books.filter ( book => book.id != id )

  fs.writeFileSync("books.json", JSON.stringify(filteredBook))
}

module.exports = {
  getAllBooks,
  getBookByID,
  postBook,
  modifyBook,
  deleteBook
}