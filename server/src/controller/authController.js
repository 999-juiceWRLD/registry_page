const { SECRET_KEY, TOKEN_EXPIRY_TIME } = require('../../server')
const jwt = require('jsonwebtoken')
const User = require('../models/User.model')
const bcrypt = require('bcrypt')


const createToken = (userID) => {
    return jwt.sign({ userID }, SECRET_KEY, { expiresIn: TOKEN_EXPIRY_TIME });
}

const checkUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (user) {
        const isAuthTrue = await bcrypt.compare(password, user.password);
        if (isAuthTrue) {
            return user;
        }
        throw Error('incorrect password.');
    }
    throw Error('incorrect email.');
}

const signUp = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await User.create({ email, password });
        const token = createToken(user._id);
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: TOKEN_EXPIRY_TIME * 1000
        });
        return res.status(201).json({
            data: user._id,
            message: 'user created successfully.'
        });
    } catch (err) {
        return res.status(404).json({
            message: 'ERR CATCHED: ' + err.message
        });
    }    
}

const logIn = async (req, res) => {

    const { email, password } = req.body;
    try {
        const user = await checkUser(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: TOKEN_EXPIRY_TIME
        });
        res.status(200).json({
            status: 'success',
            jwtCookie: token
        });
    } catch (err) {
        return res.status(404).json({
            message: 'ERR CATCHED: ' + err.message
        });
    }
}

const logOut = async (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 });
    // redirect to main page then
}

module.exports = {
    signUp,
    logIn,
    logOut
};
