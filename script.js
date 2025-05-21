"use strict";

const jordy = {
  firstName: "George",
  birthYear: 1991,
  // // Below is example of enhanced object literal.
  calcAge() {
    return 2025 - this.birthYear;
  },
};

console.log(jordy.calcAge());

// const gabby = {
//   firstName: "Bandy",
//   birthYear: 2004,
// };

// gabby.calcAge = jordy.calcAge;
// console.log(gabby.calcAge());
