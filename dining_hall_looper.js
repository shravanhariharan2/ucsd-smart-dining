const getResults = require('./web_scraper.js'); 
const db_function = require('./db_function.js'); 

<<<<<<< HEAD
function dining_hall_looper(db){

const siteUrlArray = [
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/64",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/01",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/11",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/18",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/05",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/24"];

=======
function dining_hall_looper(){

const siteUrlArray = ["https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/64",
 "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/01",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/11",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/18",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/05",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/24",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/15",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/06",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/32"];

>>>>>>> a7a6f6d562967fd1642f21356f8cbc80605cd07c

(async () => {
    for(let i = 0; i < siteUrlArray.length; i++ ){//siteUrlArray.length instead of 1
        var res = await getResults(siteUrlArray[i]) //pass MEGA JSON to shravan func
        db_function(db, res)
    }
})()
}

module.exports = dining_hall_looper;






