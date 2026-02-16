// routes/authors.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// GET 
router.get('/', (req, res) => {
    db.query('SELECT * FROM Authors', (err, results) => {
        if (err) return res.status(500).json({error:err.message})
            res.json(results)
    })
})

// POST 
router.post('/', (req, res) => {
    const { Name, About, DOB } = req.body;

    if (!Name || !DOB) {
        return res.status(400).json({ error: 'Missing required fields: Name and DOB (or BirthDate)' });
    }

    const sql = 'INSERT INTO Authors (Name, About, DOB) VALUES (?, ?, ?)';
    db.query(sql, [Name, About, DOB], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Author added', id: results.insertId });
    });
});

module.exports = router;
