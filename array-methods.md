# Array Methods

When using array methods, it is important to know if the method mutates the original array(s) or not as this may produce unexpected results if unknown.

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

## .some() & .every() methods

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
