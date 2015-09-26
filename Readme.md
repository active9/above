#Above
![Simple Javascript Function Hooking](https://raw.githubusercontent.com/active9/above/master/above.png)

Above is a simple pre function hook written in NodeJS.

#INSTALLING
Using Git:
```bash
git clone https://github.com/active9/above
cd above*
npm install
```

Using NPM:
```bash
npm install above
```

#MODULE
Above may run included as a module in your projects.
```js
var above = require('above');

function testFunction() {
	console.log('I am testFunction');
}

testFunction = above(testFunction, function(func) {
	console.log('This was called before testFunction');
	func();
});

testFunction();

```

#EXAMPLES
More examples in the [examples](https://github.com/active9/above/tree/master/examples) folder on the github repo.

~Enjoy!

#CONTRIB

Above is open-source via the MIT license we encourage Forking.

#LICENSE
MIT


