const db = require('../data/dbConfig.js');

module.exports = {
    getTasks,
    getTaskById,
}

function getTasks() {
    return db('projects')
    .join('tasks', 'tasks.project_id', 'projects.id')
    .select('projects.name', 'projects.description as ProjectDescription', 'tasks.notes', 'tasks.description')

}

// //     return db("project_resources")
// .join('recources', 'resources.id', 'project_resources.resource_id')
// .join('projects', 'projects.id', 'project_resources.project_id')
// .select('project.name', 'resources.name')
// .where({'project_resoucres.project_id' : id})

function getTaskById(id) {
    let query = db('tasks as t')
    return query.where('t.id', id).first();
}
