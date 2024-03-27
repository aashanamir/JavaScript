# JavaScript Chapter 2: Conditions and Operators

## Introduction

In this chapter, we dive into the fundamental aspects of JavaScript that allow us to perform operations on values and make decisions based on conditions: operators and conditional statements. Understanding these concepts is essential for adding logic and flow control to your JavaScript programs.

## Comments in JS

Comments are a crucial part of programming, allowing developers to leave notes and explanations within the code. In JavaScript, comments can be made in two ways:
- Single-line comments, started with `//`
- Multi-line comments, enclosed between `/*` and `*/`

```javascript
// This is a single-line comment

/*
This is a multi-line comment
spanning multiple lines
*/
```

# Arithmetic Operators

JavaScript provides a set of arithmetic operators that can perform mathematical operations on numbers, such as addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), and modulus (`%`).

```javascript
let sum = 10 + 5;  // 15
let difference = 10 - 5;  // 5
let product = 10 * 5;  // 50
let quotient = 10 / 5;  // 2
let remainder = 10 % 5;  // 0
```

# Unary Operators

Unary operators work with a single operand. Common unary operators include the increment operator (`++`) which adds one to its operand, and the decrement operator (`--`) which subtracts one.

```javascript
let x = 10;
x++;  // x is now 11
x--;  // x is back to 10
```

# Assignment Operators

Assignment operators are used to assign values to variables. The basic assignment operator is `=`, but there are also compound assignment operators that combine arithmetic operations with assignment, such as `+=` and `*=`.

```javascript
let x = 10;
x += 5;  // Equivalent to x = x + 5
```


# Comparison Operators

Comparison operators compare two values and return a boolean value, true or false. These include `==` (equal to), `!=` (not equal to), `===` (strictly equal to), `!==` (strictly not equal to), `>` (greater than), `<` (less than), `>=` (greater than or equal to), and `<=` (less than or equal to).

Examples:

```javascript
// == (equal to)
console.log(5 == 5); // true
console.log('5' == 5); // true, because == does type coercion

// != (not equal to)
console.log(5 != 4); // true

// === (strictly equal to)
console.log(5 === 5); // true
console.log('5' === 5); // false, because === does not perform type coercion

// !== (strictly not equal to)
console.log(5 !== '5'); // true

// > (greater than)
console.log(10 > 5); // true

// < (less than)
console.log(5 < 10); // true

// >= (greater than or equal to)
console.log(5 >= 5); // true

// <= (less than or equal to)
console.log(5 <= 5); // true
```

# Logical Operators

Logical operators are used to determine the logic between variables or values. JavaScript includes logical AND (`&&`), logical OR (`||`), and logical NOT (`!`).

Examples:

```javascript
// Logical AND (&&)
console.log(true && true); // true
console.log(true && false); // false
// Can be used to check if two conditions are true
let a = 5, b = 10;
console.log(a > 0 && b > 0); // true

// Logical OR (||)
console.log(true || false); // true
console.log(false || false); // false
// Can be used to check if at least one of two conditions is true
let c = -5, d = 10;
console.log(c > 0 || d > 0); // true

// Logical NOT (!)
console.log(!true); // false
console.log(!false); // true
// Can be used to invert the truth value of a condition
let e = 5;
console.log(!e < 5); // false
```

# Ternary Operators

The ternary operator is a shorthand for the `if` statement and is represented by `?`. It takes three operands: a condition, a value if true, and a value if false.

Examples:

```javascript
let age = 20;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // "Yes"

let num = 10;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result); // "Even"
```

# Conditional Statements (if, else if, and else)

Conditional statements in JavaScript allow you to execute different blocks of code based on specified conditions. The `if` statement executes a block of code if a specified condition is true.

Examples:

```javascript
// Example 1: If statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

// Example 2: If-else statement
let weather = "rainy";
if (weather === "sunny") {
    console.log("It's a sunny day.");
} else {
    console.log("You might need an umbrella.");
}

// Example 3: If-else if-else statement
let time = 15;
if (time < 12) {
    console.log("Good morning!");
} else if (time >= 12 && time < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
```