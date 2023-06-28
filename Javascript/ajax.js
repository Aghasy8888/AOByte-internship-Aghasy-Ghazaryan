import CustomPromise from "./promise.js";

export default function ajax(url, config) {
  return new CustomPromise(function (resolve, reject) {
    try {
          const xhr = new XMLHttpRequest();
          xhr.open(config.type || "GET", url);

          for (let header in config.headers) {
            if (config.headers.hasOwnProperty(header)) {
              xhr.setRequestHeader(header, config.headers[header]);
            }
          }

          xhr.onload = function () {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
              resolve(xhr.responseText);
            } else {
              reject(new Error(xhr.statusText));
            }
          };

          xhr.onerror = function () {
            reject(new Error("Network error"));
          };

           try {
             xhr.send(JSON.stringify(config.data));
           } catch (error) {
             console.log("Error occurred while sending request:", error);
             reject(error);
           }
    } catch (error) {
        console.log('hello this is my error.');
    }
  
  });
}
