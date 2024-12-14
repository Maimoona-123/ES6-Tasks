// Global Scope ;

const myGloblVar = "I am a global variable";

function showGlobalVar() {
  console.log(myGloblVar);
}
showGlobalVar();

// var

var myGlobalVar = "I am a global variable";

function showGlobalVar() {
  console.log(myGlobalVar);
}
showGlobalVar();

// let

// let myGlobal = "I am a global variable";

// function showGlobalVar() {
//     console.log(myGlobal);
// }

// showGlobalVar();

// const

// const GlobalVar = "I am a global variable";

// function showGlobalVar() {
//     console.log(GlobalVar);
// }

// showGlobalVar();



// Question: 2

// Function Scope

// var

// function myFunction() {
//     var myVar = 10;
// }
// myFunction(); 
// console.log(myVar);


// let

// function myFunction() {
//     let mylet = 10;
// }

// myFunction(); 
// console.log(mylet);



// Const

// function myFunction() {
//     const myconst = 10;
// }

// myFunction(); 
// console.log(myconst);



// Question: 3

// Block Scope:

// function checkNumber(num) {
//     if (num > 10) {
//       var message = "Number is greater than 10"; 
//     //   console.log(message); 
//     }

//     console.log("Outside if block:", message);
//   }

//   checkNumber(15); 
//   Var is Block scope



//   let

// function checkNumber(num) {
//     if (num > 10) {
//       let message = "Number is greater than 10"; 
//     //   console.log(message); 
//     }

//     console.log("Outside if block:", message);
//   }

//   checkNumber(15); 
//   let is not a Block scope


//   Const


// function checkNumber(num) {
// if (num > 10) {
// const message = "Number is greater than 10"; 
//   console.log(message); 
// }

// console.log("Outside if block:", message);
// }

// checkNumber(15); 
//   const is not a Block scope



// Question: 4

// Hoisting with var:

console.log(myVar);
var myVar = 10;

// What value do you get?   "Undefined";


// Hoisting with let and const:

// console.log(myLet); // This will throw a ReferenceError due to the Temporal Dead Zone (TDZ)
// let myLet = 10;



// console.log(myLet); // This will throw a ReferenceError due to the Temporal Dead Zone (TDZ)
// const myLet = 10;

// What kind of error do you get?  "ReferenceError: Cannot access 'myConst' before initialization"



// Question: 5
// Re-declaration:

var x = 10;
var x = 20;
console.log(x);  // Output: 20


// let x = 10;
// let x = 20;  // SyntaxError: Identifier 'x' has already been declared
// console.log(x);


// const x = 10;
// const x = 20;  // SyntaxError: Identifier 'x' has already been declared
// console.log(x);

// What happens in each case?   "SyntaxError"



// Question: 6
// Re-assignment:

var myVariable = 10;
console.log(myVariable);  // Output: 10

// Reassign myVariable a new value
myVariable = 20;
console.log(myVariable);  // Output: 20


// Let

let MyVar = 10;
console.log(MyVar);  // Output: 10

// Reassign myVariable a new value
MyVar = 20;
console.log(MyVar);  // Output: 20


// const

// const myConstVar = 10;
// console.log(myConstVar);  // Output: 10

// // Try to reassign myVariable a new value
// myConstVar = 20;  // TypeError: Assignment to constant variable.
// console.log(myConstVar);


// What happens in each case?  "var Output is "20", Let Output is "20", and const Output is "TypeError: Assignment to constant variable." "


// Question: 7
// Temporal Dead Zone (TDZ):

// {
//   console.log(myLet);  // This will throw a ReferenceError
//   let myLet = 10;
// }

// Const

// {
//   console.log(myConst);  // This will throw a ReferenceError
//   const myConst = 10;
// }


// When to use var, let, and const:

function testVar() {
  if (true) {
    var x = 10; // 'x' is function-scoped, not block-scoped
  }
  console.log(x);  // Output: 10 (Accessible even outside the if block)
}

testVar();


// 





//  Question : 8
// String Interpolation:

// ...
let firstName = "John";
let lastName = "Doe";


// ...

let frstName = "John";
let lstName = "Doe";

let fullName = `${frstName} ${lstName}`;

console.log(fullName);



// Question : 9
// Multi-line Strings:

// ....

let address = `123 Main St
Apt 4B
New York, NY 10001`;

