require('dotenv').config()
const db = require('../db')

const express = require('express')
const app = express()
app.use(express.json())



const booksRoutes = require('../routes/books')

const authorsRoutes = require('../routes/authors');

const membersRoutes = require('../routes/members');

app.use('/books',booksRoutes)

app.use('/authors',authorsRoutes)

app.use('/members', membersRoutes);



app.get('/',(req, res) => {

    res.json({message:'Library API running'})
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

module.exports = app