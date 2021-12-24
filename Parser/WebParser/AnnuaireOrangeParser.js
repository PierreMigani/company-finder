const WebParser = require('../WebParser.js');

class AnnuaireOrangeParser extends WebParser {
    constructor () {
        super(
            'https://annuaire.118712.fr/fr',
            { phoneNumber: '#item_1 > div.left-item > div > div.item-info > div.actions-btn > a.item_phone.button.desktop > span.button_wording' }
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
            's': this.getLocation(params),
        }; 
    }
}

module.exports = AnnuaireOrangeParser;