console.log(address);



// Simple Expressions:


// .....

let num1 = 5;
let num2 = 10;


// .....


let number1 = 5;
let number2 = 10;

let result = `The sum of ${number1} and ${number2} is ${number1 + number2}.`;

console.log(result);



// Function Calls:

// .....

// Create a function that takes two numbers and returns their product.

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

let reslt = multiplyNumbers(5, 3);
console.log(reslt);  // Output will be 15


// Use a template literal to call this function inside a string and log the result to the console.

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(`${greet('John')}`);


// Creating a Tagged Template:

// Write a simple tag function that takes a template string and logs it.

function logTemplate(strings) {
  console.log(strings);
}

logTemplate`This is a simple template string.`;


// Use this tag function with a template literal.

function logTemplate(strings, ...expressions) {
  console.log("String parts:", strings);
  console.log("Expressions:", expressions);
}

let name = "Alice";
let age = 25;

logTemplate`Hello, my name is ${name} and I am ${age} years old.`;


// Formatting:

// Write a tag function that formats a string by making it uppercase.

function uppercaseTemplate(strings) {
  return strings[0].toUpperCase();
}

let greeting = uppercaseTemplate`hello, world`;

console.log(greeting);  // Output: HELLO, WORLD


// Use this tag function with a template literal and log the result.

function uppercaseTemplate(strings) {
  return strings[0].toUpperCase();

}
let firstNamename = "Alice";
let greting = uppercaseTemplate`Hello, my name is ${firstName}.`;

console.log(greting);  // Output: HELLO, MY NAME IS ALICE.


// Conditional Logic:

// Create a variable for the current hour.

let currentHour = new Date().getHours();
console.log(currentHour);


// Use a template literal to display a different message depending on 
// whether it's morning (before 12 PM) or afternoon (after 12 PM).


let curentHour = new Date().getHours();

let message = `Good ${curentHour < 12 ? 'Morning' : 'Afternoon'}!`;

console.log(message);


// Loops within Template Literals:

// Create an array of items (e.g., a shopping list).

let shoppingList = ["Apples", "Bananas", "Bread", "Milk", "Eggs"];

console.log(shoppingList);


// Use a template literal to generate an HTML list (<ul> and <li>
/* elements) from the array and log it to the console. */


let shoppingLists = ["Apples", "Bananas", "Bread", "Milk", "Eggs"];

let htmlList = `<ul>${shoppingLists.map(item => `<li>${item}</li>`).join('')}</ul>`;

console.log(htmlList);



// Escaping Backticks:

// Create a string that includes a backtick character using a template literal.

const string = `This string contain a Backtick`

// Log the string to the console.
console.log(string);


// Nested Template Literals:

// Create nested template literals to build a more complex string, such as nested HTML structure (e.g., a table with rows and cells).

const data = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Mark', age: 35 }
];
console.log(data);

const table = `
  <table border="1">
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
    ${data.map(person => `
      <tr>
        <td>${person.name}</td>
        <td>${person.age}</td>
      </tr>
    `).join('')}
  </table>
`;

// log the result to the console
console.log(table);


//Simple Condition:

// Create a variable age.

let Age = 25;
console.log(Age);

// Use the ternary operator to assign a variable canVote the value "Yes" if age is 18 or older, and "No" otherwise.

let aGe = 18;
let canVote = aGe >= 18 ? "Yes" : "No";

// Log canVote to the console.
console.log(canVote);


// Even or Odd:

// Create a variable number.

let number = 10;
console.log(number);


// Use the ternary operator to assign a variable evenOrOdd the value "Even" if number is even, and "Odd" if it's odd.

let nmber = 8
let evenOrOdd = nmber % 2 === 0 ? "Even" : "Odd"

// Log evenOrOdd to the console.

console.log(evenOrOdd);


// Grade Evaluation:

// let percentage = +prompt("Enter your Percentage");

// function assignGrade(score) {
//   const grade =
//     score >= 90
//       ? "A"
//       : score >= 80
//       ? "B"
//       : score >= 70
//       ? "C"
//       : score >= 60
//       ? "D"
//       : "F";
//   return grade;
// }

// // Example usage
// const score = 85;
// console.log(`Score: ${score}, Grade: ${assignGrade(score)}`);


// Login Status:

