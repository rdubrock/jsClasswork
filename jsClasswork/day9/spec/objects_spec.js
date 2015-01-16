var fns = require('../objects.js');

describe("pairs.reduce", function() {
	it("should perform a function on each element of an array", function() {
		expect(fns.pairs.reduce(fns.multiply, 2)).toEqual([30,40,50]);
	});
});