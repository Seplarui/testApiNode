'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config');

function createToken(user) {

    const payload = {  //objetos que viajan cliente servidor
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
    }

    jwt.encode(payload, config.SECRET_TOKEN);
}

module.exports = createToken