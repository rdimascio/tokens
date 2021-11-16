module.exports = {
	css: {
		transformGroup: 'css',
		buildPath: 'build/css/',
		files: [{
			format: 'css/variables',
			destination: 'variables.css',
			options: {
				showFileHeader: false,
			},
		}],
	},
	'json-flat': {
		transformGroup: 'js',
		buildPath: 'build/json/',
		files: [{
			format: 'json/flat',
			destination: 'tokens.json',
		}],
	},
	wp: {
		transformGroup: 'custom/wp',
		buildPath: 'build/wp/',
		files: [{
			format: 'json/flat',
			destination: 'theme.json',
		}],
	}
};