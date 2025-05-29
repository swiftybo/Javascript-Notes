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

The `call()` method is used for setting the `this` keyword manually. Consider the following example with 2 objects:

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

How do we tell Js to use the book function with the eurowings object? We can use the call(), apply() or bind() methods.

The first argument of the `call()` method is the value to use as the `this` keyword when calling the function. Subsequent arguments are the arguments for the function.

```
book.call(eurowings, 23, "Sarah Wallams)
console.log(eurowings)

```
