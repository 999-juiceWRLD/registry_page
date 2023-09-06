const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter your email.'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email address.']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password.'],
        minlength: [6, 'The password must have at minimum six characters.']
    }
})

userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('User', userSchema);
module.exports = User;
