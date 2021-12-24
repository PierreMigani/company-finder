const FrenchPhoneNumberFormatter = require('../Formatter/FrenchPhoneNumberFormatter.js');

const formatterFactory = (parserName) => {
    switch (parserName) {
        case 'frenchPhoneNumber':
            return new FrenchPhoneNumberFormatter();
    }

    return null;
}

module.exports = formatterFactory;