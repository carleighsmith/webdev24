//global scope variable
let user = "Sophia";

//A funciton that prints a static message to the JavaScript console
function printMsg()
{
    console.log("This funciton does not have any parameters.");
    console.log("Carleigh Smith, Today is 01/28/24.")
}

/**
 * A function that takes in three parameters and returns a value
 * @param {number} num1 
 * @param {number} num2 
 * @param {number} num3  
 * @returns {number} the sum of 3 numbers
 */

function add3(num1, num2, num3)
{
    let sum = num1 + num2 + num3; //let is blocked scoped
    return sum;
}

function showUser()
{
    //command block - body of the function
    let user = "Silvia"; // local scope variable
    console.log(user);
}

function showGlobalUser()
{
    console.log(user); //prints the value stored in global variable
}

//call the function printMsg
printMsg();

//in variable sum
let sum = add3(1, 2, 3);//passing 3 arguments to function add3
console.log("The sum of 1 + 2 + 3 is: " + sum); //error on this line

//sum = add3(9, 11, 13);
console.log("The sum of 9 + 11 + 13 is: " + add3(9, 11, 13));

sum = add3(10, 12, 5) + add3(5, 2, add3(4, 7, 9));
console.log("The sum is now " + sum);

//this will call the show user funciton and print the user defined
//locally in that fucntion
showUser();

//this will work now because the global user is defined at the top
//of this program
console.log(user);

//calling the function showGlobalUser
//has the same effect as the above statement
showGlobalUser();

//boolean expression
flag = true;
console.log(flag);

//string expression
//anything between '' or "" is a string
console.log("Welcome to 'JavaScript'");
console.log('Welcome to "JavaScript"');
console.log("Welcome to 'JavaScript\'s \nFunctions'");

//char expression
let letterGrade = 'B';

//Chapte 2 Section 2-6 
//Arithmetic Operators
let x = 12;
console.log("\ndemonstrating post-increment");
console.log("value of x: " + x);//12
x++ //x = x + 1; //13
console.log("value of x before x++: " + x);//13
console.log("value of x: " + x++); //x has not been incremented yet //13
console.log("value of x after x++: " + x);//14

console.log("\ndemonstrating pre-increment");
console.log("value of x " + x);//14
++x;//15
console.log("value of x before ++x: " + x);//15
console.log("value of x: " + ++x); //x has not been incremented yet //16
console.log("value of x after ++x: " + x);//16
console.log("value of x: " + x); //16

x = x + 2; //18
//compound assignment operators
x += 2; //20
x *= 3; // x = x * 3
x /= 3; // x = x / y
x %= 2; // x = x % y
x **= 3; // x * x * x

x = "2";
z = "3";
y = "2";
x = x + y; //202
console.log("Value of x: " + x);
z += y;
console.log("Value of z: " + z);
console.log("Value of y: " + y);


console.log(x == y);//false
console.log(y === x);//false

//= assignment operator
// == tests if two values are the same
//=== tests if two values are the same and/or the same data type


