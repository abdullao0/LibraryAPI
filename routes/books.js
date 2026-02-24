const express = require('express')
const router = express.Router() 
const db = require('../db')


// GET ALL BOOKS
router.get('/', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM books')
    res.json(results.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

router.post('/', async (req, res) => {
  const { AuthID, Title, Genre, ReleaseDate } = req.body

  try {
    const sql =
      'INSERT INTO books (authid, title, genre, releasedate) VALUES ($1, $2, $3, $4) RETURNING id'
    const results = await db.query(sql, [AuthID, Title, Genre, ReleaseDate])
    res.json({ message: 'Book added', id: results.rows[0].id })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router
