const fetch = require('cross-fetch');

const {
	parseResponseAndNormalizeError,
	parseAndThrowError,
} = require('./response');

/**
 * Checks the status of a response, throwing the Response as an error if
 * it is outside the 200 range.
 *
 * @param {Response} response
 * @return {Response} The response if the status is in the 200 range.
 */
 const checkStatus = ( response ) => {
	if ( response.status >= 200 && response.status < 300 ) {
		return response;
	}

	throw response;
};

/**
 * 
 * @param {string} path 
 * @param {Object} options
 * @returns {Promise}
 */
const request = (path, options = {}) => {
    const response = fetch(path, {
        method: 'GET',
        ...options,
    });

    return response.then(
        ( value ) =>
            Promise.resolve( value )
                .then( checkStatus )
                .catch( ( response ) => parseAndThrowError( response, parse ) )
                .then( ( response ) =>
                    parseResponseAndNormalizeError( response, parse )
                ),
        ( err ) => {
            // Re-throw AbortError for the users to handle it themselves.
            if ( err && err.name === 'AbortError' ) {
                throw err;
            }

            // Otherwise, there is most likely no network connection.
            // Unfortunately the message might depend on the browser.
            throw {
                code: 'fetch_error',
                message: __( 'You are probably offline.' ),
            };
        }
    );
}

module.exports = {
    request,
};