// Create a variable isLoggedIn.

let isLoggedIn = true;  // This can be true or false depending on the login status
console.log(isLoggedIn);

// Use the ternary operator and logical operators to assign a variable statusMessage the value "Welcome back!" if isLoggedIn is true,
// and "Please log in" if isLoggedIn is false.

let isLoggedin = true;
let statusMessage = isLoggedin ? "Welcome back!" : "Please login";

// Log statusMessage to the console.
console.log(statusMessage);


// Discount Eligibility:

// Create variables isMember and purchaseAmount.

let isMember = true;
let purchaseAmount = 200;


// Use the ternary operator and logical operators to assign a variable discount the value 10% of purchaseAmount if isMember is true
// and purchaseAmount is greater than 100, and 0 otherwise.

let isMembr = true;        // You can change this value for testing
let purchasAmount = 120;   // You can change this value for testing

let discount = (isMembr && purchasAmount > 100) ? purchasAmount * 0.10 : 0;

console.log(discount);


// Determine Max Value:

//Create a function maxValue(a, b) that returns the larger of the two
// numbers using the ternary operator.


function maxValue(a, b) {
  return a > b ? a : b;
}

console.log(maxValue(10, 20));  // Output: 20
console.log(maxValue(30, 15));  // Output: 30


// Greeting Message:

//  Create a function greet(name) that returns a greeting message. If name is not provided (or is an empty string), it should return "Hello,
// guest!", otherwise, it should return "Hello, [name]!".

function greet(name) {
  return name ? `Hello, ${name}!` : "Hello, guest!";
}

console.log(greet("Alice"));  // Output: Hello, Alice!
console.log(greet(""));       // Output: Hello, guest!
console.log(greet());         // Output: Hello, guest!


// Call the function with and without a name and log the result.

function greet(name) {
  return name ? `Hello, ${name}!` : "Hello, guest!";
}

// Calling the function without a name (or with an empty string)
console.log(greet(""));       // Output: Hello, guest!
console.log(greet());         // Output: Hello, guest!


// Mapping Values:

// Create an array of numbers.

const nmbersArr = [1, 2, 3, 4, 5, 6];

// Use the map method with a ternary operator to create a new array
// where each number is doubled if it is even and tripled if it is odd.


const transformedNumbers = nmbersArr.map(num =>
  num % 2 === 0 ? num * 2 : num * 3
);

// Log the new array to the console.
console.log(transformedNumbers);


// Filtering Values:

// Create an array of strings.

const strings = ['apple', 'cat', 'banana', 'dog', 'kiwi'];

// Use the filter method with a ternary operator to create a new array
// that only includes strings with a length greater than 3.

const filteredStrings = strings.filter(str => str.length > 3 ? true : false);

// Log the new array to the console.
console.log(filteredStrings);



// Copying an Array:

// Create an array originalArray with some elements.

let originalArr = ["Maimoona", true, 45, "Javascript", 36];

// Use the spread operator to create a copy of originalArray called copiedArray.

const copiedArray = [...originalArr];

// Log both arrays to the console to verify they are the same but not the same reference

console.log('Original Array:', originalArr);
console.log('Copied Array:', copiedArray);

console.log(originalArr === copiedArray); // This will log 'false', confirming they are different references.

// console.log(originalArray === copiedArray) will log false because although the arrays have the same elements, 
// they are stored at different memory locations (references are different).



// Merging Arrays:

// Create two arrays array1 and array2.

let array1 = ["Apple", "Kiwi", "football", 45];
let array2 = [42, 'Hello', true, 'JavaScript', null]

// Use the spread operator to create a new array mergedArray that
// combines the elements of array1 and array2.

let mergedArray = [...array1, ...array2];

console.log(mergedArray);



// Adding Elements to an Array:

// Create an array numbers with some elements.

let nmbrArr = [1, 3, 29, 34, 10];

// Use the spread operator to add a new element at the beginning and at the end of the numbers array.
// Adding 5 at the beginning and 60 at the end

let updatedNumbers = [5, ...nmbrArr, 60];
console.log(updatedNumbers);



// Copying an Object:

// Create an object originalObject with some key-value pairs.

let originalObject = {
  name: "Alice",
  age: 25,
  profession: "Developer",
  isStudent: false
};

// Use the spread operator to create a copy of originalObject called copiedObject.
let copiedObject = { ...originalObject };

