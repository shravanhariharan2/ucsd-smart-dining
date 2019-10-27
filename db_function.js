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
      } */

      for(let i = 0; i < value.food.length; i++){
        let data = {
          name: value.food[i],
          price: value.cost[i],
          calories: value.calories[i]
        }
        db.collection(diningHall).doc(value.food[i]).set(data);
      }
      
    
      /*Postcondition: data is uploaded into database
      console.log(value);
      for (let key in value) {
        if (value.hasOwnProperty(key)) {
            console.log(key + " -> " + value[key]);
        }
    } */
  }

  module.exports = db_function;

