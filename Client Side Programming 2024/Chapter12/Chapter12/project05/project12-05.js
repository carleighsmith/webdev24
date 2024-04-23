"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-05

      Project to validate a user form
      Author: Carleigh Smith
      Date:   4/23/2024 

      Filename: project12-05.js
*/

// Wait for the document to be ready
$(document).ready(function () {

   // Apply the novalidate attribute to disable browser validation
   $("form#userform").attr("novalidate", "");

   // Handle form submission
   $("form#userform").submit(function (e) {
       let isValid = true;

       // Validate username
       let username = $("input#username");
       if (username.val() === "") {
           isValid = false;
           $(username).next().hide().text("* You must supply a username").show(500);
       } else {
           $(username).next().text("");
       }

       // Validate email
       let email = $("input#email");
       let mailRE = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       let validMail = mailRE.test(email.val());
       if (!validMail) {
           isValid = false;
           $(email).next().hide().text("* Not a valid e-mail address").show(500);
       } else {
           $(email).next().text("");
       }

       // Validate password
       let pwd = $("input#pwd");
       let pwdRE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
       let validPwd = pwdRE.test(pwd.val());
       if (!validPwd) {
           isValid = false;
           $(pwd).next().hide().text("* Invalid password").show(500);
       } else {
           $(pwd).next().text("");
       }

       // Confirm that the two passwords match
       let pwd2 = $("input#pwd2");
       if (pwd.val() !== pwd2.val()) {
           isValid = false;
           $(pwd2).next().hide().text("* Passwords must match").show(500);
       } else {
           $(pwd2).next().text("");
       }

       // Confirm that there is no invalid data in the form
       if (!isValid) {
           // Cancel the form submission if there is invalid data
           e.preventDefault();
       }
   });
});