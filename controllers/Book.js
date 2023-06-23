const fs = require("fs")
const { getAllBooks, getBookByID, postBook, modifyBook, deleteBook } = require("../services/Books")

function getBooks(_, res) {
  try {
    const books = getAllBooks()
    res.send(books);
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function getOneBook(req, res) {
  try {
    const bookID = req.params.id

    if(bookID && Number(bookID)) {
      const bookByID = getBookByID(bookID)
      res.send(bookByID)
    } else {
      res.status(422)
      res.send(`ID inválido`)      
    }

  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function createBook(req, res) {
  try {
    const newData = req.body

    if(req.body.name) {
      postBook(newData)
      res.status(201);
      res.send(`Livro criado com sucesso!`)
    } else {
      res.status(422)
      res.send(`O campo Name é obrigatório!`)
    }
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

function updateBook(req, res) {
  try {
    const bookID = req.params.id
    const newContent = req.body

    if(bookID && Number(bookID)) {
      modifyBook(newContent, bookID)
      res.status(200)
      res.send(`O livro foi modificado com sucesso!`)
    } else {
      res.status(422)
      res.send(`ID inválido`)
    }
  } catch(error) {
    res.status(500)
    res.send(error.message)
  }
}

function removeBook(req, res) {
  try {
    const bookID = req.params.id

    if(bookID && Number(bookID)) {
      deleteBook(bookID)
      res.status(200)
      res.send(`O livro foi removido com sucesso!`)
    } else {
      res.status(422)
      res.send(`ID inválido`)
    }
  } catch(error) {
    res.status(500)
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