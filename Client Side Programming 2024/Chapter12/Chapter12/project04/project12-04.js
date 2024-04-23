"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-04

      Project to create an interactive slideshow
      Author: Carleigh Smith
      Date:   4/23/2024

      Filename: project12-04.js
*/

let slideNumber = 0;  // Declare slideNumber and set its initial value to 0

$("#leftbutton").click(function() {
      // Check if slideNumber is greater than 0
      if (slideNumber > 0) {
          // Animate the image to the right
          $(".slideImages").animate({"left": "+=401px"}, 1000);
          // Decrease the value of slideNumber
          slideNumber--;
          // Get the current slide and its caption
          let currentSlide = $(".slideImages")[slideNumber];
          let slideCaption = $(currentSlide).attr("alt");
          // Call changeCaption function
          changeCaption(slideCaption);
      }
  });

  $("#rightbutton").click(function() {
      // Check if slideNumber is less than 11
      if (slideNumber < 11) {
          // Animate the image to the left
          $(".slideImages").animate({"left": "-=401px"}, 1000);
          // Increase the value of slideNumber
          slideNumber++;
          // Get the current slide and its caption
          let currentSlide = $(".slideImages")[slideNumber];
          let slideCaption = $(currentSlide).attr("alt");
          // Call changeCaption function
          changeCaption(slideCaption);
      }
  });

  function changeCaption(captionText) {
      // Hide the current caption with blind effect
      $("#caption").effect("blind", {mode: "hide", direction: "left"}, 500, function() {
          // Change the text after hiding
          $("#caption").text(captionText);
      });
      // Show the new caption with blind effect
      $("#caption").effect("blind", {mode: "show", direction: "left"}, 500);
  }