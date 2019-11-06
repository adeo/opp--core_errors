# @core/errors

#### Why:
If you need to catalogue you errors, this module for you!  

#### What:
Errors factory module. Define you own error with namespace, code and name!
This is one of dependenies for [@core/core](https://github.com/adeo/opp--core_core) module.

#### Basic usage:
```javascript
const { factory } = require('@core/errors');

factory('MyNamespace', [
    { code: 'HoustonProblem', message: 'Houston we have a problem [%s in the %s]!!!' },
]);

const { MyNamespaceError } = require('@core/errors');

throw new MyNamespaceError.HoustonProblem('fire', 'hole!!!');

// Thrown:
// Error [MyNamespaceError]: Houston we have a problem [fire in the hole!!!]!!!
```

```javascript
const e = new MyNamespaceError.HoustonProblem('fire in the hole!!!');
console.log(e.code);     // 'HoustonProblem'
console.log(e.message);  // 'Houston we have a problem [fire in the hole!!!]!!!'
console.log(e.category); // 'MyNamespace'
console.log(e.name);     // 'MyNamespaceError'
```

## Maintainers
Leonid Levkin < Leonid.Levkin@leroymerlin.ru >