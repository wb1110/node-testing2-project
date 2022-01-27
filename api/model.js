const db = require('../data/dbConfig');

function get() {
  return db('testing');
}

function getById(testing_id) {// eslint-disable-line
  return db('testing').where({ testing_id });// eslint-disable-line
}

async function insert(newUser) {
  const addUser = await db('testing').insert(newUser);
  if (addUser) {
    return db('testing').where('testing_id', addUser);
  }
  return { message: 'ERROR!' };
}

module.exports = {
  get,
  getById,
  insert,
};
