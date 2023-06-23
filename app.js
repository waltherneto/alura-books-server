const express = require('express')
const bookRoutes = require('./routes/Book.js')

const app = express()

app.use(express.json())
app.use('/books', bookRoutes)

const port = 8000

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})