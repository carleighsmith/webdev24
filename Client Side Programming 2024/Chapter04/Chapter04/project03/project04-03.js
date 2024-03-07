"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Application to count the number of characters in a review comment
      Author: Carleigh Smith
      Date:   3/6/2024

      Filename: project04-03.js
*/

// Maximum Length of Review
const MAX_REVIEW = 100;
document.getElementById("limit").innerHTML = MAX_REVIEW;
var wordCountBox = "";
var warningBox = "";

// Reference to elements in the web page
wordCountBox = document.getElementById("countValue");
warningBox = document.getElementById("warningBox");

// Event listener for typing into the comment box
var keyup = "keyup";
document.getElementById("comment").addEventListener(keyup, updateCount);

// Function to update the count with each keyup event
function updateCount() {
   // Set the warning box to an empty text string 
   warningBox.innerHTML = "";
   var commentText = "";
   var charCount = "";
   
   // Count the number of characters in the comment box
   commentText = document.getElementById("comment").value;
   charCount = countCharacters(commentText);

   try 
   {
      if(charCount > MAX_REVIEW) {
         throw "You have exceeded the character count limit";
      }
   }catch(err) {
      warningBox.innerHTML = err;
   }
   finally {
      wordCountBox.innerHTML = charCount;
   }
   
}
/*=================================================================*/
// Function to count the number of characters in a text string
function countCharacters(textStr) 
{
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}