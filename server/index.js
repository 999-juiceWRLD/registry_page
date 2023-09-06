// winston.js for logging
// date-fns for date
// request-ip package for client ip address
// also there's another package called ip

const express = require('express')
const { connectDB,  PORT}= require('./server')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const router = require('./src/routes/authRoutes')

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors(
    {
        origin: ['*'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        credentials: false
    }
));

(async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log('be listening on ' + PORT);
        })
    } catch (err) {
        console.log(err);
    }
})();

app.use('/', router);

app.get('/', (req, res) => {
    res.send('ayyo wassup');
})
