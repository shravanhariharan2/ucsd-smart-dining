const getResults = require('./web_scraper.js'); 
const db_function = require('./db_function.js'); 

function dining_hall_looper(){
const siteUrlArray2 = ["https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/64",
 "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/01",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/11",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/18",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/05",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/24",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/15",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/06",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/32"];

const siteUrlArray = ["https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/64",
 "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/01",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/11",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/18",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/05",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/24"];


(async () => {
    for(let i = 0; i < 1; i++ ){//siteUrlArray.length instead of 1
        var res = await getResults(siteUrlArray[i]) //pass MEGA JSON to shravan func
        db_function(res)
    }
})()
}

module.exports = dining_hall_looper;






