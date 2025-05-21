# 'This' Keyword

The 'this' leyword is a special variable created for every function. It takes the value of the "owner" of the function in which the 'this' keyword is used. (More on this soon.) <br>
The value of 'this' is only assigned when the function is <strong>actually called</strong>.

## Rules

#### 1. Method

(Remember that a method is a function attached to an object.) The 'this' keyword inside a method will point to the object <strong>on which the object is called.</strong>

(In the code below, there is also an example of an enhanced object literal.When defining object methods, it is no longer necessary to use the 'function' keyword. Note the lack of " : ")

```
const jordy = {
  firstName: "George",
  birthYear: 1991,
  calcAge() {
    return 2025 - this.birthYear;
  },
};

jordy.calcAge();

```

This will return `34`. Now a separate object has been defined below:

```
const gabby = {
  firstName: "Bandy",
  birthYear: 2004,
};

gabby.calcAge = jordy.calcAge;
console.log(gabby.calcAge());
```

The `gabby` object is able to inherit the calcAge method from `jordy`. As the `calcAge()` method uses the "this" keyword, the method now uses gabby's `birthYear` when called with the gabby object. <br> (Had the original method been hard-coded with `jordy.birthYear`, this would not have worked.)

---

#### 2. Method
