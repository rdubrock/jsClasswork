


// var each = function (array, callback) {
// 	array.forEach (function(v, i) {
// 		array[i] = callBack (array[i]);
// 	});

// 	return array;
// };

module.exports = {
	each: function (array, callback) {
	//accepts an array and adds one to each item
	array.forEach (function(v, i) {
		array[i] = callback (array[i]);
	});

	return array;
  },

    sayHello: function() {
	return "hello world";
  },

    version: function(version) {
	version = "Version 0.1.0";

	return version;

  }
};  


module.exports.each = function (array, callback) {
	//accepts an array and adds one to each item
	array.forEach (function(v, i) {
		array[i] = callback (array[i]);
	});

	return array;
};

module.exports.sayHello = function() {
	return "hello world"
};

module.exports.version = function(version) {
	version = "Version 0.1.0";

	return version;

};