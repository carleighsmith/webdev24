"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Carleigh Smith
      Date:   4/9/2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) { 

      //to prevent the browser from responding to the submit event
      e.preventDefault();

      const regex1 = /[A-Z]/; //ariable containing a regular expression literal with a character class that matches any uppercase letter A through Z
      const regex2 = /\d/; //variable containing a regular expression literal that matches any single digit
      const regex3 = /[!$#%.]/; //variable containing a regular expression with a character class containing the symbols !$#%.

     let pwd = document.getElementById("pwd").value;
     let feedback = document.getElementById("feedback");

     if(pwd.length <8){ //f the length of pwd is less than 8
      feedback.innerHTML="Your password must be at least 8 characters."; //set the text content of the feedback object to “Your password must be at least 8 characters"
     }else if(!regex1.test(pwd)){ //Else if the test() method with the regex1 regular expression applied to the pwd variable returns a false value
      feedback.innerHTML ="Your password must include an uppercase letter."; //set the text content of the feedback object to "Your password must include an uppercase letter."
     }else if(!regex2.test(pwd)){ //Else if the test() method with the regex2 regular expression applied to pwd returns false,
      feedback.innerHTML="Your password must include a number." //set the text of feedback to "Your password must include a number."
     }else if(!regex3.test(pwd)){ //Else if the test() method with the regex3 regular expression applied to pwd returns false
      feedback.innerHTML="Your password must include one of the following: !$#%." //set the text of feedback to "Your password must include one of the following: !$#%".
     }else{
      signupForm.submit(); //set the text of feedback to "Your password must include one of the following: !$#%".
     }
}
);