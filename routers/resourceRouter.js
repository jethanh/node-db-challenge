const express = require('express');

const Resource = require('./resourceModel.js');
const db = require("../data/dbConfig");

const router = express.Router();


router.get('/', (req, res) => {
    Resource.getResources()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

router.post("/", (req, res) => {
    const info = req.body
    db("resources")
        .insert(info, "id")
        .then(ids => {
            res.status(201).json({ data: ids })
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
    
})

module.exports = router;