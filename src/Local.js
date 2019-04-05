const https = require('https');
const connect = require("./connection.js");
const mongoose = require('mongoose')

const Schema = mongoose.Schema;
        const locationSchema = new Schema({
            Lat: String,
            Lng: String
        });

        const Location = mongoose.model('Location', locationSchema);

        const NewLocation = Location({
            Lat: this.latitude,
            Lng: this.longitude,
            useMongoClient: true
          });

module.exports = class Local {
    constructor(nome) {
        this.nome = nome;
        //this.requestCoords(nome);
    }
    setLatitude(latitude) {
        this.latitude = latitude
    }

    requestCoords(nome) {
        let key = `c724a31a3a2645a9b108f081c540143b`;

        let data = '';
        let pData;
        return new Promise(function(resolve,reject) {
            https.get(`https://api.opencagedata.com/geocode/v1/json?q=${nome}&key=${key}`, (resp) => {
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    pData = JSON.parse(data);
                    //setLatitude(pData.results[1].geometry.lat);
                    //console.log("class lat: " + this.latitude)
                   // this.longitude = pData.results[1].geometry.lng;
                    resolve(pData);
                    // this.saveOnMongo();
                });
            }).on("error", (err) => {
                console.log("Error: " + err.message);
            });
        })

    }

    // saveOnMongo() {
    //     connect.connect();
        
    //       NewLocation.save(function (err) {
    //         if (err) {
    //           return console.log(err);
    //         }
    //         console.log("saved");
    //       })

    // }

}