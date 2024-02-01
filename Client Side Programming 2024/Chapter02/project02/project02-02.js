/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Carleigh Smith
      Date:   2/1/2024

      Filename: project02-02.js
 */
function verifyForm() {
      // Get the values of the input fields
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;
  
      // Check if all fields are filled out
      if (name && email && phone) {
          window.alert("Thank you!");
      } else {
          window.alert("Please fill in all fields");
      }
  }
  // Attach an event listener to the "Submit" button
  document.getElementById("submit").addEventListener("click", verifyForm);