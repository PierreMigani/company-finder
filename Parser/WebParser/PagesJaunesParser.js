const WebParser = require('../WebParser.js');

// doesn't work, PagesJaunes has a protection against bots
class PagesJaunesParser extends WebParser {
    constructor () {
        super(
            'https://www.pagesjaunes.fr/annuaire/chercherlespros',
            { phoneNumber: '.number-contact > span' }
        );
    }

    getLocation (params) {
        const locationParts = [];
        for (const keyParam in ['city', 'adress', 'zipCode', 'country']) {
            if (params[keyParam]) {
                locationParts.push(params[keyParam]);
            }
        }
        
        return locationParts.join(' ');
    }

    getUrlParams (params) {
        return {
            'quoiqui': params.name,
            'ou': this.getLocation(params),
            'univers': 'pagesjaunes',
        };
    }
}

module.exports = PagesJaunesParser;