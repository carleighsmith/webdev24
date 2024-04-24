/* JavaScript 7th Edition
   Chapter 2
   Project 02-04

   Application to calculate the cost of a restaurant order plus tax
   Author: Carleigh Smith
   Date: 04/16/2024

   Filename: project02-04.js
 */

// Define constants for item prices and sales tax rate
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;


// Function to format currency as $##.##
function formatCurrency(amount) {
   return '$' + amount.toFixed(2);
}


// calcTotal() function that calculates total cost, tax, and final bill
function calculateTotal() {

   //Declare the cost variable with an initial value of 0.
   var totalCost = 0;

   // Retrieve the quantity values from each input field and convert them to numbers
   var chickenQty = parseFloat(document.getElementById("chicken").value);
   var halibutQty = parseFloat(document.getElementById("halibut").value);
   var burgerQty = parseFloat(document.getElementById("burger").value);
   var salmonQty = parseFloat(document.getElementById("salmon").value);
   var saladQty = parseFloat(document.getElementById("salad").value);


  // Increment the total cost based on the checked status 
  //of each item using comparison operators
  totalCost += chickenQty * CHICKEN_PRICE;
  totalCost += halibutQty * HALIBUT_PRICE;
  totalCost += burgerQty * BURGER_PRICE;
  totalCost += salmonQty * SALMON_PRICE;
  totalCost += saladQty * SALAD_PRICE;

  // Calculate tax and final bill
  //Declare the tax variable, setting 
  //its value equal to the cost variable multiplied by SALES_TAX
  var tax = totalCost * SALES_TAX;
  var finalBill = totalCost + tax;

  // Set the innerHTML property for the element with the id 'foodTotal' to the formatted total cost
  document.getElementById('foodTotal').innerHTML = formatCurrency(totalCost);
  document.getElementById('foodTax').innerHTML = formatCurrency(tax);
  document.getElementById('totalBill').innerHTML = formatCurrency(finalBill);
}


// Event handlers for each input
document.getElementById("chicken").addEventListener("change", calculateTotal);
document.getElementById("halibut").addEventListener("change", calculateTotal);
document.getElementById("burger").addEventListener("change", calculateTotal);
document.getElementById("salmon").addEventListener("change", calculateTotal);
document.getElementById("salad").addEventListener("change", calculateTotal);