const express = require('express');
const router = express.Router();
const db = require('../db');

// GET
router.get('/', async (req, res) => {
  try {
    const results = await db.query('SELECT * FROM members')
    res.json(results.rows)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST
router.post('/', async (req, res) => {
  const { Name, ContactInfo } = req.body

  try {
    const sql = 'INSERT INTO members (name, contactinfo) VALUES ($1, $2) RETURNING id'
    const results = await db.query(sql, [Name, ContactInfo])
    res.json({ message: 'Member added', id: results.rows[0].id })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router;
