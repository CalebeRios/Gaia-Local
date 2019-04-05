const https = require('https');

// const Schema = mongoose.Schema;
//         const locationSchema = new Schema({
//             Lat: String,
//             Lng: String
//         });

//         const Location = mongoose.model('Location', locationSchema);

//         const NewLocation = Location({
//             Lat: this.latitude,
//             Lng: this.longitude,
//             useMongoClient: true
//           });

module.exports = class Local {
    constructor(nome) {
        this.nome = nome;
        //this.requestCoords(nome);
    }
    setLatitude(latitude) {
        this.latitude = latitude
    }
    setLongitude(longitude) {
        this.longitude = longitude;
    }

    requestCoords(nome) {
        let key = `0be76b3fccbe4f768c99643d9f603e84`;

        let data = '';
        let pData;
        return new Promise(function(resolve,reject) {
            https.get(`https://api.opencagedata.com/geocode/v1/json?q=${nome}&key=${key}`, (resp) => {
                resp.on('data', (chunk) => {
                    data += chunk;
                });
                resp.on('end', () => {
                    pData = JSON.parse(data);
                    console.log(pData)
                    //setLatitude(pData.results[1].geometry.lat);
                    //console.log("class lat: " + this.latitude)
                   // this.longitude = pData.results[1].geometry.lng;
                    resolve(pData);
                    // this.saveOnMongo();
                });
            }).on("error", (err) => {
                console.log("Error: " + err.message);
                reject('fuckshit')
            });
        });

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