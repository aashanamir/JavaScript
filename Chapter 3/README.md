# JavaScript Loops: for, while, and do-while

Loops in JavaScript are iterative structures used to execute a block of code repeatedly until a specified condition is met. Among the most commonly used loops are the for, while, and do-while loops. In this chapter, we'll explore each of these loops with practical examples.

1. **The for Loop**

   The for loop is widely used when the number of iterations is known or finite. It's often used for iterating over arrays or performing a specific number of repetitions.

   **Syntax:**

   ```for (initialization; condition; increment/decrement) {
       // code to be executed
   }
   ```

````

  **Example:**
```for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}```


## 2. The while Loop

The while loop is employed when the number of iterations is not predetermined, and the loop may need to execute zero or more times as long as the specified condition remains true.

**Syntax:**
```javascript
while (condition) {
    // code to be executed
}





## 3. The do-while Loop

Similar to the while loop, the do-while loop executes a block of code while a specified condition evaluates to true. However, unlike the while loop, the do-while loop executes the block of code at least once before checking the condition.

**Syntax:**
```javascript
do {
    // code to be executed
} while (condition);
```

## Practical Questions:

1. Write a for loop to print the numbers from 1 to 10.
2. Use a while loop to print even numbers from 2 to 10.
3. Implement a do-while loop to repeatedly prompt the user for a number until they enter a negative number.

**Solution:**
```javascript
let number;
do {
    number = parseInt(prompt("Enter a number:"));
} while (number >= 0);

console.log("You entered a negative number.");
```

4. Write a for loop to calculate the factorial of a given number.
5. Use a while loop to find the sum of digits of a given number.
6. Implement a do-while loop to simulate rolling a dice until a specific number is rolled.