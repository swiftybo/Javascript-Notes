# Sets & Maps

Two new data structures were introduced in ES6: Sets & Maps.

## Sets

A set is a collection of unique values. The main use case of Sets is to remove duplicate values in arrays. Additional notes:

- When creating a new Set, we need to use the `new` keyword.
- Sets are (also) iterables.
- There are no duplicate elements in a set (unlike arrays).
- The order of elements in the set is irrelevent (unlike arrays), therefore we <strong>cannot</strong> use indexes as they do not exist in arrays.
- There is no way to get certain elements out of a Set, however, it is not neceesary as all values are unique. If we want ordered elements, use an <strong>array!</strong>

```
const ordersSet = new Set(["pasta", "pizza", "risotto", "pasta", "pasta", "risotto"])

console.log(ordersSet)
```

This returns a set of size 3, with the only values being `pasta`, `pizza` & `risotto`.

Can also pass in strings:

```
console.log(new Set("Johnathon"))
```

This returns a set of size 6, with the only values being `J`, `O`, `H`, `N`, `A`, `T`.

As Sets are iterables, we can loop through it:

'''
for (const order of ordersSet) {
console.log(order)
}
'''

#### \*\*Removing Duplicates in an Array

We use the spread operator `...` to unpack the Set and wrap this in a new array.

```
const orders = ["pasta", "pizza", "risotto", "pasta", "pasta", "risotto", "garlic bread", "garlic bread"]

const uniqueOrders = [...new Set(orders)]
```

### Useful Set Methods (& properties)

- Set.size() - note how it is 'size' and <strong>not</strong> 'length'. This is an accessor property, not a method. See online for how to use this.
- Set.has() - same as `includes` method for arrays.
- Set.add() - similar to `push` method for arrays.
- Set.delete() - to do this for arrays, it requires a combination of `indexOf` and `slice` methods.
- Set.clear() - deletes all elements in the Set.
- _firstSet_.intersection(_secondSet_) - this returns a **new** Set with **only** the elements which are present in **both** of the sets.
- _firstSet_.union(_secondSet_) - this returns a **new** Set with all the elements from **both** sets (without duplicates).
- _firstSet_.difference(_secondSet_) - this returns a **new** Set with the elements which are unique in the firstSet.