console.log('Original Object:', originalObject);
console.log('Copied Object:', copiedObject);

// Verifying that they are not the same reference
console.log(originalObject === copiedObject); // This will log 'false'



// Merging Objects:

// Create two objects object1 and object2 with some overlapping keys.
let object1 = {
  name: "Alice",
  age: 18,
  profession: "Development"
};

let object2 = {
  name: "Bob",
  age: 24,
  city: "New York"
};

// Use the spread operator to create a new object mergedObject that combines the properties of object1 and object2.
let mergedObject = { ...object1, ...object2 };

console.log('Merged Object:', mergedObject);



// Updating Object Properties:

// Create an object user with properties name, age, and email.

let userObj = {
  name: "Mahnoor",
  age: 20,
  email: "mahnoor12@gmail.com",
  address: "karachi 3 street"
}

// Use the spread operator to create a new object updatedUser that
// updates the email property and adds a new address property.

let updatedUser = {
  ...userObj,
  email: "mahnoor.new@example.com",  // Updating the email property
  address: "123 Main St, Springfield"  // Adding the new address property
};

console.log('Updated User:', updatedUser);


// Passing Array Elements as Arguments:

// Create a function sum(a, b, c) that returns the sum of three numbers.
function sum(a, b, c) {
  return a + b + c;
}

let answer = sum(3, 6, 10);
console.log(answer);


// Create an array numbers with three elements.

function sum(a, b, c) {
  return a + b + c;
}

let numbers = [5, 10, 15];

// Use the spread operator to pass the elements of numbers as arguments to the sum function.
let rsult = sum(...numbers);

console.log(rsult);  // Output: 30


// Combining Multiple Arrays:

// Create a function combineArrays that takes any number of arrays
// as arguments and returns a single array containing all elements.

// let Array1 = [1, 2, 3];
// let Array2 = [4, 5, 6];
// let Array3 = [7, 8, 9];

// let combinedArray = combinedArray(Array1, Array2, Array3);
// console.log(combinedArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]



// Rest Parameter with Spread Operator:

// Create a function multiply that takes a number and any number of
// additional arguments.

function multiply(num, ...args) {
  return args.reduce((acc, current) => acc * current, num);
}

// Example usage:
console.log(multiply(2, 3, 4));  // Outputs: 24
console.log(multiply(5, 2, 3));  // Outputs: 30


// Use the rest parameter to gather the additional arguments into an
// array and multiply each by the first argument.

function multiply(num, ...args) {
  return args.map(arg => num * arg);
}

// Example usage:
console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
console.log(multiply(5, 1, 2, 3, 4)); // Output: [5, 10, 15, 20]


// Call the function with appropriate arguments and log the result.

function multiply(num, ...args) {
  return args.map(arg => num * arg);
}

// Call the function with appropriate arguments
const finalRes = multiply(2, 1, 2, 3, 4);
console.log(finalRes); // Output: [2, 4, 6, 8]


// Spread Operator with Nested Structures:

// Create a nested array nestedArray and use the spread operator to create a shallow copy.

let nestedArray = [[1, 2], [3, 4], [5, 6]];
let shallowCopy = [...nestedArray];

// Log the original and shallow copy to the console
console.log("Original nested array:", nestedArray);
console.log("Shallow copy:", shallowCopy);


shallowCopy[0][0] = 99;

console.log("Modified shallow copy:", shallowCopy);
console.log("Original nested array after modification:", nestedArray);


// Sum Function:

// Create a function sum that uses the rest operator to take any number of arguments.

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5));  // Outputs: 15


// The function should return the sum of all its arguments.
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5));  // Outputs: 15


// Average Function:

function average(...args) {
  return args.reduce((a, b) => a + b, 0) / args.length;
}

console.log(average(1, 2, 3, 4, 5));  // Outputs: 3


// First and Rest:

// Create an array numbers with at least 5 elements.
let arrayNum = [21, 5, 87, 34, 1, 7];

// Use array destructuring with the rest operator to assign the first element to a variable
//  first and the remaining elements to a variable rest.

const [first, ...rest] = arrayNum;

// Log the results
console.log(first); // Output: 1 (first element)
console.log(rest);


// Skip and Rest:

