# Spread & Rest Operators

The spread and rest operators are both expressed as `...`, however, they perform the opposite of each other when used.

## Spread Operator

The spread operator is used to expand an iterable into its individual elements, it works on <strong>all</strong> iterables, including arrays, strings, maps, sets, <strong>but NOT objects</strong>. (Objects are not iterables!)

Here are various scenarios the spread operator can be used:

### 1. Copying Existing Arrays / Objects

Also covered in "shallow-vs-deep-copies.md". These are only <strong>shallow</strong> copies of the target array / object.

#### Arrays:

We can expand existing arrays with the spread operator to allow individual elements to be copied, instead of copying the array itself.

```
const arr = [2, 3, 4]
const expandedArr = [1, ...arr, 5]
```

#### Objects:

Similarly for objects:

```
const obj = {
  fullName: "John Cheese",
  favouriteFood: "Milk",
  age: "mature",
};

const cheeseMan = {...obj, colour: "blue"}
```

We have copied the object and also added a new key: value. As this is a shallow copy, this new `key:value` will only be reflected in the copied `cheeseMan` object and NOT the original `obj` object.

N.B. We can also use `Object.assign()` to perform a shallow copy of an object.

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

<strong>(FYI: This example seems very similar to the use of the rest operator in functions (example below), however, the difference with this example is that the argument passed in is in the form of an array, which is being expanded in the function declaration.)</strong>

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

Even though this works, this approach is not often seen as we are limiting to only accepting an array as the arguement for the add function. It is better to use a rest operator in the function and if an array is being passed in during the function call, expand the array using the spread operator.
<br><br>

#### Function 2

In this function, the function is expecting 3 parameters. In the function call, the spread operator is used to expand the `numbers` array for the function execution.

```
function add(value1, value2, value3) {
  return value1 + value2 + value3
}
console.log(add(...numbers))
```

<br>
-- END OF SECTION --

## Rest Operator

The rest operator collects multiple elements and condenses them into an array / object.

### 1. Destructuring Arrays / Objects

```
const [a, b, ...others] = [1, 2, 3, 4, 5];
```

In this example we have used array destructuring with the rest operator. The rest pattern must always be the last in the destructuring assignment. The LHS variables will return the following values:

- `a = 1`,
- `b = 2`,
- `others = [3, 4, 5]`

N.B. The rest operator is typically found on the LHS of "="; while the spread operator is typically found on the RHS of "=".

### 2. Functions

The rest operator can be used in functions to compile multiple parameters into an array.

```
const add = function(...numbers) {
    let sum = 0;
    for(let number of numbers) {
        sum += number
    }
    console.log(sum)
}

add(2, 3);
add( 5, 7, 8, 9);
```

Using the rest operator here allows the ``add` function to accept any number of arguments.

<br>
-- END --
