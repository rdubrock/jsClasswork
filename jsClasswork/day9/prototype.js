
var toEnter = (1,2,3,3,3,4,5,6,'this','this','that');

Array.prototype.uniquer = function () {
		var uniqueValues = [];
		var checkUniqueValues = function (toBeChecked) {   //takes current element of arr and compares to elements in uniqueValues
			
			for (var i = 0; i < uniqueValues.length; i++) {
				if (toBeChecked === uniqueValues[i]) {
					return true;
				} 			
			}
			return false;
		
		};
		
		for (var i = 0; i < this.length; i++) { //spins through arr

			if(checkUniqueValues(this[i]) === false) { //calls checkUniqueValues for each element of the array
				uniqueValues.push(this[i]); //if checkUniqueValues returns false, current element of arr is pushed to uniqueValues
			}
		}
		return uniqueValues;
};


var testArray = [1,2,3,3,3,3,3]

var finalProduct = testArray.uniquer();

module.exports.finalProduct = finalProduct;


