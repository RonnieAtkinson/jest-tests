const isInteger = require('./isInteger');

describe('isInteger()', () => {
    describe('does not throw an error', () => {
        test('integer value', () => {
            expect(isInteger(1)).toEqual(true);
        });

        test('fail for float value', () => {
            expect(isInteger(1.23)).toEqual(false);
        });

        test('fail for number as string', () => {
            expect(isInteger('22')).toEqual(false);
        });

        test('fail for string value', () => {
            expect(isInteger('This is a string')).toEqual(false);
        });
    });
});