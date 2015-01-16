var fns = require('../prototype.js');


describe("myArray", function() {
	it("should return an object with only unique arguments", function() {
		expect(fns.finalProduct).toEqual([1,2,3]);
	});
});