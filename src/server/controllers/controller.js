const express = require('express');

const makeLocal = require('../models/makeLocal.js');

const router = express.Router();

router.get('/local', (req, res) => {
  console.log(req.query.address)
  makeLocal.makeLocal(req.query.address).then((value) => {
    res.json({
      lat: value.latitude,
      lng: value.longitude,
    });
  }).catch((err) => {
    res.send(err);
  });
});
module.exports = app => app.use('/', router);
