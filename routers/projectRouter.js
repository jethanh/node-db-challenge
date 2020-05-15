const express = require('express');

const Project = require('./projectModel.js');
const db = require('../data/dbConfig.js');
const router = express.Router();

//get all projects
router.get('/', (req, res) => {
    Project.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

// get project by ID

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Project.getProjectById(id)
        .then(project => {
            if(id) {
                res.status(200).json(project);
            } else {
                res.status(404).json({ error: "No project with that ID." })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err.message })
        })
})

// add new project
router.post("/", (req, res) => {
    const info = req.body
    db("projects")
        .insert(info, "id")
        .then(ids => {
            res.status(201).json({ data: ids })
        })
        .catch(err => {
            res.status(500).json({error: err.message})
        })
    
})


module.exports = router;