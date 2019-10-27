const cheerio = require("cheerio");
const axios = require("axios");


let diningHall = "";

const fetchData = async (siteUrl) => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const getResults = async (siteUrl2) => {
    let foodItems = new Set();
    let links = new Set();
    const price = new Set();
    const calories = new Set();
    const isVegan = new Set();
    const isVegetarian = new Set();
    const isGF = new Set();

    //console.log("getting")
  const $ = await fetchData(siteUrl2);
  diningHall = $('#facility').text();

  $("#menuContainer").each((index, element) => {
    foodItems.add($(element).text());
  });  

  $('a').each((index, element) => {
   links.add('https://hdh-web.ucsd.edu' + $(element).attr('href'));
  }); 


  const grossJson = {
    foodItems: [...foodItems],
    diningHall,
    links:  [...links],
  };
  //console.log("cleaning...", grossJson.foodItems.map(i => i.replace(/\s\s+/g, ' ')))
  
  return clean_json(grossJson);

};

 
const clean_json = (json) =>{ //takes in a json and cleans data
    let row = json.foodItems[0].split("\n");
    let filtered = row.filter(function(json, index, arr){//removes anything wihout dollar sign
        return json.includes('$');
    });
    filtered = filtered.map(function(e){//remove whitespace
        return e.trim();
    });
    filtered = filtered.filter(function(e, index, arr){//removes non entrees
        return e.substring(e.indexOf('$')+1,e.length) >= 4.00;
    });
    json.foodItems = filtered.map(function(e){//fills in just food
        return e.substring(0,e.indexOf('$')-1);
    });
    json.price = filtered.map(function(e){//fills in just costs
        return e.substring(e.indexOf('$'),e.length);
    });
    json.links = json.links.filter(function(json, index, arr){//removes anything wihout dollar sign
        return json.includes('https://hdh-web.ucsd.edu/dining/apps/diningservices/Restaurants/nutritionfacts2/');
    });
    json = follow_links(json);
    return json; 
}

const follow_links = async (json) =>{
    let calories  = [];
    let used  = [];
    for(let i = 0; i < json.links.length; i++){ // !!!!!!!!!!!!!!!!!!!!!!!
        let info = await follow_link(json, json.links[i],calories);
        if(info[0] != -1 && !used.includes(info[1])){
            calories.push(info[0]);
            used.push(info[1]);
        }

    }
    json["calories"] = calories;
    delete json["links"];
    return json;
}


const follow_link = async (json, link,calories) =>{
    const $ = await fetchData(link);

    let name = $('h1').last().text().trim();

    let cals = $('td').first().text();

    if(json.foodItems.includes(name)){
        return [cals, name];
    }
    else{
        return [-1,''];
    }
    
}

module.exports = getResults;


  
