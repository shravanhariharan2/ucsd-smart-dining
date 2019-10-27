const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const serviceAccount = require("./config/ServiceAccountKey.json");
const expressLayout = require('express-ejs-layouts');
const diningHallLooper = require('./dining_hall_looper.js'); 

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

// Database Reading
let restaurants = ['64 Degrees', 'Cafe Ventanas', 'Pines', 'OVT', 'Foodworx', 'Goody\'s', 'Warren Food Trucks', 'Roots', 'Club Med'];
restaurants.forEach(restName => {

  let restArray = [];

  const restRef = db.collection(restName);
  let query = restRef.get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    snapshot.forEach(doc => {
      restArray.push(doc.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

  app.set(restName, restArray);
});


// BodyParser Middleware
app.use(bodyParser.urlencoded({ extended: true })); 

// Routes
app.use('/', require('./routes/index'));
app.use('/dining', require('./routes/dining'));
app.use('/calorie', require('./routes/calorie'));
app.use('/about', require('./routes/about'));

app.post('/test', (req, res) => {
  console.log(req);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));