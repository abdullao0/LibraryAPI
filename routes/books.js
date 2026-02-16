const express = require('express')
const router = express.Router() 
const db = require('../db')


// GET ALL BOOKS
router.get('/',(req, res) => {
    db.query('SELECT * FROM Books', (err, results) => {
        if (err) return res.status(500).json({error:err.message})
            res.json(results)
    })
})

router.post('/',(req,res) => {
    const { AuthID, Title, Genre, ReleaseDate} = req.body
    const sql = 'INSERT INTO Books (AuthID, Title, Genre, ReleaseDate) VALUES (?, ?, ?, ?)'
    db.query(sql, [AuthID, Title, Genre, ReleaseDate], (err, results) => {
        if (err) return res.status(500).json({ error: err.message })
        res.json({ message: 'Book added', id: results.insertId })
    })
})

module.exports = router