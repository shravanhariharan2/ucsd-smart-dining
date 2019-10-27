const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const serviceAccount = require("./config/ServiceAccountKey.json");
const expressLayout = require('express-ejs-layouts');

const app = express();

// EJS
app.use(express.static("./views/static"));
app.set('view engine', 'ejs');

//Database initialization
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ucsd-smart-dining.firebaseio.com'
})
const db = admin.firestore();

// BodyParser Middleware
app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/index'));
app.use('/dining', require('./routes/dining'));
app.use('/calorie', require('./routes/calorie'));
app.use('/about', require('./routes/about'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));