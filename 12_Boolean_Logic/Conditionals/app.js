// // =====================
// // BASIC IF/ELSE
// // =====================
// let random = Math.random();
// if (random < 0.5) {
//   console.log("YOUR NUMBER IS LESS THAN 0.5!!!");
// } else {
//   console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!");
// }
// console.log(random);

// random < 0.5 ? "it works fine" : "false";

// console.log(random);

// // =====================
// // PROMPT EXAMPLE
// // =====================

// // const dayOfWeek = prompt("ENTER A DAY").toLowerCase();

// if (dayOfWeek === "monday") {
//   console.log("UGHHH I HATE MONDAYS!");
// } else if (dayOfWeek === "saturday") {
//   console.log("YAY I LOVE SATURDAYS!");
// } else if (dayOfWeek === "friday") {
//   console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!");
// } else {
//   console.log("MEH");
// }

// =====================
// TICKET PRICE EXAMPLE
// =====================

// 0-5 - FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10

const age = 890;

if (age < 5) {
  console.log("You are a baby.  You get in for free!");
} else if (age < 10) {
  console.log("You are a child.  You pay $10");
} else if (age < 65) {
  console.log("You are an adult. You pay $20");
} else {
  console.log("You are a senior. You pay $10");
}

// =====================
// NESTING CONDITIONALS
// =====================

// const password = prompt("please enter a new password");

// // Password must be 6+ characters
// if (password.length >= 6) {
//   // Password cannot include space
//   if (password.indexOf(" ") === -1) {
//     console.log("Valid Password!");
//   } else {
//     console.log("Password cannot contain spaces!");
//   }
// } else {
//   console.log("PASSWORD TOO SHORT! Must be 6+ characters");
// }

// function getColor(phrase) {
//   //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓
//   //   return phrase === "stop"
//   //     ? "red"
//   //     : phrase === "slow"
//   //     ? "yellow"
//   //     : phrase === "go"
//   //     ? "green"
//   //     : "purple";

//   if (condition) {
//   }
//   if (condition) {
//   }

//   //AND THIS LINE ↑↑↑↑↑
// }

const mystery = "Doggy7"; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("YOU GOT IT!!!");
}
console.log(mystery.indexOf("7"));

// DO NOT TOUCH!!! (please)
const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];
airplaneSeats[3][1] = "Hugo";

console.log(airplaneSeats[3][1]);

// YOUR CODE GOES BELOW THIS LINE:

// const array = [];
// array.push("start");
// for (const name of ["amir", "betty"]) {
//   setTimeout(() => array.push("processing " + name), 0);
// }
// array.push("end");
// array;

const array = [];
array.push("before");

const promise = Promise.resolve("some value")
  .then(() => {
    array.push("then1");
  })
  .then(() => {
    array.push("then2");
  })
  .then(() => {
    return array;
  });

array.push("after");
promise;
console.log(toString(promise));
