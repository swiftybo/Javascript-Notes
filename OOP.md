# OOP Introduction

Fundamental principles of OOP:

1. Abstraction
2. Encapsultion - keeping properties and methods private inside the class, so they are not accessible / can be mutated from outisde the class. Some methods can be exposed as a public interface (API).
3. Inheritance - can set up a structure of parent and child classes, in which the child class can inherit all properties and methods from the parent class.
4. Polymorphism - A child class can overwrite a method that it inherited from a parent class.

<br>

There are 3 ways in which OOP can be implemented:

- Constructor Functions - creating objects from a function.
- ES6 Classes - exactly like constructor functions with nicer syntax.
- Object.create() function

### The Prototype

**All objects in Js are linked to a protoype object.**

An object can inherit all the methods & properties from the linked prototype aka **prototypal inheritance**. (Can also say that the object is **delegating** to the prototype.)

(Example: Remember that arrays are also objects! When referring to MDN web docs for array methods, it is always defined as Array.prototype.[method]. This is because Array.prototype is the prototype of all array objects that are created in Js.)

## Constructor Functions

A constructor function is a **normal** function, the only difference being that calling the constructor function requires the `new` operator.

Can either use function expressions or function declarations to build the constructor function, but **not** the arrow function as it does not have its own **this** keyword.

In this example, we are creating 2 new objects / instances from a constructor function. (No classes are involved)

```
const Person = function(firstName, birthYear) {
    // Instance Properties - these are available to all instances built from this constructor function
    this.firstName = firstName
    this.birthYear = birthYear

    // We could do this but it is NOT recommended to create methods inside the constructor function. It is more memory efficient to write methods in the prototype property.
    this.calcAge = function() {
        return 2025 - this.birthYear
    }
}

// storing newly created object in variable "jonas"
const jonas = new Person("Jonas", 1996)

// completely new object not related to jonas object.
const gabby = new Person("Gabriella", 2004)


// We can still set new properties and methods to these instances, however, as expected they will not be part of the Parent function constructor, the prototype or other instances.

jonas.lastName = "Schmedtmann"
gabby.middleName = "Pexi"
```

4 things happen when a function is called with the `new` operator:

1. New empty object {} is created.
2. Function is called, `this` = {} (newly created object).
3. Newly created object {} linked to the constructor function's prototype property.
4. Function automatically returns the newly created object.

### Working with the Prototype

The **constructor's** prototype property is: `Person.prototype` - this is just normal dot notation like accessing regular properties, and returns an object. [N.B. bracket notation does not work.] We can access it to set methods in the prototype (the recommended way of setting methods, instead of in the constructor):

##### Accessing the prototype property of the constructor function

```
Person.prototype
returns the prototype object.
```

(It is important to understand that **Person.prototype** is **NOT** the prototype of `Person`. It is the prototype of all objects created with the Person constructor function.)

(If we continue up the "prototype chain", the prototype of Person.prototype will be Object.prototype and the prototype of this will be ``null)

##### Setting Methods on the prototype

```
Person.prototype.calcAge = function() {
    return 2025 - this.birthYear
}
```

##### Setting Properties on the prototype

```
Person.prototype.species = "Human"
```

##### Getting the prototype of an object

To get the prototype of an object, use the method: `Object.getPrototypeOf()`

```
console.log(Object.getPrototypeOf(jonas));

// this returns the prototype with the ``calcAge`` method, the constructor, and the prototype of this prototype.

// We could also use the .__proto__ getter function to get the prototype however, this is NOT recommended:
console.log(jonas.__proto__)

// Both of these will return the same result i.e. the prototype of jonas.
```

`Person.prototype === Object.getPrototypeOf(jonas)` returns `true`.

## ES6 Classes

Classes in Js are just a special type of function, so we can use either "class expressions" or "class declarations" to build "classes".

Class expression would look like:

```
const personCl = class {}
```

We will continue with class declarations:

```
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }

    // Writing methods here automatically adds them to the prototype property. We do not need to set it manually like in constructor functions.
    calcAge() {
        console.log(2025 - this.birthYear)
    }
}

// Also needs the "new" operator when creating a new object.
const larry = new PersonCl("Larry", 1987)

```

Writing methods inside the constructor class places them outside of the prototype property.

Additionally, we can still use the manual way of setting methods & properties like in function constructors i.e.

```
PersonCl.prototype.greet = function() {
    console.log(`Hey ${this.firstName}!`)
}

PersonCl.prototype.hobby = "fishing"
```

#### Rules for classes:

1. Classes are NOT hoisted. They need to be defined first before they can be used / called.
2. Classes are first-calss citizens - we can pass them into functions and get them returned from functions.
3. Classes are executed in strict mode (even if not activated in strict mode).

<br>

<br>

#### Using 'isPrototypeOf'

Used to check if a prototype is a prototype of another object.

```
Person.prototype(isPrototypeOf(jonas))
Person.prototype(isPrototypeOf(gabby))
// both return True

Person.prototype(isPrototypeOf(Person))
// returns False, proving that Person.prototype is not the prototype of the Person constructor function but is a property of the Person constructor function.

```

<!--
#### Using `instanceof`

Used to check if an object has been created from a constructor function / class. This returns a ``true`` or ``false`` value.

```
jonas instanceof Person
// returns true
``` -->
