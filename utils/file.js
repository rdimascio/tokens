/**
 * External dependencies
 */
 const { readdirSync } = require('fs');
 const path = require('path');

const {
    fromProjectRoot,
	fromConfigRoot,
	fromScriptsRoot,
	getScripts,
	hasProjectFile,
	hasScriptFile,
} = require('10up-toolkit/utils/file');

const getProviders = () =>
	readdirSync(
		path.join(path.dirname(__dirname), 'providers'),
		{ withFileTypes: true }
	)
		.filter((d) => d.isDirectory())
		.map((d) => d.name);

module.exports = {
	fromProjectRoot,
	fromConfigRoot,
	fromScriptsRoot,
	getProviders,
	getScripts,
	hasProjectFile,
	hasScriptFile,
};