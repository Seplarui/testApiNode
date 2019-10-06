'use strict'

const express = require ('express');
const bodyParser = require ('body-parser');

const app = express()
const port = process.env.PORT || 3000;

//middlewares -- capas express

app.use(bodyParser.urlencoded({extended: false}));
//peticiones con formato json
app.use(bodyParser.json());

//RUTAS

app.get ('/api/product', (req,res) => {

})



app.listen(port, () =>  {
    console.log(`API REST en http://localhost:${port}`);
})