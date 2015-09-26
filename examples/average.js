var above = require('../lib/above.js');

function testFunction(data, datab) {
	console.log('I am testFunction', data, datab);
}

testFunction = above(testFunction, function(func, argz, argy) {
	console.log('This was called before testFunction');
	func(argz, argy);
});

testFunction("Hello", "World");
