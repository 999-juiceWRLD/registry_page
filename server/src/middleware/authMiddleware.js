const express = require('express');
const { SECRET_KEY } = require('../../server')
const jwt = require('jsonwebtoken')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const checkAuthentication = (req, res, next) => {
    
    const token = req.cookies.jwt;
    if (token) {
        jwt.verify(token, SECRET_KEY, (err, decodedToken) => {
            if (err) {
                console.log(err);
            } else {
                next();
            }
        });
    } else {
        console.log('verified successfully.');
    }
}

// check user function?

module.exports = { checkAuthentication };
