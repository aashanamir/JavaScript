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


    // > (greater than)
    console.log(18 > 18); // true


    // > (less than)
    console.log(10 < 5); // False


    // >= (greater than or equal to)
    console.log(5 >= 5); // true

    // <= (less than or equal to)
    console.log(5 <= 5); // true
}


// 6. Conditional Statements (if, else if, and else)

// {
//     let a = 10;
//     if (a < 10)//false
//     {
//         alert(a + " is less than 10");
//     }
//     else if (a === 9) //false
//     {
//         alert(a + " is equal to 9");
//     }
//     else if (a === 10) //true
//     {
//         alert(a + " is equal to 10");
//     }
//     else {
//         alert(a + " is greater than 10");
//     }

// }



// 7. Ternory Operators

{
    // let age = prompt("Enter Your Age");
    // let canVote = (age >= 18) ? " greater than 18  " : "No";
    // document.write(canVote); // "Yes"

    let num = 10;
    let result = (num % 2 === 0) ? "Even" : "Odd";
    console.log(result); // "Even"
}

{
    let myVar = 6;

    switch (myVar) {

        case 1: console.log("Incorrect option");
            break;

        case 2: console.log("This is also incorrect");
            break;


        case 3: console.log("This is 3 also incorrect");
            break;

        default: console.log("Input is incorrect");


    }
}


{
    let age = 18;
    let height = 5;
    let minAge = 18;
    let minHeight = 5;

    if (age >= minAge && height >= minHeight) {
        document.write("You are eligible to apply");
    }
    else {
        document.write("You are not eligible to apply");
    }
}