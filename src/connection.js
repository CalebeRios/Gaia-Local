module.exports = {
    connect: function () {

        var mongoose = require('mongoose');
        mongoose.Promise = global.Promise;
        
        const options = {
            keepAlive: true,
            socketTimeoutMS: 540000,
            autoReconnect: true,
            reconnectTries: Number.MAX_VALUE,
            autoIndex: false,
            reconnectTries: 30,
            reconnectInterval: 500,
            poolSize: 10,
            bufferMaxEntries: 0
        }

        mongoose.connect("mongodb://mongo:27017/test?authSource=admin", options).then(() => {
            console.log('MongoDB is connected')
        }).catch(err => {
            console.log('MongoDB connection unsuccessful.')
        })

    }
}