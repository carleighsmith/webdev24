/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: Carleigh Smith
      Date:   2/27/2024

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""];
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography.",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero-star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];

// Add a new reviewer with a 5-star rating
reviewers.push("Gamer123");
reviewType.push("");
stars.push(5);
reviewDates.push("11/20/2024");
reviews.push("This game has been incredible! The graphics are great, the choreography is top-notch, and it's a lot of fun to play with friends. Highly recommend!");
reviewTitles.push("Amazing Game Experience");

// Combine all data into an array of objects
let reviewsData = [];
for (let i = 0; i < reviewers.length; i++) {
    reviewsData.push({
        reviewer: reviewers[i],
        type: reviewType[i],
        stars: stars[i],
        date: reviewDates[i],
        review: reviews[i],
        title: reviewTitles[i],
    });
}

// Sort by star ratings in descending order
reviewsData.sort((a, b) => b.stars - a.stars);

function starImages(rating) {
    let imageText = "";
    for (let i = 0; i < rating; i++) {
        imageText += "<img src='star.png' alt='Star'>";
    }
    return imageText;
}

window.onload = function() {
    const reviewSection = document.querySelector("article");
    reviewSection.innerHTML = ""; // Clear previous content

    // Add the main section title at the beginning
    reviewSection.innerHTML += "<h2>Customer Reviews of <em>Dance Off ver. 9</em></h2>";

    // Display sorted reviews
    for (let i = 0; i < reviewsData.length; i++) {
        let reviewCode = '';

        // Determine the table class based on review type
        if (reviewsData[i].type === 'P') {
            reviewCode += "<table class='prime'>";
        } else if (reviewsData[i].type === 'N') {
            reviewCode += "<table class='new'>";
        } else {
            reviewCode += "<table>";
        }

        // Add the review title above the table
        reviewCode += `<h3>${reviewsData[i].title}</h3>`;

        reviewCode += `<tr><td>Reviewer: ${reviewsData[i].reviewer}</td></tr>`;
        reviewCode += `<tr><td>Date: ${reviewsData[i].date}</td></tr>`;
        reviewCode += `<tr><td>Rating: ${starImages(reviewsData[i].stars)}</td></tr>`;
        reviewCode += `<tr><td>Review: ${reviewsData[i].review}</td></tr>`;

        reviewCode += "</table>";

        reviewSection.innerHTML += reviewCode;
    }
};
