<<<<<<< HEAD
const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require("./config/ServiceAccountKey.json");

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

function db_function(value){
/*Precondition: JSON of food data for single dining hall. This will run multiple times.
      {
      diningHall: "name of dining hall as string"
      food: [array of food items]
      cost: [array of costs, same order as items]
      calories: [array of calories, same order as items]
      **NOT SURE IF I"LL GET THIS IN TIME**
      isVegan: [array of booleans, same order as items]
      isVegetarian: [array of booleans, same order as items]
      isGF: [array of booleans, same order as items]
      isDairy: [array of booleans, same order as items]
      }
//Postcondition: data is uploaded into database
      //console.log(value);
      for (let key in value) {
        if (value.hasOwnProperty(key)) {
            console.log(key + " -> " + value[key]);
        }
    }
    */
  }
  
  module.exports = db_function; //leave as is
=======
function db_function(json){
    console.log(json);
    // console.log(json.diningHall);
    // console.log(json.foodItems.length);
    // console.log(json.price.length);
        // console.log(json.links.length);
  }


  module.exports = db_function;
>>>>>>> bd771a08d0c66eca22cfeff7df5f097107f8c08c
