var beenDone = false

var once = function (fn) {

	return function () {
		if (beenDone === true) {
			console.log("The shark already ate you, man. He ain't gonna eat you again.")
		} else {
			beenDone = true;
			return fn();
		}
	}
}

var eatenByAShark = once(function() {

	console.log('You only get eaten by a shark once.');
});

eatenByAShark();
eatenByAShark();