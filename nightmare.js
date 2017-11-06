var Nightmare = require('nightmare');

var nightmare = Nightmare({ show: true });

nightmare
	.goto('http://localhost:8080/')
	.type()
	.click()
	.wait()
	.evaluate(function() {
		return document.querySelector('# a').href;
	})
	.end()
	.then(function(result) {
		console.log(result);
	})
	.catch(function(error) {
		console.error('Search failed:', error);
		process.exit(1)
	});