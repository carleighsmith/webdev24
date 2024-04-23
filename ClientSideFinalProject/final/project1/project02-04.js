/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Carleigh Smith
      Date:   04/16/2024

      Filename: project02-04.js
 */
 




// Function to format currency as $##.##
function formatCurrency(amount) {
   return '$' + amount.toFixed(2);
}

// Function to calculate total cost, tax, and final bill
function calculateTotal() {
   var totalCost = 0;
   var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

   checkboxes.forEach(function(checkbox) {
       totalCost += parseFloat(checkbox.value);
   });

   var taxRate = 0.1; // Assuming a tax rate of 10%
   var tax = totalCost * taxRate;
   var finalBill = totalCost + tax;

   document.getElementById('foodTotal').textContent = formatCurrency(totalCost);
   document.getElementById('foodTax').textContent = formatCurrency(tax);
   document.getElementById('totalBill').textContent = formatCurrency(finalBill);
}