//#!/usr/bin/env node

//var cake = require('commander');

var oven = require('./oven.js');

oven.preheat('350deg');

// make the cake batter
var batter = ['flour', 'eggs', 'butter'];
var pan = {
  type: 'pan',
  diameter: '9in',
  shape: 'round'
};

var pour = function () {
	console.log ('you poured the batter');
};

var mix = function () {
	console.log ('you mixed the batter');
};
var decorate = function () {
	console.log('You have created the most beautiful cake in all the land!');
}
var cake = pour(pan, batter);
var frosting = null;


// bake the cake
oven.addItem(cake);
oven.setTimer(30);
oven.removeItem(cake);
decorate(cake);
// frost the cake
frosting =  mix(['sugar', 'butter', 'cocoa powder']);