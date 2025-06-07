# Array Methods

When using array methods, it is important to know if the method mutates the original array(s) or not as this may produce unexpected results if unknown. (Note there are non-destructive versions of some of the functions.)

## Using the .slice() method

Asides the conventional use of slice to return a portion of an array into a **new array**. (Similar to the string.slice() method.)

The slice method can also be used to make a **complete shallow copy** of an array, and allows us to also use method chaining on the copied array.

```
const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];

arr.slice()
// returns a copied version of the original array.


// with method chaining:

arr.slice().reverse()
// reverse() is a destructive method, therefore we can use the slice() method to create a shallow copy which we can now use the reverse() method on.
```

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

We can use the .at() method to get round this which does accept negative indexes.

## Data Tranformation: Map Method

Map is similar to the forEach method in that a callBack Fn manipulates each of the elements in the original array. However, the Map method will return a **new array** (unlike the forEach method)

## Data Tranformation: Filter Method

Filters all elements in the original array which satisfy a certain condition. This returns a **new filtered array** containing only the elements which met the conditions.

## Data Tranformation: Reduce Method

"Reduces" / "Boils" down all the array elements and returns a **single value** (e.g. adding all the elementss of the original array together).

## Using the .find() method

The find() method retrieves and returns the first element of the array which satisfies the specified condition.

The difference between the find() method and filter(): <br>

- .find() will only return the first element which satisfies the condition;
- .filter() will return a new array of the elements which satisfy the condition.

## Using the .findIndex() method

Works similar to .find() except it returns the index of the elements which satsifies the specified conditions, instead of the value of the element.

## Using the .some() & .every() methods

The .some() method is used to check if there are ANY elements in an array which meets a condition. It returns `true` or `false` depending on if there are ANY elements in the target array which meet the condition. E.g.

```
const arr = [34, 57, 31, 99, 74]

arr.some(element => element > 50)
```

returns `true`.

#### Difference between .some() and .includes()

The .includes() method only checks for equality i.e.

```
const arr = [34, 57, 31, 99, 74]

arr.includes(31)
//is valid

//However we cannot check for a condition with includes():
arr.inculdes(>50)
// is invalid
```

The .every() method only returns true if all the elements in the array satisfy the specified condition, otherewise it returns false.

```
arr.every(element => element > 10)
// returns true

arr.every(element => element > 50)
// returns false
```

\*TIP <br>
If only looking for an equality, use .includes() <br>
If looking for if **any** values meets a condition, then use some() <br>
If looking for if **all / every** values meet a condition, then use every() <br>

## Using the .flat() method

The flat method is used to "flatten" a nested array: <br>
N.B. The flat method creates a new array and does **not** mutate the original array.

```
const nestedArr = [1, 2, [3, 4], 5]

nestedArr.flat()
```

returns `[1, 2, 3, 4, 5]`. The default is that the flat method only goes 1 layer deep. The.flat() method has a depth argument which will go into deeper layers of nesting.

## Using the .sort() method

**Mutates** the original array. Another method exists .toSorted() which performs the same as the sort() method but returns a copy of the original array instead of mutating it. The following

#### Array of Strings

Sorts the array elements alphabetically for strings.

#### Array of Numbers

Requires use of the optional compareFn parameter. The numbers in the array are "looped" through and each number is compared against the next. Two values are taken as arguments: `a` and `b`.

- `a` is the first element for comparison;
- `b` is the second element for comparison

<br>

Background:

- A **negative** value indicates that `a` should come **before** `b`.
- A **positive** value indicates that `a` should come **after** `b`.
- Zero or NaN indicates that `a` and `b` are considered equal.

<br>

**General Rules:**

```
const arr = [200, 450, -400, 3000, -650, -130, 70, 1300];

// For ascending order:
arr.sort(function(a, b){
    return a - b
})

// For descending order:
arr.sort(function(a, b){
    return b - a
})
```

#### Array of Mixed Types

Don't bother using the sort() and toSorted() methods for arrays with mixed types...it won't work.
