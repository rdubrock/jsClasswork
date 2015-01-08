var fns = require("../eachmodule.js");

var eachArray = [1, 2, 3, 4, 5];

var callBack = function (x) {
    var x = x + 1;

    return x;
};

var correctAnswer = [2, 3, 4, 5, 6];

decribe("each", function(){
	it("applies a callback to an array", function(){
		expect(fns.each(eachArray, callBack)).toEqual(correctAnswer);
	});
});