// Create an array colors with at least 5 elements.
let colorArr = ["Red", "Pink", "Grey", "Purple", "Yellow"]

const [, , ...remainingColors] = colorArr;

console.log(remainingColors); // Output: ['blue', 'yellow', 'orange']


// Basic Destructuring:

const person = {
  Name: "Mahnoor",
  age: 17,
  email: "MahnoorKhan34@gmail.com",
  adress: "123 Main St, Springfield, IL"
};

const { Name, email, ...rests } = person;

console.log(Name);
console.log(email);
console.log(rests);


// Nested Destructuring:

let studentData = {
  stdId: 12345,
  stdName: "Jane smith",
  stdGrades: [90, 78, 85, 67],
  info: {
    age: 20,
    major: "CompScience"
  }
};

let { stdId, stdName, info: { major }, ...rst } = studentData

console.log(stdId);
console.log(stdName);
console.log(major);
console.log(rst);


// Filter Even Numbers:

function filterEven(...args) {
  return args.filter(num => num % 2 === 0)
}

console.log(filterEven(1, 2, 3, 4, 5, 6));
console.log(filterEven(10, 15, 20, 25));   // [10, 20]
console.log(filterEven(7, 13, 19));        // []


// Combine and Sort Arrays:



// Basic Destructuring:

let fruitArr = ["Apple", "Banana", "Cherry"]

const [firstFruit, secondFruit, thirdFruit] = fruitArr;

console.log(firstFruit);  // "Apple"
console.log(secondFruit); // "Banana"
console.log(thirdFruit);  // "Cherry"


// Skipping Elements: 

let colorsArr = ["Red", "Blue", "Green", "Yellow"]

let [primaryColor, , tertiaryColor] = colorsArr;

console.log(primaryColor);    // "Red"
console.log(tertiaryColor);


// Rest Operator:

let numbrs = [1, 2, 3, 4, 5]
let [firstNum, ...remainingNum] = numbrs
console.log(remainingNum);


// Basic Destructuring:

const Person = {
  naMe: "John Doe",
  agE: 30,
  ciTy: "New York"
};

const { naMe, agE, ciTy } = Person;

console.log(naMe);  // Output: John
console.log(agE);   // Output: 30
console.log(ciTy);  // Output: New York


// Renaming Variables:

const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020
};

const { make: carMake, model: cardModel, year: carYear } = car

console.log(carMake);
console.log(cardModel);
console.log(carYear);


// Default Values:

let setting = {
  theme: "Dark",
  // language: "English"
}

let { theme, language = "English" } = setting

console.log(theme);
console.log(language);


// Array of Arrays:

let nestedArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let [[a], [b], [c]] = nestedArr

console.log(a);
console.log(b);
console.log(c);


// Object within an Object:

const profile = {
  username: "johndoe123",
  details: {
    Email: "johndoe@example.com",
    Address: "123 Main St, Anytown, USA"
  }
};


const { username, details: { Email, Address } } = profile;

console.log(username); // Output: johndoe123
console.log(email);    // Output: johndoe@example.com
console.log(address);  // Output: 123 Main St, Anytown, USA


// Mix of Arrays and Objects:

const persData = {
  id: 1,
  info: [
    { nAme: "Alice" },
    { persAge: 24 }
  ]
};

const { id, info: [{ nAme }, { persAgeAge }] } = persData;

// Output the variables to check the result
console.log(id);   // 1
console.log(nAme); // Alice
console.log(Age);


// Array Parameters:

function printCoordinate([x, y]) {
  console.log(`x: ${x}, y: ${y} `);

}

printCoordinate([10, 20]);
printCoordinate([30, 40]);
printCoordinate([50, 60]);


// Object Parameters:

function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

// Call the function with different user objects
displayUser({ name: "Alice", age: 30 });  // Output: Name: Alice, Age: 30
displayUser({ name: "Bob", age: 25 });    // Output: Name: Bob, Age: 25
displayUser({ name: "Charlie", age: 40 }); // Output: Name: Charlie, Age: 40


// List Property Names:

const book = {
  title: "The Great Gatsby",
  Author: "F. scot Fitzerglad",
  Year: 1925
};

const propertyName = Object.keys(book)
console.log(propertyName);


// Count Properties:

const studntData = {
  StdName: "John Doe",
  StdAge: 15,
  Grade: "10th",
  School: "Central High School"
}

