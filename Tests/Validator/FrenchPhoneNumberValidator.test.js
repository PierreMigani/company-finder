const FrenchPhoneNumberValidator = require('../../Validator/FrenchPhoneNumberValidator');

test('test french phone number validation for valid french phone number', () => {
    const frenchPhoneNumberValidator = new FrenchPhoneNumberValidator();

    expect(frenchPhoneNumberValidator.validate('+33 612345678')).toEqual(true);
    expect(frenchPhoneNumberValidator.validate('0612345678')).toEqual(true);
    expect(frenchPhoneNumberValidator.validate('06 12 34 56 78')).toEqual(true);
    expect(frenchPhoneNumberValidator.validate('+33 6 12 34 56 78')).toEqual(true);
    expect(frenchPhoneNumberValidator.validate('+33612345678')).toEqual(true);
    expect(frenchPhoneNumberValidator.validate('33 6 12 34 56 78')).toEqual(true);
    expect(frenchPhoneNumberValidator.validate('33612345678')).toEqual(true);
    expect(frenchPhoneNumberValidator.validate('6 12 34 56 78')).toEqual(true);
    expect(frenchPhoneNumberValidator.validate('612345678')).toEqual(true);
});

test('test french phone number validation for not valid french phone number', () => {
    const frenchPhoneNumberValidator = new FrenchPhoneNumberValidator();

    expect(frenchPhoneNumberValidator.validate('invalid')).toEqual(false);
    expect(frenchPhoneNumberValidator.validate('83842384234')).toEqual(false);
    expect(frenchPhoneNumberValidator.validate('061234567')).toEqual(false);
    expect(frenchPhoneNumberValidator.validate('+3361234567')).toEqual(false);
    expect(frenchPhoneNumberValidator.validate('+44612345678')).toEqual(false);
});