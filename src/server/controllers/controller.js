const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const makeLocal = require('../models/makeLocal.js');
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


router.get('/local/:address', (req, res) => {
    makeLocal.makeLocal(req.params.address).then((value) => {
        res.json({
            lat: value.latitude,
            lng: value.longitude,
        });
    }).catch((err) => {
        res.send(err);
    });
}) 
module.exports = app => app.use('/', router);