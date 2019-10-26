function db_function(value){ //leave as is 
//Precondition: JSON OF ALL FOOD DATA 
//Postcondition: data is uploaded into database
      //console.log(value);
      for (let key in value) {
        if (value.hasOwnProperty(key)) {
            console.log(key + " -> " + value[key]);
        }
    }
  }

  module.exports = db_function; //leave as is
