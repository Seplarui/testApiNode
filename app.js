'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const api = require('./routes'); //como el fichero es index.js no hace falta indicarlo.

const productCtrl = require ('./controllers/product');

//middlewares -- capas express
app.use(bodyParser.urlencoded({ extended: false }));
//peticiones con formato json
app.use(bodyParser.json());

app.use('/api',api);

module.exports = app;