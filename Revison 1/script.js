// 1. Data Type In JavaScript

// Premitive Data Type

let str = "This is a String"; // String Type
let num = 123; // Number Type
let myBool = true; // Bool Type
let unDef = undefined; // undefined type
let myNull = null; // null Type


// No Premitive Data Type

let myArr = ["Apple" , "Mango" , "Banana"];

let myObj = {
    fruit1 : "Apple",
    fruti2 : "Mango",
    fruit3 : "Banana",
}


console.log("Data Type of myObj",typeof(myObj),)



let hamburger = document.getElementsByClassName("bi-list")[0];

let toggle = 0;


let myList = document.querySelector("ul");

hamburger.addEventListener("click" , function(){
    if(toggle === 0)
    {
        hamburger.classList.remove("bi-list");
        hamburger.classList.add("bi-x-octagon");
        myList.style.display = "flex";

        toggle = 1;
    }
    else if (toggle === 1)
    {
        hamburger.classList.add("bi-list");
        hamburger.classList.remove("bi-x-octagon");
        myList.style.display = "none";

        toggle = 0;  
    }
})