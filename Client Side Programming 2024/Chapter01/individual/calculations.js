
/*    JavaScript 7th Edition
      Chapter 2
      Case Project

      Application to test for completed form
      Author: Carleigh Smith
      Date:   2/6/2024

      Filename: calculations.js
 */
function verifyForm() {
    // Get the values of the input fields
    let age = document.getElementById("age").value;
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;

    // Check if all fields are filled out
    let estimate = 0;
    let average = 0;

    if (age < 5)
        estimate += 50;

    average = max-min;
    estimate += average
    estimate = Math.round(estimate)

    // (age) && (min) && (max)
    // ? window.alert("Your estimated total would be $" + estimate) :
    // window.alert("Please fill in all fields");

    window.alert("Your estimated total is $"+ estimate)
}


// Attach an event listener to the "Submit" button
document.getElementById("submit").addEventListener("click", verifyForm);



//need to add pictures and tabs of the available animals one the submit button is pressed
