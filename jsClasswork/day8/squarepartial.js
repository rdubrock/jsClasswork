var _ = require('lodash');

var exponent =  function (b, a) {
    
    return Math.pow(a,b);
}

var toBeSquared = [2,3,4,5,6];

var square = _.curry(exponent)(2);

var squareAll = function(arr) {
    console.log(arr);
    console.log(arr.forEach(square));
    console.log(arr);
    console.log(arr.map(square));
    console.log(arr);
};

var filter = function (arr, func) {
    var array2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            array2.push(arr[i]);
        }
    };
    return array2;
};
var evenNumbers = filter(toBeSquared, function(n) { return (n % 2) === 0; });


/* return arr.map(square);
    
var numbers = [1, 2, 3, 4, 5, 6];
v

console.log(squareAll(toBeSquared)) ;
*/

console.log(evenNumbers);

