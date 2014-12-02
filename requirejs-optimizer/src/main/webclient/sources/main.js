/**
 * main.js 11/13/(c) 2014.
 * 
 * Sample loader.
 */
require([ './config' ], function() {

	console.info('main > ', arguments);
	console.log('main > ', arguments);

	require([ 'views/PopoverView' ]);

});
