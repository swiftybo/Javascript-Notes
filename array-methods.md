# Array Methods

When using array methods, it is important to know if the method mutates the original array(s) or not as this may produce unexpected results if unknown.

## Using the .at() method

Similar to using the traditional bracket notation to extract specific elements from an array.

```
const arr = [27, 51, 88, 33]

arr[0] => returns 27
arr.at(0) => returns 27
```

However, the brackets notation does not accept negative indexes.

```
arr[-1] => returns undefined.

// If we want to use bracket notation we write the following:
arr[arr.length - 1] => returns 33


// To get the last element of the array, we can use the arr.at() method:

arr.at(-1) => returns 33

// Or using other methods:
arr.slice(-1) => returns [33]
arr.slice(-1)[0] => returns 33

```
