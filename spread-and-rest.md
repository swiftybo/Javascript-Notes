# Spread & Rest Operators

The spread and rest operators are both expressed as `...`, however, they perform the opposite of each other when used.

## Spread Operator

The spread operator is used to expand an iterable, it works on <strong>all</strong> iterables, including arrays, strings, maps, sets, <strong>but NOT objects</strong>. (Objects are not iterables!)

Here are various scenarios the spread operator can be used:

### 1. Copying Existing Arrays

We can expand existing arrays with the spread operator to allow individual elements to be copied, instead of copying the array itself.

```
const arr = [2, 3, 4]
const expandedArr = [1, ...arr, 5]
```

### 2. Join 2 Arrays

```
const numRun = [5, 6, 7]
const range = [...arr, ...numRun]
```

<strong>Without</strong> the spread operator, the `range` variable will return an array with 2 nested arrays in it, which is not what we want in this case.

### 3. Use on other Iterables

Example of being used on strings:

```
const str = "Jordy"
const letters = [...str, " ", "s"]
```

`letters` will be return `["j", "o", "r", "d", "y", " ", "s"]`

### 4. Passing Multiple Arguements in a Function

```
const numbers = [
  Number(prompt("First number: ")),
  Number(prompt("Second number: ")),
  Number(prompt("Third number: ")),
];
```

This will return an array containing 3 numbers as Number data types.
<br><br>

#### Function 1

```
function add([...values]) {
  let total = 0;
  for (let value of values) {
    total += value;
  }
  return total;
}

console.log(add(numbers));
```

In this function, we expand the `values` parameter with the spread operator and run through each element with a `for` loop.

When the function is called, the passed-in numbers array will now be expanded.
<br><br>

#### Function 2

```
function add(value1, value2, value3) {
  return value1 + value2 + value3
}
console.log(add(...numbers))
```
