"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Carleigh Smith
      Date:   3/26/2024

      Filename: project06-01.js
*/

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
submitButton.addEventListener("click",function(){

      var pwdRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // if the password is invalid, display an error message
    if (!pwdRegex.test(pwd.value)) 
    {
        pwd.setCustomValidity("Your password must be at least 8 characters with at least one letter and one number.");
    } 
    else if (!(pwd.value === pwd2.value)) 
    {
        pwd2.setCustomValidity("Your passwords must match.");
    } else {
        pwd.setCustomValidity("");
        pwd2.setCustomValidity("");
    }
});

