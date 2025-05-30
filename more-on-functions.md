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

### 3. Setting the `this` keyword manually

Consider the following example with 2 objects:

```
const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`,
            name: `${name}`,
        });
    },
};

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
};
```

The eurowings object does not have the `book` method that the lufthansa object has. There are two ways the eurowings object could "inherit" the same method:

1. ...

```
eurowings.book = lufthansa.book;

// eurowings now has the book method that lufthansa has.
eurowings.book(188, "Jote Hal");

```

2. Storing in an external function & using the call() method.

```
const book = lufthansa.book
// this book function is separate from the book method.

book(23, "Sarah Wallams")
// this is a regular function call and will return an error as the "this" keyword returns undefined.
```

How do we tell Js to use the book function with the eurowings object? We can use the `call()`, `apply()` or `bind()` methods for setting the 'this' keyword manually.

#### a. call() Method

The first argument of the `call()` method is the value to use as the `this` keyword when calling the function. Subsequent arguments are the arguments for the function.

```
const book = lufthansa.book

// We point the 'book' function towards the eurowings object with the call method.
book.call(eurowings, 23, "Sarah Wallams")

console.log(eurowings)
```

#### b. apply() Method

The `apply()` method works the same as `call()`, except it does not receive a list of arguments after the first argument, instead it takes an array.

```
const book = lufthansa.book

const flightData = [678, "Luke Brandy"];
book.apply(eurowings, flightData);

// OR

book.apply(eurowings, [456, "Geff Bridges"]);
```

We could use the spread operator to unpack the `flightData` array and use this with the `call` method.

```
book.call(eurowings, ...flightData)

```

#### c. bind() Method

bind() returns a **new** function where the "this' keyword is bound to whatever value is passed into bind.

```
const book = lufthansa.book

const bookEW = book.bind(eurowings)
// this does not call the function. It returns a new function where the 'this' keyword is always set to eurowings.

bookEW(888, "Georgy")
// arguments are the same as those needed by the original method i.e. flightNum & name.
```

##### Binding Other Arguments (aka. partial application):

The bind method can also be used to define pre-set arguments. (Not default, as once set, these arguments cannot be changed):

```
const bookEW_fl5308 = book.bind(eurowings, 5308);
```

This has pre-set the flightNum to 5308 and only the `name` of the passenger is needed when calling the `bookEW_fl53008` function. N.B. the flightNum parameter **cannot** be overwritten when calling the `bookEW_fl53008` function.

##### Using bind with Event Listeners

Must be careful when using event listeners with a callback Fn that has a "this" keyword in it. The "this" keyword will start pointing towards the parent element.

The bind method is used to manually set the "this" keyword. Cannot use `call` or `apply` methods as these actually call the function. In a callback Fn we do not want to call the function immediately.

Syntax would look like this when attaching a callback Fn to a button click.

```
document.querySelector("button").addEventListener("click", definedFunction.bind(target))
```

### 4. Immediately Invoked Function Expressions (IIFE)

IIFE are functions which are run only once. (They are called at the same time as they are 'declared'.)

This is how to create an IIFE:

```
(function () {
    console.log("This will only run once!")
})()
```

- Within the first set of parentheses is a regular function expression (not assigned to a variable).
- The second set of parentheses is (immediately) calling the function expression.

Can aslo write this as an arrow function:

```
(() => console.log("This will only run once!")())
```
