# Shallow vs Deep Copies (Objects)

```
const jordy = {
  firstName: "George",
  lastName: "Lukas",
  birthYear: 1991,
  age: 31,
  family: ["Alisson", "Bob"]
}
```

This object is stored in the <strong>heap</strong> in the JS Engine of the browser. The <strong>call stack</strong> will hold a memory address at which the object stored in the heap.

In this example we want to copy this object into another object and change one of the properties.

---

### Improper Way of Copying Objects

```
const adoptedJordy = jordy
adoptedJordy.lastName = "Lang"

console.log(jordy);
console.log(adoptedJordy);
```

Both of these would log <strong>exactly the same objects!</strong> <br>

This is because when we tried copying with `const adoptedJordy = jordy` it did not create a new object in the heap but instead copied the object reference to the heap. (i.e. `jordy` and `adoptedJordy` are two different variables which point to the exact same object in the heap, therefore, any change to one variable will be reflected in the other.)

This is the same behaviour in functions. If we try to change the property of a passed-in (global) object in a function, it will still be reflected outside the function. The laws of function scope which apply to primitives do not apply to objects here.

---

### Shallow Copy

To perform a shallow copy of the `jordy` object, we use the spread operator.

```
const jordyCopy = { ...jordy }
```

This creates a new object in the heap and the reference to this new object is stored in `jordyCopy`.

The following code will now change the lastName property of the `jordyCopy` object and NOT the original `jordy` object.

```
jordyCopy.lastName = "Linkin"
```

#### BUT...

This way of copying is not perfect... we are <strong>unable to change nested objects </strong> like the `family` array propert. Let's try changing it:

```
jordyCopy.family.push("Bella")
jordyCopy.family.push("Max")

jordy.family.push("Helen")
```

The `family` array for both `jordy` and `jordyCopy` will both have "Bella", "Max" and "Helen" added to the family array.

This is because arrays are objects. Therefore the `family` array property is actually stored in the heap and the `family` property is just storing a reference to the object in the heap (i.e. both `jordy` and `jordyCopy` have the `family` property which point to the same object in the heap).

Using `const jordyCopy = { ...jordy }` only copied the first level of the object i.e. only the primitives, but NOT the <strong>nested objects</strong>. This is called a <strong>SHALLOW COPY.</strong>

---

### Deep Copy / Deep Clone

To perform a deep copy of an object, we use the `structuredClone()` function.

```
const jordyDeepClone = structuredClone(jordy)

jordyDeepClone.family.push("Rudy");
jordyDeepClone.family.push("Bartholemew");
```

This now returns a completely new object with an amended family array object.

-- END --
