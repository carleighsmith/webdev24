/*
    Student Name: Carleigh Smith
    File Name: script.js
    Date: 4/8/2024 
*/
// Function to hide the paragraph elements within the article
function hideContent() {
    $("#main p").hide();
}

// Function to show the paragraph elements within the article
function showContent() {
    $("#main p").show();
}

// Event listeners for the buttons
$("#hideButton").click(hideContent);
$("#showButton").click(showContent);