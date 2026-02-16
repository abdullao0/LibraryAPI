const express = require('express');
const router = express.Router();
const db = require('../db');

// GET 
router.get('/', (req, res) => {
    db.query('SELECT * FROM Members', (err, results) => {
        if (err) return res.status(500).json({error:err.message})
            res.json(results)
    })
})

// POST 
router.post('/',(req,res) => {
    const {Name, ContactInfo} = req.body
    const sql = 'INSERT INTO Members (Name, ContactInfo) VALUES (?, ?)'
    db.query(sql, [Name, ContactInfo], (err, results) => {
        if (err) return res.status(500).json({ error: err.message })
        res.json({ message: 'Member added', id: results.insertId })
    })
})

module.exports = router;
