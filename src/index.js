const util = require('util');
const _    = require('lodash');

module.exports.factory = function(category, data) {
    for (let item of data) {
        _.set(module.exports, `${category}Error.${item.code}`, class extends Error {

            constructor(...args) {
                super();
                Object.defineProperties(this, {
                    name:     { value: `${category}Error` },
                    meta:     { value: item.meta ? args[args.length - 1] : null },
                    message:  { value: util.format(item.message, ...args) },
                    code:     { value: item.code },
                    category: { value: category },
                });
            }

        });
    }
};