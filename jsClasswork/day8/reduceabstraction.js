var _ = require('lodash');

var pairs = [['name', 'JSI'], ['location', { city: 'Portland', 'state': 'OR' }], ['school', 'PCS']];
// _.reduce(pairs, function);
//=> { name: 'JSI', location: { city: 'Portland', state: 'OR' }, school: 'PCS' }
var array = [1,2,3,4,5,1,2,3, 'hello', 'hello', 'goodbye'];

// var myReduce = function (variable, func, accumulator, key) {
// 	var product = accumulator;

// 	variable.forEach(func, );
	
// 	return product;

// }

var myUnique = function(arr) {
	var uniqueValues = [];
	var checkUniqueValues = function (toBeChecked) {
		
		for (var i = 0; i < uniqueValues.length; i++) {
			if (toBeChecked === uniqueValues[i]) {
				return true;
			} 

		}
		return false;
	};
	
	for (var i = 0; i < arr.length; i++) {

		if(checkUniqueValues(arr[i]) === false) {
			uniqueValues.push(arr[i]);
		}
	}
	return uniqueValues;
};


// var reduceExecute = myReduce(array, function(thing, next) {
// 	var newObject = thing;
// 	newObject[nextValue[0]] = nextValue[1]
// 	return newObject;
// }, []);  
// var strings = ['hello', ' ', 'world'];
// var string = _.reduce(strings, function(concatenated, s) { return concatenated + s; }, '');


// var reduce = _.reduce(pairs, function (result, nextValue, key, start) {
	
// 	//take index 0, set equaul to object key
// 	//take index 1, set to contents of index 0
// 	//save result
// 	//move to next
// 	var newObject = result;
// 	newObject[nextValue[0]] = nextValue[1]
// 	return newObject;
// }, {});


console.log(myUnique(array));

