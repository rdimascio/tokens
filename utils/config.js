const { hasArgInCLI, getArgFromCLI } = require('./cli');
const { fromConfigRoot, fromProjectRoot, hasProjectFile } = require('./file');
const { hasPackageProp, getPackage } = require('./package');

const env = require('dotenv').config({
    path: fromProjectRoot('.env'),
});

const getDefaultInputPath = () => [fromProjectRoot('tokens/**/*.json')];

const getDefaultOutputPath = () => fromProjectRoot('tokens/tokens.json');

const getDefaultConfig = () => {
	const input = getArgFromCLI('-i') || getArgFromCLI('--input');
    const output = getArgFromCLI('-o') || getArgFromCLI('--output');
    const apiKey = getArgFromCLI('-k') || getArgFromCLI('--key');
    const file = getArgFromCLI('-f') || getArgFromCLI('--file');

	return {
        input: input || getDefaultInputPath(),
        output: output || getDefaultOutputPath(),
        apiKey: key || env['10UP_TOKENS_API_KEY'],
		providers: require(fromConfigRoot('providers.config.js'))({ apiKey, file }),
	};
};

/**
 * Returns 10up-tokens config from package.json with default values
 *
 * @returns {object}
 */
const getTenUpTokensConfig = () => {
	const packageJson = getPackage();
	const config = packageJson['10up-tokens'];
	const defaultConfig = getDefaultConfig();

	if (!config) {
		return defaultConfig;
	}

	return {
		// override default configs with user-defined config
		...defaultConfig,
		...config,
	};
};

module.exports = {
    getTenUpTokensConfig,
};