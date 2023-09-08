let errors = {};

const handleErrors = (err) => {
    console.log(err.message, err.code);
}

module.exports = handleErrors;
