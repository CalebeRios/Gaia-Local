const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const controller = require('./server/controllers/controller.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  const input = 'brasilia';

  controller.makeLocal(input).then((value) => {
    res.json({
      lat: value.latitude,
      lng: value.longitude,
    });
  }).catch((err) => {
    res.send(err);
  });
});
app.listen(3001);
module.exports = app;