const proprtyName = Object.keys(studntData)
console.log(proprtyName);

const numberOfProperty = proprtyName.length;
console.log(numberOfProperty);


// Iterate Over Keys:

let product = {
  name: "Laptop",
  price: 999.99,
  catogrie: "Electronics"
};

const property = Object.keys(product);

property.forEach((key) => {
  console.log(`${key}: ${product[key]} `);
});


// List Property Values:

let movie = {
  title: "Inception",
  Director: "Christoper Nolan",
  Year: 2010,
  Genre: "Science fiction"
};

let movieValue = Object.values(movie);
console.log(movieValue);


// Sum Values:

let scores = {
  math: 95,
  science: 88,
  english: 92
};

let valuesArray = Object.values(scores);

// Calculate the total sum of the values
let totalSum = valuesArray.reduce((sum, score) => sum + score, 0);

console.log("Total Sum of Scores:", totalSum);


// Iterate Over Values:

let userData = {
  userName: "John Doe",
  email: "Johndoe34@gmail.com",
  location: "New York"
};

let values = Object.values(userData);
values.forEach(value => {
  console.log(value);
});


//  List Entries:
// Creating the car object

const carDetail = {
  make: "Toyota",
  model: "Corolla",
  year: 2021
};

const entries = Object.entries(carDetail);

// Logging the key-value pairs
console.log(entries);


// Convert Object to Array:

let personObj = {
  firstName: "John",
  lastName: "Doe",
  age: 23
};

let entrie = Object.entries(personObj)
console.log(entrie);


// Iterate Over Entries:

let settings = {
  theme: "Dark",
  notification: true,
  privacy: "High"
};

let entRie = Object.entries(settings);
entRie.forEach(([key, value]) => {
  console.log(`${key}, ${value}`);
});


// Filter Keys:

const inventory = {
  Apple: 5,
  Banana: 15,
  Orange: 12,
  Grapes: 8
};

const keysWithMoreThan10 = Object.keys(inventory).filter(key => inventory[key] > 10);

// Logging the result
console.log(keysWithMoreThan10);


// Transform Values:

let temperature = {
  Morning: 15,
  AfterNoon: 20,
  Evening: 18
};

const temperatureEntries = Object.entries(temperature);

const fahrenheitTemperatures = temperatureEntries.map(([time, tempInCelsius]) => {
  const tempInFahrenheit = (tempInCelsius * 9 / 5) + 32; // Formula to convert Celsius to Fahrenheit
  return [time, tempInFahrenheit]; // Return the key-value pair with the transformed value
});

const temperaturesInFahrenheit = Object.fromEntries(fahrenheitTemperatures);

console.log(temperaturesInFahrenheit);


// Key-Value Swap:

// Creating the roles object
const roles = {
  admin: "Administrator",
  editor: "Content Editor",
  viewer: "Content Viewer"
};

// Using Object.entries() to get an array of key-value pairs
const roleEntries = Object.entries(roles);
const swappedRoles = roleEntries.map(([role, description]) => [description, role]);

const swappedRolesObject = Object.fromEntries(swappedRoles);
console.log(swappedRolesObject);


// Filter and Map:

// Create an array with values from 1 to 10
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterAndMap(arr, filterFunc, mapFunc) {
  return arrNumbers.filter(filterFunc).map(mapFunc);
}

const finalResult = filterAndMap(
  numbers,
  num => num % 2 !== 0,    // Filter out even numbers (keep odd ones)
  num => num * num          // Square the remaining numbers
);

console.log(finalResult);  // Output: [1, 9, 25, 49, 81]


// Sort and Reduce:

// Create an array with the given words
const words = ["apple", "banana", "cherry", "date"];

function sortAndReduce(arr, sortFunc, reduceFunc) {
  return arr.sort(sortFunc).reduce(reduceFunc);
}

const sortResult = sortAndReduce(
  words,
  (a, b) => a.localeCompare(b),   // Sort alphabetically
  (acc, word) => acc + word       // Concatenate the words
);

console.log(sortResult);  // Output: "applebananacherrydate"


// Simple Callback:

// Function that takes a name and a callback function
// function greet(name, callback) {
//   const message = `Hello, ${name}!`;  // Create the greeting message
//   callback(message);  // Call the callback function with the greeting message
// }

