"use strict";

// const jordy = {
//   firstName: "George",
//   birthYear: 1991,
//   // // Below is example of enhanced object literal.
//   calcAge() {
//     return 2025 - this.birthYear;
//   },
// };

// console.log(jordy.calcAge());

// const gabby = {
//   firstName: "Bandy",
//   birthYear: 2004,
// };

// gabby.calcAge = jordy.calcAge;
// console.log(gabby.calcAge());

// const jordy = {
//   firstName: "George",
//   lastName: "Lukas",
//   birthYear: 1991,
//   age: 31,
//   family: ["Alisson", "Bob"],
// };

// const adoptedJordy = jordy;
// adoptedJordy.lastName = "Lang";

// jordy.firstName = "Gelly";
// adoptedJordy.x = 23;

// console.log(jordy);
// console.log(adoptedJordy);

// const jordyCopy = { ...jordy };

// jordyCopy.lastName = "Linkin";
// console.log(jordyCopy);

// jordyCopy.family.push("Bella");
// jordyCopy.family.push("Max");

// jordy.family.push("Helen");

// console.log(jordy);
// console.log(jordyCopy);

// const jordyDeepClone = structuredClone(jordy);
// jordyDeepClone.family.push("Rudy");
// jordyDeepClone.family.push("Bartholemew");

// console.log(jordyDeepClone);

const arr = [7, 8, 9, 10];
const obj = {
  make: "porsche",
  country: "germany",
  firstRelease: 1878,
  releaseDates: [1899, 1905, 1910, 1999],
};

// // For array:
// const magicNumber = arr[1];
// console.log(magicNumber);

// // For object:
// const carType = obj.make;
// console.log(carType);

// const [num1, num2, num3, num4, num5] = arr;

// // console.log(num1, num2, num3, num4, num5);

// let [releaseDate1, , releaseDate3] = obj.releaseDates;

// console.log(releaseDate1, releaseDate3);

// [releaseDate1, releaseDate3] = [releaseDate3, releaseDate1];

// console.log(releaseDate1, releaseDate3);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;

// console.log(i, j, k);

// const { firstRelease, make, releaseDates } = obj;

// const { firstRelease: firstCarDate, make: brand, releaseDates } = obj;

const { make: brand, model } = obj;

console.log(brand, model);
