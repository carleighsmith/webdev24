"use strict";

//declare the following variables: submitButton 
//referencing the element with the id “submitButton”, 
//pwd referencing the element with the id “pwd”, and 
//pwd2 referencing the element with the id “pwd2”.
let submitButton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");


// event listener for the click event occurring with the 
//submitButton that runs an anonymous function
// add event listener for submit button click
submitButton.addEventListener("click", validatepwds);

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