const WebParser = require('../WebParser.js');

// doesn't work, probably should be implemented with a lib like pupeeteer
class BingSearchParser extends WebParser {
    constructor () {
        super(
            'https://www.bing.com/search',
            { phoneNumber: '#IconItem_4 > a' }
        );
    }

    getLocation (params) {
        const locationParts = [];
        for (const keyParam of ['name', 'address', 'city', 'zipCode', 'country']) {
            if (params[keyParam]) {
                locationParts.push(params[keyParam]);
            }
        }

        return locationParts.join(' ');
    }

    getUrlParams (params) {
        return {
            'q': this.getLocation(params),
        }; 
    }
}

module.exports = BingSearchParser;