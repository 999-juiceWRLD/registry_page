const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({ path: __dirname + '/.env' });

const db = process.env.DB_URI_TEST;
const password = process.env.PASSWORD;
const PORT = process.env.PORT;
const SECRET_KEY = process.env.SECRET_KEY;
const TOKEN_EXPIRY_TIME = process.env.TOKEN_EXPIRY_TIME;
const connectDB = () => {
    const modifiedDB = db.replace('<PASSWORD>', password);
    return mongoose
        .connect(modifiedDB)
        .then(() => {
            console.log('connected to db');
        })
        .catch(err => {
            console.log('ERR CATCHED ' + err);
        })
}

module.exports = { connectDB, PORT, SECRET_KEY, TOKEN_EXPIRY_TIME };
