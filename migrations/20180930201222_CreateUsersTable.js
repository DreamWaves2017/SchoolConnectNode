function up(knex, Promise) {
  return knex.schema.createTable('users', (t) => {
    t.uuid('id').primary();
    t.string('email').unique();
    t.string('name');
    t.date('birthday');
    t.string('gender');
    t.string('phone_number');
    t.string('password');
    t.timestamps();
  });
}

function down(knex, Promise) {
  return knex.schema.dropTable('users');
}

module.exports = {up, down};