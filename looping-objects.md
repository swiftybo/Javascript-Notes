# Looping Objects

Consider the following object for this whole section.

```
const porsche = {
  Boxster986: {
    releaseDate: 1996,
    endDate: 2004,
  },
  Cayenne: {
    releaseDate: 2002,
    endDate: "present",
  },
  Panamera: {
    releaseDate: 2009,
    endDate: "present",
  },
  Spyder918: {
    releaseDate: 2013,
    endDate: 2015,
  },
};
```

## Object.keys()

`Object.keys` returns an array of the keys in the specified object.

We can loop over the object with a for-of loop.

```
for (const model of Object.keys(porsche)) {
  console.log(model);
}
```

This returns: `Boxster986 Cayenne Panamera Spyder918`

## Object.values()

`Object.values` returns an array of the values in the specified object.

We can similarly loop over this array too.

## Object.entries()

This returns an <Strong>array</strong> of the key: value pairs wihch are also captured as an array.

```
console.log(Object.entries(porsche))
```

This returns an array of arrays.

```
[
    ["Boxster986", {
        releaseDate: 1996,
        endDate: 2004}],
    ["Cayenne", {
        releaseDate: 2002,
        endDate: present}],
    ...
]
```

We can loop through this too:

```
for (const newEntry of Object.entries(porsche)) {
  console.log(newEntry);
}
```

This prints each array with the nested object `{releaseDate..., endDate...}`

We can use array and object destructuring in the loop to immediately break these down further:

```
for (const [key, { releaseDate, ended }] of Object.entries(porsche)) {
  console.log(
    `The car is ${key} and it was released in ${releaseDate} and production kept going until ${ended}.`
  );
}
```

This returns:

```
The car is Boxster986 and it was released in 1996 and production kept going until undefined.

 The car is Cayenne and it was released in 2002 and production kept going until undefined.

The car is Panamera and it was released in 2009 and production kept going until undefined.

The car is Spyder918 and it was released in 2013 and production kept going until undefined.
```

Note how it is still important to use the exact key names in the object destructuring, otherwise the property will not be found in the object and will return 'undefined'.

<br>

### Note: array.entries()

Do not mix this up with the `array.entries()` method which has a different syntax.

```
const cars = ["vauxhall", "renault", "nissan", "fiat"]

console.log(cars.entries())

```

Note the different syntax when using the array.entries() method compared to the Object.entries() method. Additionally, this only returns an "Array Iterator" object, <strong>not an array</strong>.

The "Array Iterator" can be looped through to extract the index and elements:

```
for (const [index, element] of cars.entries()) {
  console.log(index, element);
}
```

This returns

```
0 'vauxhall'
1 'renault'
2 'nissan'
3 'fiat'
```

-- END --
