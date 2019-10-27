// const server = require('./server.js');

//Database Writing

function db_function(db, value){
      /*Precondition: JSON of food data for single dining hall. This will run multiple times.
      {
      diningHall: "name of dining hall as string"
      food: [array of food items]
      cost: [array of costs, same order as items]
      calories: [array of calories, same order as items]
      } */
      if(value.foodItems != undefined){
        for(let i = 0; i < value.foodItems.length; i++){
          console.log(typeof value.foodItems[i]);
          if(value.foodItems[i].includes('\/')){
            value.foodItems[i] = value.foodItems[i].replace('\/', '');
          }
          
          let data = {
            name: value.foodItems[i],
            price: value.price[i],
            calories: parseInt(value.calories[i])
          }
          console.log(value.diningHall);
          db.collection(value.diningHall).doc(value.foodItems[i]).set(data)
            .then(doc => {
              console.log("");
            })
            .catch(err => { console.log(err) });
        }
      }    
  }

  module.exports = db_function;

