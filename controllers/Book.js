const fs = require("fs")
const { getAllBooks, getBookByID, postBook, modifyBook, deleteBook } = require("../services/Books")

function getBooks(_, res) {
  try {
    const books = getAllBooks()
    res.send(books);
  } catch (error) {
    res.status(500);
    res.send(error.message)
  }
}

function getOneBook(req, res) {
  try {
    const id = req.params.id
    const bookByID = getBookByID(id)
    res.send(bookByID);
  } catch (error) {
    res.status(500);
    res.send(error.message)
  }
}

function createBook(req, res) {
  try {
    const newData = req.body
    const addedBook = postBook(newData);

    res.status(201);
    res.send(`Livro criado com sucesso!`);
  } catch (error) {
    res.status(500);
    res.send(error.message)
  }
}

function updateBook(req, res) {
  try {
    const bookID = req.params.id
    const newContent = req.body
    const returnBook = modifyBook(newContent, bookID);

    res.status(200);
    res.send(`O livro foi modificado com sucesso!`);
  } catch(error) {
    res.status(500);
    res.send(error.message)
  }
}

function removeBook(req, res) {
  try {
    const bookID = req.params.id
    deleteBook(bookID);

    res.status(200);
    res.send(`O livro foi removido com sucesso!`);
  } catch(error) {
    res.status(500);
    res.send(error.message)
  }
}



module.exports = {
  getBooks,
  getOneBook,
  createBook,
  updateBook,
  removeBook
}