const express = require('express');

const Task = require('./taskModel.js');
const db = require('../data/dbConfig.js');

const router = express.Router();

// get all tasks
router.get('/', (req, res) => {
    Task.getTasks()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

//add task

router.post("/", (req, res) => {
    const info = req.body
    db("tasks")
        .insert(info, "id")
        .then(ids => {
            res.status(201).json({ data: ids })
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
    
})

module.exports = router;