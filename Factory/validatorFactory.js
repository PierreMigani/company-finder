const FrenchPhoneNumberValidator = require('../Validator/FrenchPhoneNumberValidator.js');

const validatorFactory = (parserName) => {
    switch (parserName) {
        case 'frenchPhoneNumber':
            return new FrenchPhoneNumberValidator();
    }

    return null;
}

module.exports = validatorFactory;