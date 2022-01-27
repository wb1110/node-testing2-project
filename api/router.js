const express = require('express');

const router = express.Router();
const Model = require('./model');

router.get('/', (req, res, next) => {
  Model.get()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/:id', (req, res, next) => {
  Model.getById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  Model.insert(req.body)
    .then((addUser) => {
      res.status(200).json(addUser);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
