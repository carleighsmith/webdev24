"use strict";
/*    JavaScript 7th Edition
      Chapter 9
      Project 09-04

      Project to store high scores from a game in a cookie
      Author: Carleigh Smith
      Date:   4/22/2024

      Filename: project09-04.js
*/

/* Page Objects */
let bestText = document.getElementById("best");
let clockTimer = document.getElementById("timer");

// Custom event that runs when the puzzle is solved
window.addEventListener("puzzleSolved", updateRecord);

// Event listener that is run when the page loads
window.addEventListener("load", function () {
  if (document.cookie) {
    const bestTime = getBestTime();
    bestText.textContent = `${bestTime} seconds`;
  } else {
    bestText.textContent = "not yet recorded";
  }
});

// Function to get the best time from the cookie
function getBestTime() {
  if (document.cookie) {
    const cookieArray = document.cookie.split("=");
    const best = parseInt(cookieArray[1]);
    return best;
  }
  return 9999; // A high default value indicating no record yet
}

// Function to update the best record if the current attempt is better
function updateRecord() {
  const solutionTime = parseInt(clockTimer.value);
  const bestTime = getBestTime();

  if (solutionTime < bestTime) {
    bestText.textContent = `${solutionTime} seconds`;
    document.cookie = `puzzle8Best=${solutionTime}; max-age=${90 * 24 * 60 * 60}`; // 90-day cookie
  }
}
