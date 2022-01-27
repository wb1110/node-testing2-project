const testing = [
  { full_name: 'will buchanan', email: 'will@gmail.com' },
  { full_name: 'jen buchanan', email: 'jen@gmail.com' },
  { full_name: 'bill buchanan', email: 'bill@gmail.com' },
];

exports.seed = async function (knex) {
  await knex('testing').insert(testing);
};