// // Callback function that logs the message to the console
// function printGreeting(message) {
//   console.log(message);  // Print the greeting message
// }

// // Calling the greet function with a name and the printGreeting callback
// greet("Alice",printGreeting);


// Asynchronous Callback:

function fetchData(callback) {
  const data = "Fetched data from server";
  setTimeout(() => {
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log(data);
}

fetchData(displayData);


// Simple Arrow Function:

const add = (a, b) => a + b;
console.log(add(3, 5));  // Output: 8


// Arrow Function with Array Methods:

let numberArr = [1, 2, 3, 4, 5]

let SquaredNum = numberArr.map(num => num * num);
console.log(SquaredNum);


// Variable Scope:

function outer() {
  let x = 10;

  function inner() {
    console.log(x);  // Log x to the console
  }

  inner();
}
outer();


// Closure:

function createCounter() {
  let counter = 0;

  return function () {
    counter++;  // Increment the counter
    console.log(counter);  // Log the counter
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1();  // Logs: 1
counter1();  // Logs: 2

counter2();  // Logs: 1
counter2();  // Logs: 2
counter2();  // Logs: 3


// Simple Default Parameters:

function greet(name, greeting = "Hello") {
  console.log(greeting + ", " + name + "!");
}

greet("Alice", "Good morning");  // Logs: Good morning, Alice!
greet("Bob");  // Logs: Hello, Bob!


// Default Parameters with Other Arguments:

function calculateArea(width = 10, height = 5) {
  return width * height;
}

let area1 = calculateArea(15, 8);  // Width = 15, Height = 8
console.log(area1);  // Logs: 120

let area2 = calculateArea();  // Uses default Width = 10, Height = 5
console.log(area2);  // Logs: 50


// Square Numbers:

// Create the array with values [1, 2, 3, 4, 5]
const mapNum = [1, 2, 3, 4, 5];

const squaredNumbers = mapNum.map(num => num * num);

console.log(squaredNumbers);  // Logs: [1, 4, 9, 16, 25]


// Convert to Uppercase:

const wordArr = ["apple", "banana", "cherry"];
const uppercaseWords = wordArr.map(word => word.toUpperCase());

// Log the resulting array to the console
console.log(uppercaseWords);  // Logs: ["APPLE", "BANANA", "CHERRY"]


// Filter Even Numbers:

const evenNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = evenNum.filter(num => num % 2 === 0);

console.log(evenNumbers);  // Logs: [2, 4, 6, 8, 10]


// Filter Long Words:

const fruitArray = ["apple", "banana", "cherry", "date"];
const longWords = fruitArray.filter(word => word.length > 5);

console.log(longWords);  // Logs: ["banana", "cherry"]


// Log Numbers:

const eachNum = [1, 2, 3, 4, 5];
eachNum.forEach(num => console.log(num));


// Log Word Lengths:

const fruitlength = ["apple", "banana", "cherry"];
fruitlength.forEach(word => console.log(word.length));


// Sum of Numbers:

// Create the array with values [1, 2, 3, 4, 5]
const reduceNum = [1, 2, 3, 4, 5];

const sums = reduceNum.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sums);  // Logs: 15


// Concatenate Strings:

const word = ["Hello", "world", "this", "is", "JavaScript"];

const sentence = word.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue);
console.log(sentence);  // Logs: "Hello world this is JavaScript"


// Check for Even Number:

const evenNumber = [1, 3, 5, 7, 8];

const hasEvenNumber = evenNumber.some(num => num % 2 === 0);
console.log(hasEvenNumber);  // Logs: true


// Check All Even Numbers:

// Create the array
const allEvenNum = [2, 4, 6, 8, 10];
const allEven = allEvenNum.every(num => num % 2 === 0);

console.log(allEven); // This will output true if all numbers are even, otherwise false.


// Check All Long Words:

// Create the array of words
const animalsArr = ["elephant", "giraffe", "hippopotamus"];
const allLongWords = animalsArr.every(word => word.length > 5);

console.log(allLongWords); // This will output true if all words have more than 5 characters, otherwise false.


// Find First Even Number:

const findNumbers = [1, 3, 5, 7, 8];
const firstEvenNumber = findNumbers.find(num => num % 2 === 0);

console.log(firstEvenNumber); // This will output 8, as it's the first even number in the array.


// Find Long Word:

// Create the array of words
const fruitWords = ["apple", "banana", "cherry", "date"];
const firstLongWord = fruitWords.find(word => word.length > 5);

console.log(firstLongWord); // This will output "banana", as it's the first word with more than 5 characters.


// Find Index of Long Word:

let findWord = ["Apple", "Banana", "Cherry", "date"];

let index = findWord.findIndex(word => word.length > 5);
console.log(index);


// Simple Promise:

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms); // The promise will resolve after the given ms (milliseconds).
  });
}

