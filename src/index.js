const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controller.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let input = 'brasilia'

app.get('/', (req, res) => {

  controller.makeLocal(input).then(function (value) {
    res.json({ 
      lat: value.latitude,
      lng: value.longitude
     })
  })

});

app.listen(3001);

