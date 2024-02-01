/*    JavaScript 7th Edition
      Chapter 2
      Chapter Practice

      Chapter 2 NOTES
      Author: Carleigh Smith  
      Date:   01/25/2024

      Filename: ch2Snippet.js
 */



let user = "Dawson";            // global scope - global variable
const PERCENTAGE = 0.05;        //constant - CONST need to be all CAPITAL LETTERS


function showUser() 
{
    let user = "Reynolds";      // local scope = local variable
    console.log("In showUser - local scope: ");
    console.log(user);          // Writes Smith


        {
            var name = "Preston";
        }
        console.log("In show user, name is " +  name);


}


console.log("Global Scope: ")
console.log(user);              //Writes Carleigh - prints the global variable user
showUser();                     //print the local variable

// PERCENTAGE = 0.10;
//console.log(PERCENTAGE); //Constants cannot be changed!!!

//Data types - the specific category of information that a variable contains.
//The data type determines how much memory is allocated for the data stored 
//in the variable. The data type also governs the kinds of operations that 
//can be performed on the variable.
diffTypes = "Hello World: ";    //String: Text
diffTypes = 8;                  //Integer number: A positive or negative number 
                                //without decimal places
diffTypes = 5.367;              //Floating-point number: number that contains 
                                //decimal places or that is written in exponential notation.
diffTypes = true;               //Boolean: A logical value of true or false
diffTypes = null;               //Null: An empty value
diffTypes;                      //Undefined: An unassigned, undeclared, or nonexistent value

//char expression
let letterGrade = 'B';

//working with strings and "", ''
let customerName = "";
console.log("Welcome to 'Fan Trick Photography'");
console.log('Welcome to "Fan Trick Photography"');
//anything between '' or "" is a string
console.log("Welcome to 'JavaScript\'s \nFunctions'");

//addition operator (+)
let messagea = "This is a very long" + 
" and complicated text string to enter.";
console.log(messagea);

//End the line with the \ character 
//indicating that the text string continues on the next line
let messageb = "This is a very long \
and complicated text string to enter.";
console.log(messageb);

//enclose your text strings with the backtick character (`) 
let messagec = `This is a very long
and complicated text string to enter`;
console.log(messagec);

//escape characters and sequences
console.log("Welcome to \"JavaScript Programming\"" + "\n" +"\tYou will enjoy this!")

//Escape Sequences
//      \\ backslash
//      \b backspace
//      \r carriage return
//      \" double quotation mark
//      \f form feed
//      \t horizontal tab
//      \n newline
//      \0 null character
//      \' single quotation mark
//      \v vertical tab
//      \xXX Latin-1 character specified by the XX 
//      \uXXXX Unicode character specified by the XXXX 

//Binary Operators - An operator that requires an operand before and after it.
//Arithmetic Operators - Operators used to perform mathematical calculations, 
//such as addition, subtraction, multiplication, and division.
//Unary Operators - provide a more simplified expression for increasing or decreasing a value by 1
//Prefix Operator - An operator that is placed before a variable name.
//Postfix Operator - An operator that is placed after a variable name.

let z = 10;
z = (10 * 2) + 4 - (25 / 2);
console.log(z);


// + combines or adds two items
// - subtracts one item from another
// * multiplies two items
// / divides one item by another
// % returns the remainder after dividing one integer by another integer
// ** raises a value to a power

z++;            //z++ is the same as z = z + 1
console.log(z);

z--;            //z-- is the same as z = z - 1
console.log(z);

//unary operators
// ++ increases value by 1
// -- decreases value by 1
// - changes the sign of a value

z = z ** 2;     //z is raised to the power of 2 which equals to z^2

let y = 15;
console.log(y); //15
console.log(y++);//15  
console.log(y); //16
console.log(++y); //17
console.log(y);//17

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

//Assignment operators
// =        x = y
// +=       x = x + y
// -=       x = x - y
// *=       x = x * y
// /=       x = x / y
// %=       x = x % y
// **=      x = x ** y

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

// = assignment operator
// == tests if two values are the same
// === tests if two values are the same and/or the same data type
// != tests whether x is not equal to y or has a different data type
// !== tests whether x is not equal to y and/or doesn’t have the same data type
// > tests whether x is greater than y
// >= tests whether x is greater than or equal to y
// < tests whether x is less than y
// <= tests whether x is less than or equal to y


//conditional operators: The ?: operator, which executes one of two expressions
// based on the results of a conditional expression. 

//The following statement sets the value of the discount variable based on whether
// the value of member variable is equal to “prime”:
let discounta = (member === "prime") ? 0.05 : 0.0;
console.log(discounta);

//The condition can be any expression that equals true or false; 
//it can even a Boolean variable as the following code demonstrates 
//in which the discount variable 
//equals 0.05 because the primeMember variable equals true:
let primeMember = true;
let discountb = primeMember ? 0.05 : 0.0;
console.log(discountb);

//The general syntax of a comparison operator is:
condition ? trueValue : falseValue;

//You can nest one conditional operator 
//within another to test two conditions. The general syntax is:
condition1 ? trueValue : condition2 ? trueValue : falseValue

//In the following statement, an alert box is displayed with 
//the message “Enjoy your free shipping” if primeMember is 
//true or the message “Go prime for free shipping” if it is false:
(primeMember) ? window.alert("Enjoy your free shipping") :
                window.alert("Go prime for free shipping");

//In a conditional statement that tests whether a text 
//field in a form contains a value, you could write the
//code for the conditional statement as:
(document.getElementById("fname").value !== "") //?
// code to run if condition is true :
// code to run if condition is false ;

//Logical Operators: are used when combining 
//expressions that will result in Boolean value 
//of true or false or for negating a Boolean value, 
//turning true to false or false to true.
//&& and
//|| or
// ! not

//property access . Appends an object, method, or property to another object  
//array index [ ] Accesses an element of an array
//function call () Calls up functions or changes the order in which individual operations in an expression are evaluated
//comma , 	Separates multiple expressions in the same statement
//conditional expression ?: Executes one of two expressions based on the results of a conditional expression
//delete "delete" - Deletes array elements, variables created without the var keyword, and properties of custom objects
//Property exists "in" - Returns a value of true if a specified property is contained within an object
//Object type "instanceof" - Returns true if an object is of a specified object type 
//New Object "new" - Creates a new instance of a user-defined object type or a predefined JavaScript object type
//Data type "typeof" - Determines the data type of a variable
//void "void" - Evaluates an expression without returning a result