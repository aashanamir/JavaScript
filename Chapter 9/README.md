# Asynchronous JavaScript - Callbacks, Promises, and Async/Await

Asynchronous programming is a fundamental concept in JavaScript that allows you to execute code non-blockingly, enabling tasks such as fetching data from servers, handling user input, and more without freezing the user interface. In this chapter, we'll explore three key techniques for asynchronous programming in JavaScript: callbacks, promises, and async/await.

## 1. Callbacks

Callbacks are functions passed as arguments to other functions, which are invoked after a task completes or an event occurs. They are a traditional approach to asynchronous programming in JavaScript.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    const data = "Some data fetched from server";
    callback(data);
  }, 1000);
}

function processData(data) {
  console.log("Data received:", data);
}

fetchData(processData);
```

## 2. Promises

Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a cleaner alternative to callbacks, especially for handling multiple asynchronous tasks in sequence or parallel.

```javascript
const promise = new Promise((resolve, reject) => {
  // Asynchronous task
  if (taskCompleted) {
    resolve(result);
  } else {
    reject(error);
  }
});

promise.then(
  (result) => {
    // Handle success
  },
  (error) => {
    // Handle error
  }
);
```

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Some data fetched from server";
      resolve(data);
    }, 1000);
  });
}

fetchData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
```

## 3. Async/Await

Async functions are a cleaner way to write asynchronous code using promises. They allow you to write asynchronous code that looks synchronous, making it easier to understand and maintain.

```javascript
async function functionName() {
  try {
    const result = await asyncTask();
    // Handle result
  } catch (error) {
    // Handle error
  }
}
```

```javascript
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "Some data fetched from server";
      resolve(data);
    }, 1000);
  });
}

async function processData() {
  try {
    const data = await fetchData();
    console.log("Data received:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

processData();
```

Asynchronous programming is essential for building responsive and efficient JavaScript applications. Callbacks, promises, and async/await are powerful tools for managing asynchronous operations, allowing you to write clean and maintainable code while handling complex asynchronous tasks effectively. Understanding these concepts is crucial for any JavaScript developer looking to work with asynchronous code.
