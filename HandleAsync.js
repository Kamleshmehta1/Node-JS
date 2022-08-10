let a = 20;
let b = 0;

function myFunc(callback) {
  setTimeout(callback, 3000);
  console.log(a + b);
}

myFunc(function () {
  b = 20;
  console.log(a + b);
});

// let waitingFunc = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 3000);
// });

// console.log(a + b);

// waitingFunc.then((data) => {
//   console.log(a + data);
// });
