const https = require('https');
const mongoose = require('mongoose');
const mongooseConnection = require('../config/mongooseConnection.js');

const Schema = mongoose.Schema;
const locationSchema = new Schema({
  name: String,
  latitude: String,
  longitude: String
});
const Location = mongoose.model('Location', locationSchema);

module.exports = {
  requestCoords: (name) => {
    const key = process.env.API_KEY;
    this.key = key;

    let data = '';
    let body;
    return new Promise((resolve, reject) => {
      Location.findOne({ name: name }, (err, local) => { return local }).exec();
      if (local) {
        console.log('if')
        resolve(local);
      } else {
        console.log('else')
        https.get(`https://api.opencagedata.com/geocode/v1/json?q=${name}&key=${key}`, (resp) => {
          resp.on('data', (chunk) => {
            data += chunk;
          });
          resp.on('end', () => {
            body = JSON.parse(data);
            var local = new Location({
              name: name,
              latitude: body.results[1].geometry.lat,//nao tenho certeza disso man
              longitude: body.results[1].geometry.lng
            });
            local.save((err, local) => {
              if (err) {
                console.error(err);
                reject(err)
              }
              console.log(local);
            })
            resolve(body);
          });
        }).on('error', (err) => {
          zz
          reject(err);
        });

      }
    });
  },
};
