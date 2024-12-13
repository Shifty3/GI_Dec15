// setTimeout(() => {
//   console.log("2 secondds are up");
// });

// const names = ["ismael", "izzy", "izz"];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (adress, callback) => {
//   setTimeout(() => {
//     const data = {
//       long: 0,
//       lat: 0,
//     };

//     callback(data);
//   }, 2000);
// };

// geocode("buffalo", (data) => {
//   console.log(data);
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (num1, num2, callback) => {
  setTimeout(() => {
    let sum = num1 + num2;

    callback(sum);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
