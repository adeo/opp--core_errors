const { assert }  = require('chai');
const { factory } = require('./../');

describe('errors', () => {

    it('factory', () => {
        const message = 'my test message',
              code    = 'MyTestError',
              meta    = 'metadata';
        factory('Test', [
            { code, message: 'This is my test error, with message [%s]', meta: true },
        ]);
        const { TestError } = require('./../');
        assert.exists(TestError);
        assert.exists(TestError[code]);
        const error = new TestError[code](message, meta);
        assert.equal(error.code, code);
        assert.isTrue(RegExp(`\[${message}\]`).test(error.message));
        assert.isTrue(error instanceof TestError[code]);
        assert.isTrue(error.meta === meta);
    });

});