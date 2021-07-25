const isInteger = require('./isInteger');

describe('isInteger()', () => {
    describe('does not throw an error', () => {
        test('integer value', () => {
            expect(isInteger(1)).toEqual(true);
        });

        test('float value fail', () => {
            expect(isInteger(1.23)).toEqual(false);
        });

        test('Number as string fail', () => {
            expect(isInteger('22')).toEqual(false);
        });

        test('String value fail', () => {
            expect(isInteger('This is a string')).toEqual(false);
        });
    });
});