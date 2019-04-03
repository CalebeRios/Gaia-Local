module.exports = {
    connect: function () {

        var mongoose = require('mongoose');

        const options = {
            autoIndex: false, 
            reconnectTries: 30,
            reconnectInterval: 500,
            poolSize: 10,
            bufferMaxEntries: 0
        }

        mongoose.connect("mongodb://mongo:27017/test", options).then(() => {
            console.log('MongoDB is connected')
        }).catch(err => {
            console.log('MongoDB connection unsuccessful.')
        })

    }
}