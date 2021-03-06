'use strict'; // from levelup

function objectAssign(target, properties) {
  for (var key in properties) {
    target[key] = properties[key];
  }
}

function promisify() {
  var callback;
  var promise = new Promise(function (resolve, reject) {
    callback = function callback(err, value) {
      if (err) reject(err);else resolve(value);
    };
  });
  callback.promise = promise;
  return callback;
}

module.exports = promisify;