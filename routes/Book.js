const { Router } = require("express")
const { getBooks, getOneBook, createBook, updateBook, removeBook } = require("../controllers/Book.js")

const router = Router()

router.get('/', getBooks)
router.get('/:id', getOneBook)
router.post('/', createBook)
router.patch('/:id', updateBook)
router.delete('/:id', removeBook)

module.exports = router