const AnnuaireOrangeParser = require('../Parser/WebParser/AnnuaireOrangeParser.js');
const BingSearchParser = require('../Parser/WebParser/BingSearchParser.js');
const GoogleSearchParser = require('../Parser/WebParser/GoogleSearchParser.js');

const parserFactory = (parserName) => {
    switch (parserName) {
        case 'annuaireOrange':
            return new AnnuaireOrangeParser();
        case 'bingSearch':
            return new BingSearchParser();
        case 'googleSearch':
            return new GoogleSearchParser();
    }

    return null;
}

module.exports = parserFactory;