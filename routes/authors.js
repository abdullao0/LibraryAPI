// routes/authors.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// GET
router.get('/', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM authors')
    res.json(results.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST
router.post('/', async (req, res) => {
  const { Name, About, DOB } = req.body

  if (!Name || !DOB) {
    return res.status(400).json({ error: 'Missing required fields: Name and DOB (or BirthDate)' })
  }

  try {
    const sql = 'INSERT INTO authors (name, about, dob) VALUES ($1, $2, $3) RETURNING id'
    const results = await db.query(sql, [Name, About, DOB])
    res.json({ message: 'Author added', id: results.rows[0].id })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router;
