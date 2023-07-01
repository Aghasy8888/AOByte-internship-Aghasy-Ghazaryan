import CustomPromise from "./promise.js";

export default function ajax(url, config = {type: "GET", headers: {}, data: {}}) {
  return new CustomPromise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    // console.log(config);

    xhr.open(config.type, url);

    xhr.responseType = 'json'; // add responseType

    if (Object.entries(config.headers).length) {
      for (let [name, value] of Object.entries(config.headers)) {
        xhr.setRequestHeader(name, value);
      }
    }

    xhr.send(JSON.stringify(config.data));

    xhr.onload = function() {
      // console.log(xhr.getAllResponseHeaders())
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(xhr.response)
      } else {
        reject(new Error(`${xhr.status} ${xhr.statusText}`));
      }
    }

    // 404 status will not trigger xhr.onerror() because, technically it's not an error
    // 404 itself is a valid response

    xhr.onerror = function() {
      reject(new Error("Network error"));
    }
  });
}
