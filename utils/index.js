const {
	getArgFromCLI,
	getArgsFromCLI,
	getFileArgsFromCLI,
	getNodeArgsFromCLI,
	hasArgInCLI,
	hasFileArgInCLI,
	spawnScript,
} = require('./cli');

const {
    fromConfigRoot,
    fromProjectRoot,
    fromScriptsRoot,
    getScripts,
    hasProjectFile,
    hasScriptFile,
} = require('./file');

const {
    getPackage,
    getPackagePath,
    getPackageVersion,
    hasPackageProp,
} = require('./package');

module.exports = {
    fromConfigRoot,
    fromProjectRoot,
    fromScriptsRoot,
	getArgFromCLI,
	getArgsFromCLI,
	getFileArgsFromCLI,
	getNodeArgsFromCLI,
    getPackage,
    getPackagePath,
    getPackageVersion,
    getScripts,
	hasArgInCLI,
	hasFileArgInCLI,
    hasPackageProp,
    hasProjectFile,
    hasScriptFile,
	spawnScript,
};