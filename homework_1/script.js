import CustomPromise from "./promise.js";
import ajax from "./ajax.js";

const url = "https://api.thecatapi.com/v1/categories";

const config = {
  type: "GET",
  headers: {},
  data: {},
};

const p1 = ajax(url + "ll", config);
const p2 = ajax(url, config);
const p3 = ajax(url, config);

p1.then((res) => {
  console.log("p1 response:", res);
  throw new Error("this is error");
}).catch((error) => {
  console.log("this is an error in p1.", error);
});

p2.then((res) => {
  console.log("p2 res:", res);
  return "Some message.";
})
  .then((res) => {
    console.log("second then p2 res:", res);
    return 120;
  })
  .catch((error) => {
    console.log("this is an error in p2.", error);
  });

p3.catch((error) => {
  console.log("this is an error in p3.", error);
})
  .then((res) => {
    console.log("p3 res:", res);
    return JSON.parse(res);
  })
  .then((res) => {
    console.log("p3 res: second then:", res);
  });

const allPromises = CustomPromise.all([p1, p2, p3]);
allPromises
  .catch((error) => {
    console.log("this is an error in All.", error);
  })
  .then((res) => {
    console.log("allPromises res:", res);
    return "Everything is alright!";
  })
  .then((res) => {
    console.log(res);
  });

console.log('promise all',allPromises);
