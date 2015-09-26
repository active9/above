var above = require('../lib/above.js');

function testFunction(fn) {
	fn(console.log('I am testFunction'));
}

testFunction = above(testFunction, function(func, argz, cb) {
	console.log('This was called before testFunction');
	func(cb);
});

testFunction("test", function(argz) {
	console.log("I am a callback.");
});
