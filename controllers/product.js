'use strict'

const Product = require('../models/product');

function getProduct(req, res) {

}

function getProducts(req, res) {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` });
        if (!products) return res.status(404).send({ message: 'No existen productos' });

        res.send(200, { products })

    })
}

function updateProduct(id) {

}

function deleteProduct(id) {

}

module.exports = {
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}