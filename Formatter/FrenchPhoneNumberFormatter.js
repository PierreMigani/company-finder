const Formatter = require('./Formatter');

class FrenchPhoneNumberFormatter extends Formatter {
    format(text) {
        // delete whitespaces, at the beginning delete 0 and +33 and 33, add '+33 '
        return `+33 ${text.replace(/\s/g, '').replace(/^(?:0|\+33|33)/, '')}`;
    }
}

module.exports = FrenchPhoneNumberFormatter;