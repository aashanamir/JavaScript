# JavaScript Chapter 1

## 1. What is JavaScript and How Programming Languages Work

JavaScript is a high-level, interpreted programming language that is commonly used for creating interactive and dynamic content on web pages. It was initially developed by Brendan Eich at Netscape Communications Corporation and later standardized by the ECMA International. JavaScript code is executed by web browsers to manipulate the Document Object Model (DOM) of web pages, enabling dynamic behavior such as user interaction, animations, and form validation.

Programming languages, including JavaScript, work by translating human-readable code into machine-readable instructions. These instructions are executed by a computer's processor to perform desired tasks. JavaScript can be executed in various environments, including web browsers, servers (using Node.js), and even in some desktop and mobile applications.

## 2. Our 1st JavaScript Code

Let's start with a simple "Hello, World!" example in JavaScript:


In this code snippet:
- `console.log()` is a function used to output messages to the console.
- `"Hello, This is Aashan!"` is a string literal enclosed in double quotes.

When this code is executed, it will print "Hello, This is Aashan!" to the console.

## 3. Variables in JavaScript

JavaScript is a dynamically typed language. Variables in JavaScript are used to store and manipulate data. You can declare variables using the `var`, `let`, or `const` keywords.

### Examples:

```javascript
var numberVar;
numberVar = 10;

// Using let
let stringLet = "Hello";

// Using const
const PI = 3.14;
```

## 4. Variable Rules

Some important rules to remember while working with variables in JavaScript include:
- Variable names can contain letters, digits, underscores, and dollar signs.
- They must begin with a letter, underscore, or dollar sign (not a digit).
- JavaScript is case-sensitive, so `myVar` and `MyVar` are different variables.
- Reserved keywords cannot be used as variable names.

### Examples:

```javascript
// Valid variable names
let myVariable;
let _variable;
let $variable;
let myVar123;
let my_var;
```

// Invalid variable names
// let 123var; // Cannot start with a digit
// let my-Variable; // Hyphens are not allowed
// let let; // Reserved keyword

## 5. let, const, and var

In JavaScript, there are three ways to declare variables:
- `var`: Historically used for variable declaration. Variables declared with `var` have function scope or global scope.
- `let`: Introduced in ECMAScript 6 (ES6). Variables declared with `let` have block scope, meaning they are limited to the block in which they are defined.
- `const`: Also introduced in ES6. Constants declared with `const` are block-scoped like `let`, but their values cannot be reassigned once they are initialized.

### Example: `var`

```javascript
var x = 10;
if (true) {
    var y = 20;
}
console.log(x); // Output: 10
console.log(y); // Output: 20

let a = 30;
if (true) {
    let b = 40;
}
console.log(a); // Output: 30
console.log(b); // Error: b is not defined


const NAME = "Muhammad";
NAME = "Aashan"; // Error: Assignment to constant variable

```


## 6. Data Types in JavaScript

## 6. Data Types in JavaScript

JavaScript supports several data types, including:

- **Primitive Data Types**: such as numbers, strings, booleans, `null`, and `undefined`.
- **Complex Data Types**: such as objects and functions.

### Examples:

#### Primitive Data Types:

```javascript
// Number
let number = 42;

// String
let string = "Hello, World!";

// Boolean
let isTrue = true;

// null
let empty = null;

// undefined
let notDefined;

// Object
let person = {
    name: "John",
    age: 30,
    isAdmin: false
};

// Function
function greet(name) {
    console.log("Hello, " + name + "!");
}
```

Understanding data types is crucial for effective JavaScript programming as it affects how data is stored, manipulated, and processed.

This covers the basics of JavaScript as outlined in Chapter 1. In subsequent chapters, we'll delve deeper into each topic and explore more advanced concepts.
