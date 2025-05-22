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

// const arr = [7, 8, 9, 10];
// const obj = {
//   make: "porsche",
//   country: "germany",
//   firstRelease: 1878,
//   releaseDates: [1899, 1905, 1910, 1999],
//   owners: { john: "boxster", diego: "carrera" },
// };

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

// const { make: brand, model } = obj;

// console.log(brand, model);

// console.log(obj.owners.diego);

// const {
//   owners: { john: johnathon, diego },
// } = obj;

// console.log(johnathon, diego);

// const arr = [2, 3, 4];
// const expandedArr = [1, ...arr, 5];

// const numRun = [5, 6, 7];

// const range = [...arr, ...numRun];

// console.log(arr);
// console.log(numRun);
// console.log(range);

// const str = "Jordy";
// const letters = [...str, " ", "s"];

// console.log(letters);

// const numbers = [
//   Number(prompt("First number: ")),
//   Number(prompt("Second number: ")),
//   Number(prompt("Third number: ")),
//   Number(prompt("Fourth number: ")),
// ];

// function add([...values]) {
//   let total = 0;
//   for (let value of values) {
//     total += value;
//   }
//   return total;
// }
// console.log(add(numbers));

// function add2(value1, value2, value3) {
//   return value1 + value2 + value3;
// }
// console.log(add2(...numbers));

// const obj = {
//   fullName: "John Cheese",
//   favouriteFood: "Milk",
//   age: "mature",
// };

// const cheeseMan = { ...obj, colour: "blue" };

// console.log(cheeseMan);
// console.log(obj);

// const add = function (...numbers) {
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(5, 7, 8, 9);

function add([...values]) {
  let total = 0;
  for (let value of values) {
    total += value;
  }
  return total;
}
const numbers = [1, 5, 6];
console.log(add(numbers));
