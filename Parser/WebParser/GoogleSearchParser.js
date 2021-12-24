const WebParser = require('../WebParser.js');

class GoogleSearchParser extends WebParser {
    constructor () {
        super(
            'https://www.google.com/search',
            { phoneNumber: '.I6TXqe .Kot7x .LrzXr.zdqRlf.kno-fv' },
            { 
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36',
            }
        );
    }

    getLocation (params) {
        const locationParts = [];
        for (const keyParam of ['name', 'address', 'zipCode', 'city', 'country']) {
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

module.exports = GoogleSearchParser;