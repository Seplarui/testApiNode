
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

//Conect to MONGODB

mongoose.connect(config.db, (err, res) => {
    if (err) {
        console.log(`Error al conectar con la base de datos: ${err}`);
    }
    app.listen(config.port, () => {
        console.log(`API REST en http://localhost:${config.port}`);
    })
})