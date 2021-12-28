const Validator = require('./Validator');

class FrenchPhoneNumberValidator extends Validator {
    validate(value) {
        // check if value is a valid french phone number, discarding spaces
        // it must starts with '+33', '33', '0' or nothing
        return /^(?:(?:\+33|33|0)?[1-9]\d{8}|(?:\+33|33|0)?[1-9]\d{2}[-. ]?\d{3}[-. ]?\d{3})$/.test(value.replace(/\s/g, ''));
    }
}

module.exports = FrenchPhoneNumberValidator;