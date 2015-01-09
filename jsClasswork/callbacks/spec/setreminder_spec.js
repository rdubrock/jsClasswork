var fns = require ('../setreminder.js');

var currentDate = 5;

describe("setreminder", function (){
	it("should tell you whether you have an appointment today", function(){
		
		expect(fns.setReminder(currentDate)).toEqual("You have an appointment");
	});
});
