//1. Comments in JS

// This is a single-line comment

/*
This is a multi-line comment
spanning multiple lines
*/

//2. Arithmetic Operators
{
    let sum = 10 + 5;  // 15
    let difference = 10 - 5;  // 5
    let product = 10 * 5;  // 50
    let quotient = 10 / 5;  // 2
    let remainder = 10 % 5;  // 0

    let a = 2;
    let b = 3;

    console.log("a + b = ", a + b);
    console.log("a + b = ", a - b);
    console.log("a x b = ", a * b);
    console.log("a / b = ", a / b);
    console.log("a % b = ", a % b);
    console.log("a ** b = ", a ** b);
}

{
    // 3. Unary Operators
    let x = 10;
    x++;  // x is now 11 => x = x + 1;
    x--;  // x is back to 10 => x = x -1;
}


{
    //4. Assignment Operators

    let x = 10;
    x += 5;  // Equivalent to x = x + 5 => 15'
    x -= 10; // Equivalent to x = x - 5 => 5'
    x *= 2; // Equivalent to x = x * 5 => 10'
    x /= 2; // Equivalent to x = x / 5 => 5'


    console.log(x);

}


{
    // 5. Comparison Operators    

    let a = 10;
    let b = 5;
    let str = "10";
    // == (equal to)
    console.log(a == b); // false


    // === (equal to)
    console.log(a === str); // false


    // != (not equal to)
    console.log(a !== str); // true

}