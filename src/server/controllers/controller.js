const express = require('express');

const makeLocal = require('../models/makeLocal.js');

const router = express.Router();

router.get('/local', (req, res) => {
  makeLocal.makeLocal(req.query.address).then((value) => {
    res.json({
      lat: value.latitude,
      lng: value.longitude,
    });
  }).catch(() => {
    res.json({ "lat": "null", "lng": "null" });
  });
});
module.exports = app => app.use('/', router);
