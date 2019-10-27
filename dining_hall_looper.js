const getResults = require('./web_scraper.js'); 

const siteUrlArray = ["https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/64",
 "https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/01",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/11",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/18",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/05",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/24",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/15",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/06",
"https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/MenuItem/32"];


(async () => {
    for(let i = 0; i < siteUrlArray.length; i++ ){//siteUrlArray.length instead of 1
        var res = await getResults(siteUrlArray[i]) //pass MEGA JSON to shravan func
        db_function(res)
    }
})()






