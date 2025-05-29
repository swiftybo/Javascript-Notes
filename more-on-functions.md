# More on Functions

A closer look at functions

## Higher Order Functions

### 1. Functions as Arguments

Higher order function is a function that receives another function as an argument (e.g. in Event Listeners) or that returns a new function, or **both**.

Higher order functions are permitted because Js supports "first class functions". First class functions simply relates to how Js treats all functions as **values**.

The following is an example of a higher order function:

```
// First Class Function:
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
};

// Higher Order Function:
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by ${fn.name}`);
};

// Similarly works by justing calling the function inside this function.
const transformer2 = function (str) {
    console.log(`String transformed again: ${upperFirstWord(str)}`);
};

transformer("Javascript is the best!", upperFirstWord);
transformer2("Javascript is the best!");
```

Both `transformer` and `transformer2` functions will return `JAVASCRIPT is the best!` as expected.

### 2. Functions Returning Functions

This is important for functional programming.

```
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet("Hey");
// greeterHey now becomes the variable of the returned anonymous function.

// greeterHey function still requires a 'name' as a parameter.
greeterHey("Joseph");
greeterHey("Stephen");

// Shorter way of writing the above as an arrow function:
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`)
```

### 3. Call Method

The `call()` method is used for setting the `this` keyword manually.
