
**In JavaScript, the terms enumerable and non-enumerable refer to the ability of an object's properties to be listed or iterated over, especially when using methods like for...in, `Object.keys()`, or `Object.entries()`.**

## Enumerable Properties
Enumerable properties are properties of an object that can be enumerated or iterated over in loops such as for...in or methods like Object.keys(). Most properties added to an object directly or via an object literal are enumerable by default.

**Example:**

```javascript
    
    let obj = { a: 1, b: 2 };

    for (let key in obj) {
        console.log(key); // Logs 'a' and 'b'
    }

    console.log(Object.keys(obj)); // ['a', 'b']

```

In this example, properties a and b are enumerable, so they are visible when looping through the object or using `Object.keys()`.


## Non-Enumerable Properties
Non-enumerable properties are properties that are not included in enumeration loops like `for...in`, nor do they show up in methods like `Object.keys()`. Such properties exist on the object, but they are not automatically included in enumeration.

You can define non-enumerable properties using` Object.defineProperty()`, setting the enumerable attribute to false.

Example:

```javascript
    
    let obj = { a: 1 };
    
    Object.defineProperty(obj, 'b', {
        value: 2,
        enumerable: false
    });

    for (let key in obj) {
        console.log(key); // Logs only 'a'
    }

    console.log(Object.keys(obj)); // ['a']
    console.log(obj.b); 
    // 2 (property is accessible, just not enumerable)

```

In the above example, the property b is non-enumerable, so it does not appear in the `for...in` loop or `Object.keys()`. However, it still exists and can be accessed directly using `obj.b`.



## When to Use Enumerable and Non-Enumerable Properties

- **Enumerable Properties**: Use these when you want properties to be listed during enumeration, such as when displaying the object's properties or iterating over them.

- **Non-Enumerable Properties**: Use these when a property should exist but not be exposed during enumeration. For example, if you want certain metadata or helper properties to be present but not included in the general output.

## Checking Enumerability

To check if a property is enumerable, you can use the `propertyIsEnumerable()` method:

```javascript
    
    let obj = { a: 1 };
    
    Object.defineProperty(obj, 'b', { value: 2, enumerable: false });

    console.log(obj.propertyIsEnumerable('a')); // true
    console.log(obj.propertyIsEnumerable('b')); // false

```

### Summary:
- Enumerable properties are included in loops (`for...in`) and methods (`Object.keys()`, `Object.entries()`).

- Non-enumerable properties exist in an object but are not listed during enumeration.

- The enumerable attribute can be set using `Object.defineProperty()`.

This distinction is useful when you need finer control over which properties should be exposed when iterating over an object, especially in libraries or when defining object behavior.