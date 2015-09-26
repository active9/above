var above = require('../lib/above.js');

function testFunction() {
	console.log('I am testFunction');
}

testFunction = above(testFunction, function(func) {
	console.log('This was called before testFunction');
	func();
});

testFunction();
