let userName = "Carleigh";

try {
    console.log("The user is " + userName);
}catch(err)
{
    console.log("Invalid Code. " +err.message);
}
finally{
    console.log("Goodbye");//executes no matter what
}


let number = 9;
if(number < 0) throw "Attempt to calculate the square root of a negative value.";

let sqrt = number**0.5;
console.log("The square root of " + number + " is " + sqrt); 

