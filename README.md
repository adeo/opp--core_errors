# @core/errors
Errors factory module.

#### Basic usage:
```
const { factory } = require('@core/errors');

factory('MyNamespace', [
    { code: 'HoustonProblem', message: 'Houston we have a problem [%s in the %s]!!!' },
]);

const { MyNamespaceError } = require('@core/errors');

throw new MyNamespaceError.HoustonProblem('fire', 'hole!!!');

// Thrown:
// Error [MyNamespaceError]: Houston we have a problem [fire in the hole!!!]!!!
```

```
const e = new MyNamespaceError.HoustonProblem('fire in the hole!!!');
console.log(e.code);     // 'HoustonProblem'
console.log(e.message);  // 'Houston we have a problem [fire in the hole!!!]!!!'
console.log(e.category); // 'MyNamespace'
console.log(e.name);     // 'MyNamespaceError'

```