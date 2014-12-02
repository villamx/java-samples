/**
 * require-build.js 11/13/(c) 2014.
 * 
 * Sample build profile.
 */
({
	appDir : '${basedir}/src/main/webclient',
	baseUrl : 'sources',
	paths : {
		underscore : 'empty:',
		backbone : 'empty:',
		jquery : 'empty:',

		views : 'views'
	},
	dir : '${basedir}/src/main/webapp/clientapp',
	modules : [ {
		name : 'config'
	}, {
		name : 'main',
		include : [ 'views/PopoverView' ],
		exclude : [ 'config' ]
	} ],

	fileExclusionRegExp : /^(libs|(r|buildconfig|min)\.js)$/,

	// allowSourceOverwrites : false,
	// keepBuildDir : true,
	// skipDirOptimize : true,
	preserveLicenseComments : true,
	// findNestedDependencies : true,

	uglify : {
		max_line_length : 1000
	},

	uglify2 : {
		compress : {
			drop_console : true
		}
	}

// onBuildWrite : function(moduleName, path, contents) {
// // return contents;
// return contents.replace(/console.log(.*);/g, ';');
// }

})
