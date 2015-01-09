module.exports = {
	preheat : function () {
		//makes the oven a certain temp
		console.log ('preheating!');
	},

	addItem : function () {
		//puts item into the oven
		console.log ('put it in the oven!');
	},

	removeItem : function () {
		//take item out of the oven
		console.log ('you got it back out of the oven!');
	},

	setTimer : function (number, units, callBack) {
	var milliseconds = null;
	if (units === "hours") {
		milliseconds = number * 3600000;
	} else if (units === "minutes") {
		milliseconds = number * 60000;
	} else if (units === "seconds") {
		milliseconds = number * 1000;
	} else if (units === "milliseconds") {
		milliseconds = number;
	} else {
		console.log ("Incorrect units, try again with hours, minutes, seconds or milliseconds!")
	};


	setTimeout(callBack, milliseconds)
	
	//takes number
	  //if

	}

};


// setTimer = function(number, units, finishingfunction) {
// 	var milliseconds = "";
// 	if (units === "hours") {
// 		milliseconds = number * 3600000;
// 	} else if (units === "minutes") {
// 		milliseconds = number * 60000;
// 	} else if (units === "seconds") {
// 		milliseconds = number * 1000;
// 	} else if (units === "milliseconds") {
// 		milliseconds = number;
// 	} else {
// 		console.log ("Incorrect units, try again with hours, minutes, seconds or milliseconds!")
// 	}

//     setTimeout(console.log('timer done!'), milliseconds)

// }


// 	setTimeout(console.log('timer done!', milliseconds)
// 	//takes number
// 	  //if
// 	//takes unit
// }

// setTimeout(some_callback, milliseconds)