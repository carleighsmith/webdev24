/*    JavaScript 7th Edition
      Chapter 2
      Case Project

      Application to test for completed form
      Author: Carleigh Smith
      Date:   2/6/2024

      Filename: index.js
 */

      
function verifyForm() {
    // Get the values of the input fields
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // Check if all fields are filled out
    (name) && (email) && (phone)
    ? window.alert("Thank you!") :
    window.alert("Please fill in all fields");

}
// Attach an event listener to the "Submit" button
document.getElementById("submit").addEventListener("click", verifyForm);
