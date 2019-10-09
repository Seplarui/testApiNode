'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productCtrl = require ('./controllers/product');

const app = express()
const port = process.env.PORT || 3000;

//middlewares -- capas express

app.use(bodyParser.urlencoded({ extended: false }));
//peticiones con formato json
app.use(bodyParser.json());

//RUTAS

app.get('/api/product',productCtrl.getProducts);

app.get('/api/product/:productId', productCtrl.getProduct);

app.post('/api/product', productCtrl.saveProduct);

app.put('/api/product/:productId',productCtrl.updateProduct);

app.delete('/api/product/:productId', productCtrl.deleteProduct);


//Conect to MONGODB

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if (err) {
        console.log(`Error al conectar con la base de datos: ${err}`);
    }


    app.listen(port, () => {
        console.log(`API REST en http://localhost:${port}`);
    })
})

