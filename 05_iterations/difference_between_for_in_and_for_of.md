
# Difference Between `for...in` and `for...of` in JavaScript

In JavaScript, `for...in` and `for...of` are both used for iterating over collections, but they are used for different types of data structures and have different behaviors.

## `for...in` Loop

- The `for...in` loop is used to iterate over the **enumerable properties** (keys) of an object.
- It iterates over all properties in the object, including inherited properties.
- It is mainly used for objects.

### Syntax

```javascript
for (let key in object) {
    // code block to be executed
}
```

### Example

```javascript
const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
    console.log(key, obj[key]); // Output: a 1, b 2, c 3
}
```

### Important Note
- Use `for...in` for objects, not for arrays, as it may lead to unexpected results due to inherited properties.

## `for...of` Loop

- The `for...of` loop is used to iterate over **iterable objects**, such as arrays, strings, maps, sets, etc.
- It iterates over the values of an iterable, not the keys or indices.
- Supports Array destructuring over values
- It is primarily used for arrays and other iterable collections.

### Syntax

```javascript
for (let value of iterable) {
    // code block to be executed
}
```

### Example

```javascript
const arr = [10, 20, 30];

for (let value of arr) {
    console.log(value); // Output: 10, 20, 30
}
```

### Additional Example with a String

```javascript
const str = "Hello";

for (let char of str) {
    console.log(char); // Output: H, e, l, l, o
}
```

## Summary of Differences

| Feature              | `for...in`                           | `for...of`                         |
|----------------------|--------------------------------------|------------------------------------|
| Purpose              | Iterate over enumerable properties (keys) of an object | Iterate over values of iterable objects (e.g., arrays, strings) |
| Use Case             | Best for objects                     | Best for arrays, strings, etc.     |
| Output               | Keys (property names)                | Values (property values or elements) |
| Inherited Properties  | Yes                                  | No                                 |

## Conclusion

- Use `for...in` when you need to loop through the keys of an object.
- Use `for...of` when you need to loop through the values of an iterable object like arrays or strings.
