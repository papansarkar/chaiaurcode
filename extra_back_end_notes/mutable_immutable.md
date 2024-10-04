## Mutable:
Mutable objects are those whose state or value can be changed after they are created. Most JavaScript objects are mutable:

- `Arrays`: You can change an element, add, or remove elements
    
    ```javascript
    
    let arr = [1, 2, 3];
    arr[0] = 4; // [4, 2, 3]
    
    ```
- `Objects`: Properties can be added, changed, or deleted.
    
    ```javascript
    
    let obj = { name: 'Alice' };
    obj.age = 25; // { name: 'Alice', age: 25 }
    
    ```

## Immutable:
Immutable objects are those whose state or value cannot be changed after they are created. If you need to change an immutable value, you must create a new value instead. Common examples in JavaScript include:

- Primitive values: `Number`, `String`, `Boolean`, `undefined`, and `null` are all immutable

There are also libraries like **Immutable.js** that help create complex immutable objects in JavaScript. You can also work with immutability by using certain practices, such as:

- `Object.freeze()`: Prevents modification of an object.

    ```javascript
        
        let obj = Object.freeze({ name: 'Bob' });
        obj.name = 'Alice'; 
        // No effect, obj remains { name: 'Bob' }
    ```
- Spread operator for copying and updating:

    ```javascript
        
        const original = { a: 1, b: 2 };
        const updated = { ...original, b: 3 }; 
        // { a: 1, b: 3 }

    ```

### In summary:

- Iterable: Objects that can be iterated over, like Arrays, Strings, Maps, and Sets.

- Non-Iterable: Objects that cannot be directly iterated over, like plain objects or numbers.

- Mutable: Objects that can be changed after creation, like arrays and objects.

- Immutable: Objects or values that cannot be changed, like strings or `Object.freeze()` results.