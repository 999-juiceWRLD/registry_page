const express = require('express')
const { signUp, logIn, logOut } = require('../controller/authController')

const router = express.Router();
router.use(express.json());

router
    .route('/sign-up')
    .post(signUp)

router
    .route('/login')
    .post(logIn)

router
    .route('/logout')
    .get(logOut)

module.exports = router;
