const WebParser = require('../WebParser.js');

class GoogleSearchParser extends WebParser {
    constructor () {
        super(
            'https://www.google.com/search',

            // html selector for google complementary result block phone number text
            { phoneNumber: '.I6TXqe .Kot7x .LrzXr.zdqRlf.kno-fv' },
            
            // headers to be able to access google search page without cookie acceptation page
            { 
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36',
            }
        );
    }

    // create text used for google search
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