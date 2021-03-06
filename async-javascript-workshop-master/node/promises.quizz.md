# Question 1 - (10min)

Create a promise version of the async readFile function

fs.readFile("./files/demofile.md", { encoding: "utf8" }, (err, data) =>

```js
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

// function readFile(filename, encoding) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, encoding, (err, data) => {
//       if (err) reject(err);
//       resolve(data);
//     });
//   });
// }
// readFile("./files/demofile.md", "utf-8").then(
//   data => console.log("File Read", data),
//   err => console.error("Failed To Read File", err)
// );

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

// function readFile(filename, encoding) {
// // return new Promise((resolve, reject )=>  {
//   fs.readFile(filename, encoding, (err, data) => {
//    (err) ? reject(err): resolve(data)
//   //  if (err) reject(err);
//   //     resolve(data);
//     //TODO
//   });
// // });
// }

readFile('./files/demofile.d', 'utf-8').then(
  (data) => console.log('File Read', data),
  (err) => console.error('Failed To Read File', err)
);
```

# Question 2

Load a file from disk using readFile and then compress it using the async zlib node library, use a promise chain to process this work.

```js
const fs = require('fs');
const zlib = require('zlib');

function zlibPromise(data) {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (error, result) => {
      // console.log(result);
      if (error) return reject(error);
      resolve(result);
    });
  });
}

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

readFile('./files/demofile.md', 'utf-8')
  .then(
    (data) => {
      console.log(data);
      // setTimeout(() => resolve("done2"), 1000);
      return zlibPromise(data);
    },
    (err) => console.log(err)
  )
  .then((res) => console.log(res));

//.then(zlibPromise(data)=> console.log(data)) // --> Load it then zip it and then print it to screen

// });
```

# Question 3

Convert the previous code so that it now chains the promise as well.

````js
const fs = require('fs');
const zlib = require('zlib');

function zlibPromise(data) {
  return new Promise((resolve, reject) => {
    zlib.gzip(data, (error, result) => {
      // console.log(result);
      if (error) return reject(error);
      resolve(result);
    });
  });
}

function readFile(filename, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, encoding, (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

readFile('./files/demofile.md', 'utf-8').then(
  (data) => {
    console.log(data);
    return zlibPromise(data)
  },
  (err) => console.log(err)
).then((res) => console.log(res));

    ```


# Question 4

Convert the previous code so that it now handles errors using the catch handler

# Question 5

Create some code that tries to read from disk a file and times out if it takes longer than 1 seconds, use `Promise.race`

```js
function readFileFake(sleep) {
  return new Promise(resolve => setTimeout(resolve, sleep));
}

readFileFake(5000); // This resolves a promise after 5 seconds, pretend it's a large file being read from disk
````

# Question 6

Create a process flow which publishes a file from a server, then realises the user needs to login, then makes a login request, the whole chain should error out if it takes longer than 1 seconds. Use `catch` to handle errors and timeouts.f

```js
function authenticate() {
  console.log("Authenticating");
  return new Promise(resolve => setTimeout(resolve, 2000, { status: 200 }));
}

function publish() {
  console.log("Publishing");
  return new Promise(resolve => setTimeout(resolve, 2000, { status: 403 }));
}

function timeout(sleep) {
  return new Promise((resolve, reject) => setTimeout(reject, sleep, "timeout"));
}

Promise.race( [publish(), timeout(3000)])
  .then(...)
  .then(...)
  .catch(...);
```
