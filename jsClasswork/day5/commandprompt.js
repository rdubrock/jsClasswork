// var readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("What do you think of node.js? ", function(answer) {
//   // TODO: Log the answer in a database
//   console.log("Thank you for your valuable feedback:", answer);

//   rl.close();
// });

var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question("Hey, you are going to add two numbers together. Pick your first number:", function (answer1) {

	rl.question("Now pick the second number", function (answer2) {


		console.log("The sum of your two numbers is: ", parseInt(answer1) + parseInt(answer2));

		rl.close()

	});
	


});



