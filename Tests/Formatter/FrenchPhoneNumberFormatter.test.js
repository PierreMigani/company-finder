const FrenchPhoneNumberFormatter = require('../../Formatter/FrenchPhoneNumberFormatter');

test('test french phone number format', () => {
    const frenchPhoneNumberFormatter = new FrenchPhoneNumberFormatter();

    expect(frenchPhoneNumberFormatter.format('+33 612345678')).toEqual('+33 612345678');
    expect(frenchPhoneNumberFormatter.format('0612345678')).toEqual('+33 612345678');
    expect(frenchPhoneNumberFormatter.format('06 12 34 56 78')).toEqual('+33 612345678');
    expect(frenchPhoneNumberFormatter.format('+33 6 12 34 56 78')).toEqual('+33 612345678');
    expect(frenchPhoneNumberFormatter.format('+33612345678')).toEqual('+33 612345678');
    expect(frenchPhoneNumberFormatter.format('33 6 12 34 56 78')).toEqual('+33 612345678');
    expect(frenchPhoneNumberFormatter.format('33612345678')).toEqual('+33 612345678');
    expect(frenchPhoneNumberFormatter.format('6 12 34 56 78')).toEqual('+33 612345678');
    expect(frenchPhoneNumberFormatter.format('612345678')).toEqual('+33 612345678');
});