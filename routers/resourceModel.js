const db = require('../data/dbConfig.js');

module.exports = {
    getResources
}

function getResources() {
    return db.select('*').from('resources');
}
