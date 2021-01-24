const express = require('express');
const bodyparser = require ('body-parser');
const routes = require('./Routes/userRoutes');

const app = express();
app.use( bodyparser.json() );

app.use('/api', routes);

module.exports = app;