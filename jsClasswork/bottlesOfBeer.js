
var bottlesOfBeer = 99;

var singAboutBottles = function() {
    for (bottlesOfBeer; bottlesOfBeer >= 1; bottlesOfBeer-1) {
      console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer, take one down, pass it around, " + (bottlesOfBeer - 1) + " bottles of beer on the wall!");
      bottlesOfBeer = bottlesOfBeer - 1;

}}

console.log(singAboutBottles(bottlesOfBeer));