const https = require('https');

module.exports = {
  requestCoords: (name) => {
    const key = process.env.API_KEY;
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
          resolve(body);
        });
      }).on('error', (err) => {
        reject(err);
      });
    });
  },
};
