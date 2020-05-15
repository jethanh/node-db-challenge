
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 255)
        .notNullable();
        tbl.string('description');
        tbl.boolean('completed')
        .defaultTo(false);
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 255)
        .notNullable();
        tbl.string('notes', 255);
        tbl.boolean('completed')
        .defaultTo(false);
        //foreign key to project
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
 })

 .createTable('resources', tbl => {
     tbl.increments();
     tbl.string('name', 255)
     .unique()
     .notNullable();
     tbl.string('description', 255)
 })

 .createTable('project_resources', tbl => {
     tbl.increments();
     //foreign key that points to project
     tbl.integer("project_id")
     .unsigned()
     .references('id')
     .inTable('projects')
     .onDelete('CASCADE')
     .onUpdate('CASCADE');
     //foreign key that points to resources
     tbl.integer("resource_id")
     .unsigned()
     .references('id')
     .inTable('resources')
     .onDelete('CASCADE')
     .onUpdate('CASCADE');
 })
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
};
