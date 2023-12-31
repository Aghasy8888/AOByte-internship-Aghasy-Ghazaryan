import CustomPromise from "./promise.js";

export default function ajax(url, config) {
  return new CustomPromise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(config.type || "GET", url);

    for (let header in config.headers) {
      if (config.headers.hasOwnProperty(header)) {
        xhr.setRequestHeader(header, config.headers[header]);
      }
    }

    xhr.onload = function () {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error(xhr.statusText));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Network error"));
    };

    xhr.send(JSON.stringify(config.data));
  });
}
