const express = require('express');
const morgan = require('morgan');
const indexRoutes = require('./routes/index');

const app = express();

// Routes
app.use(indexRoutes);


// Middelwares
app.use(morgan('dev'));

module.exports = app;