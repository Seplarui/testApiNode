
const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3000;

//Conect to MONGODB

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if (err) {
        console.log(`Error al conectar con la base de datos: ${err}`);
    }
    app.listen(port, () => {
        console.log(`API REST en http://localhost:${port}`);
    })
})