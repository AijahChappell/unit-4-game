$(document).ready(function() {
    var wins = 0;
    let losses = 0;
    let currentCrystal = 0;
    
    let redCrystal = 0;
    let blueCrystal = 0;
    let greenCrystal = 0;
    let yellowCrystal = 0;

    function newGame() {
        $("#PointsToMatch").empty();
        randomNumber();
        currentCrystal = 0;
        randomCrystalNumber();
        $("#scoreScreen").empty();
        $("#scoreScreen").append(currentCrystal);
    };

    function randomNumber() {
        let gameNumber = (Math.floor(Math.random()*100) + 21);
        $("#PointsToMatch").append(gameNumber);
    };

    function randomCrystalNumber() {
        redCrystal = Math.floor((Math.random()*11)+1);
        blueCrystal = Math.floor((Math.random()*11)+1);
        yellowCrystal = Math.floor((Math.random()*11)+1);
        greenCrystal = Math.floor((Math.random()*11)+1);
        let ranCrystal = Math.floor(Math.random()*4);
        if (ranCrystal === 0) {
            redCrystal = 1;
        } else if(ranCrystal === 1) {
            blueCrystal = 1;
        } else if(ranCrystal === 2) {
            yellowCrystal = 1;
        } else if(ranCrystal === 3) {
            greenCrystal = 1;
        };
    };

    
});