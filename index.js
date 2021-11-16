// import fetch from 'node-fetch';
const StyleDictionary = require("style-dictionary");
// import fs from 'fs';

(async () => {
    StyleDictionary.extend({
        source: ['tokens/**/*.json'],
        platforms: {
            
        }
    }).buildAllPlatforms();

    console.log('done!');
})();
