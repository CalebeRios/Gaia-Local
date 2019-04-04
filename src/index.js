const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const connect = require("./connection.js");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
connect.connect();

const Schema = mongoose.Schema;
const locationSchema = new Schema({
  Lat: String,
  Lng: String
});

const Location = mongoose.model('Location', locationSchema);

let data = '';
let key = `yourkey`;
let address = `brasilia`

https.get(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${key}`, (resp) => {
  let data = '';
  resp.on('data', function (chunk) {
    data += chunk;
  });

  app.get('/', (req, res) => {
    let pdata = JSON.parse(data);
    res.json(pdata.results[1].geometry);

    const NewLocation = Location({
      Lat: pdata.results[1].geometry.lat,
      Lng: pdata.results[1].geometry.lng,
      useMongoClient: true
    });

    NewLocation.save(function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("saved");
    })

  });
});
app.listen(3001);

