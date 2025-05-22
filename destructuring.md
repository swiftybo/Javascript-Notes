# Destructuring (Arrays & Objects)

Destructuring is a way of unpacking values from an array or object into separate variables.

Typically if we only need one value from an array or object we do this:

```
const arr = [7, 8, 9, 10];
const obj = {
  make: "porsche",
  country: "germany",
  firstRelease: 1878,
  releaseDates: [1899, 1905, 1910, 1999]
  owners: { john: "boxster",
  diego: "carrera"
  }
};

// For array:
const magicNumber = arr[1];

// For object:
const carType = obj.make;
```

However, if we want multiple variables from either object, this will require a lot of new variable declarations and assignments.

Destrucuting provides a shorthand method to do this.

---

## Destructuring Arrays

The following syntax is used for array destructuring: <br>(FYI, the LHS looks like an array but it is not, it is just the destructuring assignement)

```
const [num1, num2, num3, num4, num5] = arr
```

`num1` becomes the first array element, `num2` the second... etc. However, `num5` will return 'undefined' as `arr` only has 4 values.

The original array also remains unaffected.

### Destructuring Nested Arrays

We can also use array destructuring to unpack nested arrays:

#### Example 1

This is how to destructure a nested array in an object.

```
let [releaseDate1, ,releaseDate3] = obj.releaseDates
```

(I have used 'let' as will be showing switching variables later.)

`releaseDate1 = 1899` and `releaseDate3 = 1910`

Note that there is a gap in the destructuring assignemnt. This is how elements in an array are skipped if we do not want to assign a variable to this element.

#### Example 2

This is how to destructure a nested array in an array.

```
const nested = [2, 4, [5, 6]]
const [i , ,[j, k]] = nested
```

This will return

- `i = 2`,
- `j = 5`,
- `k = 6`

### Default Values

At the top, we had destructured the following array:

```
const arr = [7, 8, 9, 10];

const [num1, num2, num3, num4, num5] = arr
```

This returns `num5 = undefined`. We can set default values (e.g. when we do not know the size of the copied array.)

const [num1, num2, num3 = 8, num 4, num5 = 28] = arr

num1, num2 & num4 will equal 7, 8 & 10 respectively. The default value for num3 will be overwritten from destructuring, therefore, `num3 = 9`. However, as there is still no 4th index in `arr`, num5 will still equal the default value `28`.

### Switching / Mutating Variables

We can also use destructuring to switch the values of variables.

```
[releaseDate1, releaseDate3] = [releaseDate3, releaseDate1]
```

---

## Destructuring Objects

Unlike in an array, we do not need to skip elements as the order of elements in an object does not matter. However, we must use the <strong>exact</strong> property names to successfully destructure objects.

```
const {
    firstRelease, make, releaseDates
} = obj
```

This results in:

- `firstRelease = 1878`
- `make = 'porsche' `
- `releaseDates = [1899, 1905, 1910, 1999]`

If we want the variable names to be different from the object keys:

```
const {firstRelease: firstCarDate, make: brand, releaseDates} = obj
```

This results in:

- `firstCarDate = 1878`
- `brand = 'porsche' `
- `releaseDates = [1899, 1905, 1910, 1999]`

### Default Values

We can also set default values which will get returned instead of 'undefined' when we try to access an object element which does not exist.

```
// #1
const {make: brand = "supercar", model} = obj

// #2
const {make: brand = "supercar", model = "boxster"} = obj
```

In #1 code snippet: `brand` will return 'undefined'.

in #2 code snippet: `brand` will return `boxster` - the default value.

### Nested Object

```
const {
  owners: { john: johnathon, diego },
} = obj;

console.log(johnathon, diego);
```

This results in:

- johnathon = "boxster"
- diego = "carrera"

Note how we also redefined the 'john' variable.

### Switching / Mutating Variables

We can also use destructuring to switch the values of variables, however, for objects there is an extra parentheses to look out for:

```
let a = 111;
let b = 999;
const obj = {a: 23, b: 7: c: 14}

({a, b} = obj)
```

In the last line, note how `{a, b} = obj` is wrapped in ( ). These parentheses are vital to prevent an error as when we start a line with curly bracket " { ", js expects a code block.
