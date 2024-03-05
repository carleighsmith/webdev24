//initializing array months with values
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
              "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//initializing array dataValues to an empty array
let dataValues = [];

//initializing array months2 using new Array.
let months2 = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun",
                 "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

//initializing an array with 4 undefined values
let vals = [,,,];
console.log(vals[0]);
vals[0] = "Carleigh";
console.log(vals[0]);
vals[4] = "Jack";
console.log(vals[4]);
console.log("The size of array vals is " + vals.length); //print the size of the array
console.log(vals); //display the contents of the array in the format of [values,...,values]

//Sparse arrays
let sparse = new Array();
sparse[0] = 1;
sparse[99] = 100;

console.log(sparse[0]);
console.log(sparse[1]);
console.log(sparse[99]);

// create an array named foodMenu
// containing the text strings “Breakfast”,
// “Lunch”, and “Dinner” as an array literal
let foodMenu1 = ["Breakfast", "Lunch", "Dinner"];
//using the new Array() object constructor.
let foodMenu = new Array("Breakfast", "Lunch", "Dinner");

//size of foodMenu array
foodMenu.length;

//return the 3rd element in foodMenu array
console.log(foodMenu[2]);

//Provide the expression to 
//reference to fifth inline image in the document.
document.images[4]

//Provide the expression to 
//reference the third element 
//belonging to the blogpost class.
document.getElementsByClassName("blogpost") [2]

//a loop to add numbers from 0 to 10
let num = 1;
let total = 0;
//while loop is a pre-test loop: it checks your 
//condition before you can get in the loop
while(num <= 10) // no semicolon here
{
    total += num; //total = total + num
    num++;        //num = num + 1
}
console.log("Total is " + total);

//reset variables
num = 1;
total = 0;
//do while is a post test loop: it lets you in the loop,
// then check your condition
do{
    total += num;
    num++;
}while(num <= 10);
console.log("Total is " + total);

//reset variables
total = 0;
//for loop is a pre-test loop
for(num = 1; num <= 10; num++)
{
    total+= num;
}
console.log("Total is " + total);

let grade = 78;

if (grade >= 90)//no semi-colon here
{
    console.log("You made an A.");
}
else if (grade >= 80)
{
    console.log("You made an B.");
}
else if (grade >= 70)
{
    console.log("You made an C.");
}
else if (grade >= 60)
{
    console.log("You made an D.");
}
else{
    console.log("You failed!");
}

//initializing array daysWeek to be new array of 7 elements
let daysWeek = new Array(8);
let monthName = new Array(12); //holds 12 elements

//populate array daysWeek with values
daysWeek[0] = "";
daysWeek[1] = "Monday";
daysWeek[2] = "Tuesday";
daysWeek[3] = "Wednesday";
daysWeek[4] = "Thursday";
daysWeek[5] = "Friday";
daysWeek[6] = "Saturday";
daysWeek[7] = "Sunday";

//switch statement
switch (daysWeek[4])
{
    case "Monday":
        console.log("Starting new work week!");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
        console.log("Sleep in today!");
        break;
    case "Sunday":
        console.log("Go to church and cook a good meal!");
        break;
    default:        //happens when none of the cases are executed
        console.log("Have a great day!");
}