const sharedConfig = {
  client: 'sqlite3',
  migrations: { directory: './data/migrations' },
  useNullAsDefault: true,
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done);
    },
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './data/devDB.db3' },
    seeds: { directory: './data/seeds' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/testDB.db3' },
    seeds: { directory: './data/seeds' },
  },
};
