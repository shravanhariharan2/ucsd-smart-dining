const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const serviceAccount = require("./config/ServiceAccountKey.json");

const app = express();

//Database initialization
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://ucsd-smart-dining.firebaseio.com'
})

const db = admin.firestore();
const sampleData = {
    quote: "Hello world!",
    author: "Shravan"
}
db.collection('sampleData').doc('inspiration').set(sampleData)
  .then(() => console.log("Data added"))
  .catch((err) => console.log(err));

// BodyParser Middleware
app.use(bodyParser.json());


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));