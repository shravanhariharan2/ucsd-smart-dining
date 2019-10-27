function db_function(value){ //leave as is 
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
  }

  module.exports = db_function; //leave as is
