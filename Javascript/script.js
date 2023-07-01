import CustomPromise from "./promise.js";
import ajax from "./ajax.js";

const url = "https://api.github.com/users/papiyan98";

const urls = [
  'https://api.github.com/users/papiyan98',
  'https://api.github.com/users/Aghasy8888',
  'https://api.github.com/users/saents'
];

const config = {
  type: "GET",
  headers: {},
  data: {},
};

// test promiseAll: all okay

const requests = urls.map(url => ajax(url, config));

CustomPromise.all(requests)
  .catch((error) => {
    console.log("this is an error in All.", error);
  })
  .then((result) => {
    console.log("allPromises result:", result);
    return "Everything is alright!";
  })
  .then((result) => {
    console.log(result);
  });

// let promise = ajax(url, {type: "GET", headers: {'Content-Type': 'application/json;charset=utf-8'}, data: {name: 'Arsen', age: 24}});
let promise = ajax(url);

console.log(promise);
promise.then(result => {
  console.log(result);
});

// const p1 = ajax(url + "ll", config); // 404 network error, cannot catch!
// const p2 = ajax(url, config);
// const p3 = ajax(url, config);

// p1.then((res) => {
//   console.log("p1 response:", res);
//   throw new Error("this is error");
// }).catch((error) => {
//   console.log("this is an error in p1.", error);
// });

// p2.then((res) => {
//   console.log("p2 res:", res);
//   return "Some message.";
// })
//   .then((res) => {
//     console.log("second then p2 res:", res);
//     return 120;
//   })
//   .catch((error) => {
//     console.log("this is an error in p2.", error);
//   });

// p3.catch((error) => {
//   console.log("this is an error in p3.", error);
// })
//   .then((res) => {
//     console.log("p3 res:", res);
//     return JSON.parse(res);
//   })
//   .then((res) => {
//     console.log("p3 res: second then:", res);
//   });

// const allPromises = CustomPromise.all([p1, p2, p3]);
// allPromises
//   .catch((error) => {
//     console.log("this is an error in All.", error);
//   })
//   .then((res) => {
//     console.log("allPromises res:", res);
//     return "Everything is alright!";
//   })
//   .then((res) => {
//     console.log(res);
//   });
