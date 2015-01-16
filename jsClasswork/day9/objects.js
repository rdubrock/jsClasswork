var pairs = [1,2,3,4,5];

var numbers = [5,6,7,8];

pairs.reduce = function(reducer, start) {
	
	var smaller = [];
	for (var i = start; i < this.length; i++) {

		smaller.push(reducer(this[i]));

	};
	return smaller;
}

var multiply = function (a) {
	a = a*10;
	return a;
}

// console.log(pairs.reduce(multiply, 2));

// console.log(numbers.reduce(multiply, 0));

module.exports.pairs = pairs;

module.exports.multiply = multiply;