delay(2000).then(() => {
  console.log("Hello, world!"); // This will log "Hello, world!" after 2 seconds.
});


// Promise Chain:

function fetchData() {
  return new Promise((resolve) => {
    const data = { name: "John", age: 30 };
    resolve(data); // Resolving the promise with the data
  });
}
fetchData().then((data) => {
  console.log(data); // This will log the data: { name: "John", age: 30 }
});


// Error Handling:

function fetchUserData() {
  return new Promise((resolve, reject) => {
    const userData = { name: "Alice", age: 24 }// Modify this to test error handling (e.g., remove age)

    if (!userData.age) {
      reject(new Error("User data is missing the 'age' property.")); // Reject with an error message
    } else {
      resolve(userData); // Resolve with the user data if age is present
    }
  });
}

// Use the .catch() method to handle errors
fetchUserData()
  .then((data) => {
    console.log("User data:", data); // This will log the user data if it exists
  })
  .catch((error) => {
    console.log("Error:", error.message); // This will log the error message if age is missing
  });


// Simulate Network Request:

function getWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const weatherData = { temperature: 22, condition: "Sunny" };

      const isError = false;

      if (isError) {
        reject(new Error("Failed to fetch weather data."));
      } else {
        resolve(weatherData);
      }
    }, 1000);
  });
}

// Use .then() and .catch() to handle success and error cases
getWeather()
  .then((data) => {
    console.log("Weather data:", data); // Log the weather data on success
  })
  .catch((error) => {
    console.log("Error:", error.message); // Log the error message if there is an error
  });


// Simple async Function:

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms); 
  });
}

async function sayHello() {
  await delay(2000);
  console.log("Hello, world!"); 
}

sayHello();


// Fetch Data with async/await:)

function fetchUserData() {
  return new Promise((resolve, reject) => {
    // Simulate user data
    const userData = { name: "Alice", age: 30 }; 

    if (!userData.age) {
      reject(new Error("User data is missing the 'age' property.")); 
    } else {
      resolve(userData); 
    }
  });
}

async function getUserData() {
  try {
    const userData = await fetchUserData();
    console.log("User data:", userData); 
  } catch (error) {
    console.log("Error:", error.message); 
  }
}

getUserData();


// Fetch and Process Data:

function fetchUser() {
  return new Promise((resolve, reject) => {
    const userData = { name: "Alice",Age: 20};

    resolve(userData);
  });
}

function fetchPosts(user) {
  return new Promise((resolve, reject) => {
   const posts = [
      { title: "Post 1", content: "Content of Post 1" },
      { title: "Post 2", content: "Content of Post 2" },
    ];

    resolve(posts);
  });
}

async function getUserAndPosts() {
  try {
    const user = await fetchUser();  
    console.log("User Data:", user); 

    const posts = await fetchPosts(user); 
    console.log("User Posts:", posts);  
  } catch (error) {
    console.log("Error:", error.message); 
  }
}

getUserAndPosts();


// Simulate API Calls:

function apiCall() {
  return new Promise((resolve, reject) => {
    const randomDelay = Math.random() * 2000; // Random delay between 0 and 2 seconds

    setTimeout(() => {
      const isError = Math.random() < 0.1; // 10% chance to simulate an error

      if (isError) {
        reject(new Error("API call failed"));
      } else {
        resolve(`Data received after ${Math.round(randomDelay)}ms`); 
      }
    }, randomDelay);
  });
}

async function getData() {
  try {
    const result1 = await apiCall();
    console.log("Result 1:", result1);

    const result2 = await apiCall();
    console.log("Result 2:", result2);

    const result3 = await apiCall();
    console.log("Result 3:", result3);
  } catch (error) {
    console.log("Error:", error.message); // Log the error message if an error occurs during any of the API calls
  }
}

getData();
