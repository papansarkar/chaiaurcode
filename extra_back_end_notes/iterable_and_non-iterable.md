// iterable

An iterable is any object that can be looped over using constructs like `for...of` or other iteration methods. It must implement a method called `Symbol.iterator`, which returns an iterator object. Common iterables include:

- `Arrays`: `['a', 'b', 'c']`
- `Strings`: `'hello'`
- `Maps`: ```new Map([['key1', 'value1'], ['key2', 'value2']])```
- `Sets`: `new Set([1, 2, 3])`

    ```javascript
    let iterable = ['a', 'b', 'c'];
    for (let item of iterable) {
    console.log(item); // Logs 'a', 'b', 'c'
    }

    ```

## Non-Iterable:
Non-iterables are objects that cannot be used directly in a `for...of` loop. Examples include:

- Plain `Objects`: `{ key: 'value' }` (though `Object.keys()`, `Object.values()`, or `Object.entries()` can be used to make an object iterable).

- `Numbers`: 123

- To make a plain object iterable, you would need to transform it or use helper methods like `Object.keys()`.

    ```javascript
    let nonIterable = { a: 1, b: 2 };
    
    for (let key of Object.keys(nonIterable)) {
        console.log(key); // Logs 'a', 'b'
    }
    ```

    ```javascript
    let nonIterable = { a: 1, b: 2 };
    
    for (let key, value of Object.entries(nonIterable)) {
        console.log(key, "-> ", value); 
    }
    ```