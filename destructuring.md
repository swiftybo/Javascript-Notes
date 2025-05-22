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
};

// For array:
const magicNumber = arr[1];

// For object:
const carType = obj.make;
```

However, if we want multiple variables from either object, this will require a lot of new variable declarations and assignments.

Destrucuting provides a shorthand method to do this.

---

## Drstructuring Arrays

The following syntax is used for array destructuring: <br>(FYI, the LHS looks like an array but it is not, it is just the destructuring assignement)

```
const [num1, num2, num3, num4, num5] = arr
```

`num1` becomes the first array element, `num2` the second... etc. However, `num5` will return 'undefined' as `arr` only has 4 values.

The original array also remains unaffected.

### Destructuring Nested Arrays

#### Example 1

We can also use array destructuring to unpack nested arrays:

```
let [releaseDate1, ,releaseDate3] = obj.releaseDates
```

(I have used 'let' as will be showing switching variables later.)

`releaseDate1 = 1899` and `releaseDate3 = 1910`

Note that there is a gap in the destructuring assignemnt. This is how elements in an array are skipped if we do not want to assign a variable to this element.

#### Example 2

```
const nested = [2, 4, [5, 6]]
const [i , ,[j, k]] = nested
```

This will return

- `i = 2`,
- `j = 5`,
- `k = 6`

### Switching Variables

We can also use destructuring to switch the values of variables.

```
[releaseDate1, releaseDate3] = [releaseDate3, releaseDate1]
```

### Default Values

At the top, we had destructured the following array:

```
const arr = [7, 8, 9, 10];

const [num1, num2, num3, num4, num5] = arr
```

This returns `num5 = undefined`. We can set default values (e.g. when we do not know the size of the copied array.)

const [num1, num2, num3 = 8, num 4, num5 = 28] = arr

num1, num2 & num4 will equal 7, 8 & 10 respectively. The default value for num3 will be overwritten from destructuring, therefore, `num3 = 9`. However, as there is still no 4th index in `arr`, num5 will still equal the default value `28`.
