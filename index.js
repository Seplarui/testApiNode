'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

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

mongoose.connection('mongodb://localhost:27017/shop', (err, res) => {
    if(err) throw err
    console.log('Conexión a la base de datos establecida');

    app.listen(port, () => {
        console.log(`API REST en http://localhost:${port}`);
    })
})

