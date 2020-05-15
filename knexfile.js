module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/data.db3' // put db filename in here
        },
        useNullAsDefault: true,
        migrations: {
            directory: './data/migrations' // put migrations here
        },
        seeds: {
            directory: './data/' // put seeds here
        },
        pool: {
            afterCreate: (conn, done) => {
                conn.run('PRAGMA foreign_keys = ON', done);
            }
        },
    }

};