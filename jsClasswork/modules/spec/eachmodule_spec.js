var fns = require("../eachmodule.js");

var eachArray = [1, 2, 3, 4, 5];

var callBack = function (x) {
    var x = x + 1;

    return x;
};

var correctAnswer = [2, 3, 4, 5, 6];

describe("each", function(){
	it("applies a callback to an array", function(){
		expect(fns.each(eachArray, callBack)).toEqual(correctAnswer);
	});
});

var helloWorld = "hello world"

describe("sayHello", function() {
	it("makes anything turn in to 'hello world'", function(){
		expect(fns.sayHello(7)).toEqual(helloWorld);
	});
});

var currentVersion = "Version 0.1.0";

describe("version", function() {
	it("exposes the current version", function(){
		expect(fns.version()).toEqual(currentVersion);
	});
});