
export default {
  orm: {
    db: {
      client: 'postgresql',
      connection: {
        database: 'dev',
        host: 'localhost',
        port: 5432
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: 'knex_migrations'
    },
    redis: {
      host: 'localhost',
      port: '6379'
    }
  },

  auth: {
    lifetime: 2 * 24 * 3600 * 1000
  },

  http: {
    host: '0.0.0.0',
    port: 3000
  }
};

