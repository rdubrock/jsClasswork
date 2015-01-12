

var aaron = {
  height: 12,
  age: 50,
  language: "Dutch",
  favoriteBook: "Moby Dick",
}

var matt = {
  height: 9,
  age: 80,
  language: "Spanish",
  favoriteBook: "A Christmas Carol",
  hometown: "Timbuktu"
}

var mike = {
  height: 2,
  age: 15,
  language: "French",
  favoriteBook: "Matilda",
}

var classmates = [
  aaron,
  matt,
  mike
];

classmates.forEach(function(classmate){
	if(classmate.hometown !== undefined) {
    console.log(classmate.hometown);

  }
})