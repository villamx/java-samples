/**
 * require-build.js 11/13/2014 //(c) General Electric Company | GE Confidential.
 * 
 * Sample build profile.
 */
({
	appDir : '${basedir}/src/main/webclient',
	baseUrl : 'sources',
	paths : {
		views : 'views'
	},
	dir : '${basedir}/src/main/webapp/clientapp',
	modules : [ {
		name : 'config'
	}, {
		name : 'main',
		exclude : [ 'config' ]
	} ],

	skipDirOptimize : true,

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
