"use strict";

//declare the following variables: submitButton 
//referencing the element with the id “submitButton”, 
//pwd referencing the element with the id “pwd”, and 
//pwd2 referencing the element with the id “pwd2”.
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");
let user = document.getElementById("user");
let email = document.getElementById("email");


// event listener for the click event occurring with the 
//submitButton that runs an anonymous function
// add event listener for submit button click
submitButton.addEventListener("click", validatepwds);
submitButton.addEventListener("click", validateuser);
submitButton.addEventListener("click", validateEmail);

function validatepwds() {

    if(pwd.validity.patternMismatch) {
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number");
    } else if (pwd.value !== pwd2.value) {
        pwd.setCustomValidity("Your passwords must match");
    }else {
        pwd.setCustomValidity("");
        pwd2.setCustomValidity("");
    }
}

function validateuser() {
    if(user.validity.valueMissing)
    {
        user.setCustomValidity("Please enter a username.");
    }
    else {
        user.setCustomValidity("");
    }
}

function validateEmail() {
    if(email.validity.valueMissing)
    {
        email.setCustomValidity("Please enter an email.");
    } else {
        email.setCustomValidity("");
    }
}