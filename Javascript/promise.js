export default function CustomPromise(callback) {
  this.value = null;
  this.error = null;
  this.onResolve = [];
  this.onReject = [];
  this.onFinally = null;
  this.state = "pending";

  let resolve = (value) => {
    if (this.state === "pending") {
      this.state = "resolved";
      this.value = value;
      this.onResolve.forEach((callback) => callback(value));
      if (this.onFinally) {
        this.onFinally();
      }
    }
  };

  let reject = (error) => {
    if (this.state === "pending") {
      this.state = "rejected";
      this.error = error;
      this.onReject.forEach((callback) => callback(error));
      if (this.onFinally) {
        this.onFinally();
      }
    }
  };

  try {
    callback(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

CustomPromise.prototype.then = function (onResolve, onReject) {
  const nextPromise = new CustomPromise((resolve, reject) => {
    const resolveHandler = (value) => {
      try {
        const result = onResolve ? onResolve(value) : value;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    };

    const rejectHandler = (error) => {
      try {
        const result = onReject ? onReject(error) : error;
        resolve(result);
      } catch (error) {
        reject(error);
      }
    };

    this.onResolve.push(resolveHandler);
    this.onReject.push(rejectHandler);
  });

  return nextPromise;
};

CustomPromise.prototype.catch = function (onReject) {
  return this.then(null, onReject);
};

CustomPromise.all = function (promises) {
  return new CustomPromise(function (resolve, reject) {
    const results = [];
    let completedPromises = 0;
    const numPromises = promises.length;

    if (numPromises === 0) {
      resolve(results);
    } else {
      promises.forEach(function (promise, index) {
        promise
          .then(function (value) {
            results[index] = value;
            completedPromises++;

            if (completedPromises === numPromises) {
              resolve(results);
            }
          })
          .catch(function (error) {
            results[index] = { status: "rejected", reason: error };

            if (completedPromises === numPromises) {
              resolve(results);
            } else {
                reject(results[index].reason);
            }
          });
      });
    }
  });
};

CustomPromise.prototype.finally = function (onFinally) {
  this.onFinally = onFinally;
  return this;
};
