const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

    let minCalories = 0;
    let maxCalories = 5000;

    let sixtyFour = req.app.get('64 Degrees');
    let pines = req.app.get('Pines');
    let cafeV = req.app.get('Cafe Ventanas');
    let roots = req.app.get('Roots');
    let wft = req.app.get('Warren Food Trucks');
    let clubMed = req.app.get('Club Med');
    let ovt = req.app.get('OVT');
    let foodworx = req.app.get('Foodworx');
    let goodys = req.app.get('Goody\'s');

    res.render('dining', { 
        sixtyFour : sixtyFour,
        pines : pines,
        cafeV : cafeV,
        roots : roots,
        ovt : ovt,
        wft : wft,
        clubMed : clubMed,
        foodworx : foodworx,
        goodys : goodys,
        minCalories : minCalories,
        maxCalories : maxCalories
    });
});

router.post('/', (req, res) => {

    console.log(req);

    let minCalories = req.body.searchone;
    let maxCalories = req.body.searchtwo;

    let sixtyFour = req.app.get('64 Degrees');
    let pines = req.app.get('Pines');
    let cafeV = req.app.get('Cafe Ventanas');
    let roots = req.app.get('Roots');
    let wft = req.app.get('Warren Food Trucks');
    let clubMed = req.app.get('Club Med');
    let ovt = req.app.get('OceanView');
    let foodworx = req.app.get('Foodworx');
    let goodys = req.app.get('Goody\'s');

    res.render('dining', { 
        sixtyFour : sixtyFour,
        pines : pines,
        cafeV : cafeV,
        roots : roots,
        ovt : ovt,
        wft : wft,
        clubMed : clubMed,
        foodworx : foodworx,
        goodys : goodys,
        minCalories : minCalories,
        maxCalories : maxCalories
    });
});


module.exports = router;