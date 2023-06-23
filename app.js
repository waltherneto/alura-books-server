const express = require('express')
const cors = require('cors')
const bookRoutes = require('./routes/Book.js')

const app = express()

app.use(express.json())
app.use(cors({origin: '*'}))

app.use('/books', bookRoutes)

const port = 8000

app.listen(port, () => {
  console.log(`Escutando a porta ${port}`)
})