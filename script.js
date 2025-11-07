//  we learn about variables in javascript

// in mordern javascript we can declare variables using let, const and var keywords

// let keyword
let name = "James Nyakundi";
let age = 29;
let isStudent = false;

let description = `
My name is ${name},
 I am ${age} years old.`; // template literals

 console.log(description);


name = "Jane Doe"; // reassigning the variable

// const keyword
const country = "Kenya";
const pi = 3.14159;


// var keyword (not recommended for use in modern javascript)
var city = "Nairobi";

// displaying the variables in the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
console.log("Country:", country);
console.log("Pi:", pi);
console.log("City:", city);

//  what is the difference between let, const and var?
// let: used to declare variables that can be reassigned later
// const: used to declare variables that cannot be reassigned
// var: function-scoped variable declaration (can lead to unexpected behavior, hence not recommended)



// when it comes to javascript operaters we have the following types

// arithmetic operaters
let sum = 10 + 5; // addition
let difference = 10 - 5; // subtraction
let product = 10 * 5; // multiplication
let quotient = 10 / 5; // division
let remainder = 10 % 3; // modulus

// comparison operaters / relational operaters / equality operaters / Assignment operaters
let isEqual = (10 == '10'); // true
let isStrictEqual = (10 === '10'); // false
let isNotEqual = (10 != 5); // true
let isGreater = (10 > 5); // true
let isLess = (5 < 10); // true

// logical operaters
let andOperator = (true && false); // false
let orOperator = (true || false); // true
let notOperator = !true; // false  ! is the NOT operator

// displaying the results in the console
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);
console.log("Is Equal:", isEqual);
console.log("Is Strict Equal:", isStrictEqual);
console.log("Is Not Equal:", isNotEqual);
console.log("Is Greater:", isGreater);
console.log("Is Less:", isLess);
console.log("AND Operator:", andOperator);
console.log("OR Operator:", orOperator);
console.log("NOT Operator:", notOperator);


// conditional statements in javascript
// if, else if, else statements
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80 && score < 90) { // 80 to 89
    console.log("Grade: B");
} else if (score >= 70 && score < 80) { // 70 to 79
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

let age2 = 20;

if (age2 >= 18) {
    console.log("You  are elegibal to go drink alcohol");
} else {
    console.log("You are not elegibal to go drink alcohol");
}

// switch statement
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day Name:", dayName);

let bulbIsOn = true;

switch (bulbIsOn) {
    case true:
        console.log("The bulb is ON");
        break;
    case false:
        console.log("The bulb is OFF");
        break;
    default:
        console.log("Invalid state");
}

// ternary operator ? : is shorthand for if-else statement
let marks = 30;
let result = (marks >= 50) ? "Pass" : "Fail";
console.log("Result:", result);


// loops in javascript
// for loop
for (
    let i = 1; // initialization variable
    i <= 5; // condition
    i++ // increment
) { 
    console.log("For Loop Iteration:", i);
}

// u create an endless loop if the condition is always true

// while loop
let j = 1;

while (j <= 5) {
    console.log("While Loop Iteration:", j);
    j++;
}

// do-while loop
let k = 1;

do {
    console.log("Do-While Loop Iteration:", k);
    k++;
} while (k <= 5);   

// data types in javascript
// primitive data types
let str = "Hello, World!"; // string
let num = 42; // number
let bool = true; // boolean
let undef; // undefined
let nul = null; // null
let sym = Symbol("unique"); // symbol
let bigIntNum = 9007199254740991n; // BigInt

// non-primitive data types
let arr = [1, 2, 3, 4, 5]; // array
let obj = { name: "James", age: 29 }; // object

let brand = ["Apple", "Samsung", "Google"];
console.log(brand);

// displaying data types in the console
console.log("String:", str);
console.log("Number:", num);
console.log("Boolean:", bool);
console.log("Undefined:", undef);
console.log("Null:", nul);
console.log("Symbol:", sym);
console.log("BigInt:", bigIntNum);
console.log("Array:", arr);
console.log("Object:", obj);   


// json object
let student  = {
  "firstName": "John",
  "lastName": "Doe",
  "isStudent": true,
  "courses": [
    "Math",
    "Science"
  ]
};

console.log(student);

let students = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "isStudent": true
    },
    {
        "firstName": "Jane",
        "lastName": "Smith",
        "isStudent": false
    }
];

let blog  =  [
    {
        "id": 1,
        "title": "Learning JavaScript",
        "image": "js.png",
        "author": "James Nyakundi",
        "content": "JavaScript is a versatile programming language."
    },
    {
        "id": 2,    
        "title": "Understanding HTML",
        "image": "html.png",
        "author": "Jane Doe",
        "content": "HTML is the backbone of web development."
    }
];

for (let i = 0; i < blog.length; i++) {
    let post = blog[i];
    document.getElementById("title").innerHTML = post.title;
    document.getElementById("author").innerHTML = post.author;
    document.getElementById("content").innerHTML = post.content;

    //DOM manipulation to display blog posts
}


console.log(students);
console.log(blog);