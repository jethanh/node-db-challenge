const db = require('../data/dbConfig.js');

module.exports = {
    getProjects,
    getProjectById,
    getProjectResources,
    getTasksById
}

function getProjects() {
    return db.select('*').from('projects');
}

function getProjectById(id) {
    let query = db('projects as p')
    return query.where('p.id', id).first();
}

function getProjectResources(id) {
    return db("project_resources")
    .join('recources', 'resources.id', 'project_resources.resource_id')
    .join('projects', 'projects.id', 'project_resources.project_id')
    .select('project.name', 'resources.name')
    .where({'project_resoucres.project_id' : id})
}

function getTasksById(project_id) {
    return db("tasks").where({ project_id });
  }