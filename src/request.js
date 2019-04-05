module.exports = {

  request: async function () {

    const https = require('https');

    let data = '';
    let key = `c724a31a3a2645a9b108f081c540143b`;
    let address = `brasilia`
    https.get(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${key}`, (resp) => {
      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        console.log(JSON.parse(data));
        return JSON.parse(data);
      });

    }).on("error", (err) => {
      console.log("Error: " + err.message);
      return err;
    });
  }
}
