const Local = require('./Local.js')

module.exports = {

    makeLocal: async function (input) {
        return new Promise(function (resolve, reject) {
            input = 'basilia';
            let local = new Local(input);
            console.log(local.nome)
            local.requestCoords(local.nome).then(function (value) {
                local.latitude = value.results[1].geometry.lat;
                local.longitude = value.results[1].geometry.lng;
                console.log(local.latitude);
                resolve(local);
            });
        })
    }
} 