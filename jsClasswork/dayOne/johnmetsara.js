var John = {
	name: "John",
	color: "green",
	age: 30
};

var Sara = {
	name: "Sara",
	color: "blue",
	age: "60"
};

var people = [
  John,
  Sara
];

var introduce = function (person1, person2) {
	return(person1 + " met " + person2 + " and then said you are the best");

};

console.log(introduce(John.name, Sara.name))