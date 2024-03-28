/*    JavaScript 7th Edition
      Chapter 2
      Case Project

      Application to test for completed form
      Author: Carleigh Smith
      Date:   2/6/2024

      Filename: index.js
 */

      
let submit = document.getElementById("submit");

submit.addEventListener("click",validateFN);
submit.addEventListener("click",validateLN);
submit.addEventListener("click",validateEmail);
submit.addEventListener("click",validatePhone);


function validateFN() {
    let fN = document.getElementById("fName");
    if (fN.validity.valueMissing) {
        fN.setCustomValidity("Please enter your first name.");
    } else {
        fN.setCustomValidity("");
    }
}

function validateLN() {
    let lN = document.getElementById("lName");
    if (lN.validity.valueMissing) {
        lN.setCustomValidity("Please enter your last name.");
    } else {
        lN.setCustomValidity("");
    }
}
function validateEmail() {
    let email = document.getElementById("email");
    if (email.validity.valueMissing) {
        email.setCustomValidity("Please enter your email.");
    } else {
        email.setCustomValidity("");
    }
}
function validatePhone() {
    let phone = document.getElementById("phone");
    if (phone.validity.valueMissing) {
        phone.setCustomValidity("Please enter your phone number.");
    } else {
        phone.setCustomValidity("");
    }
}

// function verifyForm() {
//     // Get the values of the input fields
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;

//     // Check if all fields are filled out
//     (name) && (email) && (phone)
//     ? window.alert("Thank you!") :
//     window.alert("Please fill in all fields");

// }
// // Attach an event listener to the "Submit" button
// document.getElementById("submit").addEventListener("click", verifyForm);
