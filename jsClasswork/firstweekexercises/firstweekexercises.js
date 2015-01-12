module.exports.addTwo = function(n) {
    return n + 2;
}

module.exports.halve = function(n) {
    return n / 2;
}

module.exports.invert = function(n) {
	if (n != 0) {
		return 1 / n;
	} else {
		return 0;
	}
}

module.exports.reverse = function(arr) {
	
	// var output = function () {
	// 	for(var i = arr.length; i > 0; i--) {
	// 	console.log(i)
	// };

	arr.reverse();

	return arr;
	
}

module.exports.inits = function(arr) {
	var indexPrint = function () {
		for (var i = 0; i <= arr.length; i++) {
			return arr;
		}
	};
	arr.forEach (indexPrint);
	return indexPrin
}