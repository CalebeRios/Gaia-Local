const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/controllers/controller.js')(app);

app.get('/', (req, res) => {
  res.json({ Hello: 'World' });
});
app.listen(3001);
module.exports = app;
