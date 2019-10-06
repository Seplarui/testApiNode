'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Product = require('./models/product');

const app = express()
const port = process.env.PORT || 3000;

//middlewares -- capas express

app.use(bodyParser.urlencoded({ extended: false }));
//peticiones con formato json
app.use(bodyParser.json());

//RUTAS

app.get('/api/product', (req, res) => {
    res.send(200, { products: [] })
})

app.get('/api/product/:productId', (req, res) => {

})

app.post('/api/product', (req, res) => {
    console.log(req.body)
    res.status(200).send({ message: 'El producto se ha recibido' })
})

app.put('/api/product/:productId', (req, res) => {

})

app.delete('/api/product/:productId', (req, res) => {

})


//Conect to MONGODB

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if(err) {
        console.log(`Error al conectar con la base de datos: ${err}`);
    }
    

    app.listen(port, () => {
        console.log(`API REST en http://localhost:${port}`);
    })
})

