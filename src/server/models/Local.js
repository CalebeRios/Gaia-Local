const https = require('https');

module.exports = class Local {
  constructor(name) {
    this.name = name;
  }

  setLatitude(latitude) {
    this.latitude = latitude;
  }

  setLongitude(longitude) {
    this.longitude = longitude;
  }

  requestCoords(name) {
    //const key = process.env.API_KEY;
    const key = '0be76b3fccbe4f768c99643d9f603e84'
    this.key = key;

    let data = '';
    let body;
    return new Promise((resolve, reject) => {
      https.get(`https://api.opencagedata.com/geocode/v1/json?q=${name}&key=${key}`, (resp) => {
        resp.on('data', (chunk) => {
          data += chunk;
        });
        resp.on('end', () => {
          body = JSON.parse(data);
          console.log(body);
          resolve(body);
        });
      }).on('error', (err) => {
        reject(err);
      });
    });
  }
};
