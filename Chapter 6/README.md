# JavaScript Functions

Functions in JavaScript are one of the core building blocks of the language, providing a powerful way to encapsulate reusable code. They allow you to define code once and execute it multiple times from different parts of your application. Functions can take parameters, perform actions, and return a value. In this chapter, we'll explore the fundamentals of functions in JavaScript, different ways to define them, and their usage.


## Defining Functions

There are several ways to define functions in JavaScript:

Function Declarations
A function declaration is one of the most common ways to define a function. The function keyword is used, followed by the function name, parameters, and the function body enclosed in curly braces.

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Aashan")); // Output: "Hello, Aashan!"
```

Function Expressions
Function expressions involve defining a function inside an expression. You can use anonymous functions or named functions in this way. Function expressions are often used when a function needs to be passed as an argument to another function or when defining a function conditionally.

```javascript
const square = function(number) {
    return number * number;
};
console.log(square(4)); // Output: 16

```

Arrow Functions
Introduced in ES6, arrow functions offer a more concise syntax for writing functions. They are especially useful for short functions and when using functions as arguments to other functions.

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

Function Parameters and Arguments
Functions can take parameters, which act as variables within the function body. When a function is called, the values passed to the function are known as arguments.

Default Parameters
Starting from ES6, functions can have default parameter values. If no argument is passed, the default value is used.

```javascript
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 2)); // Output: 10
console.log(multiply(5)); // Output: 5

```
Functions are a foundational aspect of writing JavaScript. They help in reducing code redundancy, increasing reusability, and organizing code more efficiently
