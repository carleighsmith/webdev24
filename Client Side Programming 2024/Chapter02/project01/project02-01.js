/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Carleigh Smith
      Date:   2/1/2024

      Filename: project02-01.js
 */
// function to convert Fahrenheit to Celsius
function FahrenheitToCelsius(degree) {
      return (degree - 32) / 1.8;
  }
  
  // function to convert Celsius to Fahrenheit
  function CelsiusToFahrenheit(degree) {
      return degree * 1.8 + 32;
  }
  
  // adding onchange event listener to element with id cValue
  document.getElementById("cValue").onchange = function () {
      // getting temperature value from element with id cValue
      var cDegree = document.getElementById("cValue").value;
  
      // setting temperature value to element with id fValue
      document.getElementById("fValue").value = CelsiusToFahrenheit(cDegree);
  };
  
  // adding onchange event listener to element with id fValue
  document.getElementById("fValue").onchange = function () {
      // getting temperature value from element with id fValue
      var fDegree = document.getElementById("fValue").value;
      // setting temperature value to element with id cValue
      document.getElementById("cValue").value = FahrenheitToCelsius(fDegree);
  };