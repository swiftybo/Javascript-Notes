# Destructuring (Arrays & Objects)

Destructuring is a way of unpacking values from an array or object into separate variables.

Typically if we only need one value from an array or object we do this:

```
const arr = [7, 8, 9];
const obj = {
  make: "porsche",
  country: "germany",
  firstRelease: 1878,
};

// For array:
const magicNumber = arr[1];

// For object:
const carType = obj.make;

However, if we want multiple variables from either object, this will require a lot of new variable declarations.

Destrucuting provides a shorthand method to do this.
```
