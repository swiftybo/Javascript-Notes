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

// function add([...values]) {
//   let total = 0;
//   for (let value of values) {
//     total += value;
//   }
//   return total;
// }
// const numbers = [1, 5, 6];
// console.log(add(numbers));

// const restaurant = {
//   name: "Jade Palace",
//   numSeats: 38,
//   currentCustomers: 0,
//   openingHours: {
//     mon: {
//       open: 10,
//       close: 17,
//     },
//     sat: {
//       open: 10,
//       close: 17,
//     },
//     wed: {
//       open: 9,
//       close: 15,
//     },
//   },
// };

// console.log(restaurant.openingHours.tues.close);

// console.log(restaurant.openingHours?.sat?.close);

// const porsche = {
//   Boxster986: {
//     releaseDate: 1996,
//     endDate: 2004,
//   },
//   Cayenne: {
//     releaseDate: 2002,
//     endDate: "present",
//   },
//   Panamera: {
//     releaseDate: 2009,
//     endDate: "present",
//   },
//   Spyder918: {
//     releaseDate: 2013,
//     endDate: 2015,
//   },
// };

// console.log(porsche.Cayenne.endDate);

// for (const model of Object.keys(porsche)) {
//   console.log(model);
// }

// console.log(Object.keys(porsche));

// console.log(Object.values(porsche));

// console.log(Object.entries(porsche));

// for (const newEntry of Object.entries(porsche)) {
//   console.log(newEntry);
// }

// for (const [key, { releaseDate, ended }] of Object.entries(porsche)) {
//   console.log(
//     `The car is ${key} and it was released in ${releaseDate} and production kept going until ${ended}`
//   );
// }

// const cars = ["vauxhall", "renault", "nissan", "fiat"];

// console.log(cars.entries());

// for (const [index, element] of cars.entries()) {
//   console.log(`the index is ${index}, and the value is ${element}`);
// }

// const ordersSet = new Set([
//   "pasta",
//   "pizza",
//   "risotto",
//   "pasta",
//   "pasta",
//   "risotto",
// ]);

// console.log(ordersSet);

// console.log(new Set("Johnathon"));

// for (const order of ordersSet) {
//   console.log(order);
// }

// const orders = [
//   "pasta",
//   "pizza",
//   "risotto",
//   "pasta",
//   "pasta",
//   "risotto",
//   "garlic bread",
//   "garlic bread",
// ];

// const uniqueOrders = [...new Set(orders)];

// const restaurant = new Map();

// restaurant.set("name", "Jade Palace");
// restaurant
//   .set(1, "Hamilton, Scotland")
//   .set(2, "Bury, England")
//   .set("cuisine", ["chinese", "thai"]);

// const restaurant = new Map([
//   ["name", "Jade Palace"],
//   ["location", "Hamilton, Scotland"],
//   ["cuisine", ["chinese", "thai"]],
//   [1, "Sweet & Sour Chicken Balls"],
// ]);

// // console.log(restaurant);

// console.log(restaurant.values());
// console.log([...restaurant.values()]);

// const shop = {
//   name: "Lucario Lentils",
//   owner: "Riolu",
//   storefrontColour: ["blue", "white"],
// };

// console.log(Object.entries(shop));

// console.log(new Map(Object.entries(shop)));

// for (const [key, value] of restaurant) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const keys = [...restaurant.keys()];
// console.log(keys);

// const values = [...restaurant.values()];
// console.log(values);

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

const day = new Date("July 9 2025 11:52");
const day2 = new Date("9 Feb 25 11:52:08:16");
const day3 = new Date("2024-11-18T21:31:17.178Z");
const day4 = new Date(2030, 10, 19, 15, 23, 5);
const day5 = new Date(2025, 10, 33);

console.log(day.getTime());

console.log(day);
console.log(day2);
console.log(day3);
console.log(day4);
console.log(day5);

const unixDay = new Date(0);
console.log(unixDay);

const someDay = new Date(2037, 9, 10, 14, 28);
console.log(someDay);

console.log(someDay.getDay());

console.log(someDay.toISOString());
