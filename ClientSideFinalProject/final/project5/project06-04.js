"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-04

      Project to turn a selection list into a selection of hypertext links
      Author: Carleigh Smith
      Date:   4/23/2024

      Filename: project06-04.js
*/

// Selection lists in the web form
let make = document.getElementById("make");
let model = document.getElementById("model");
let trim = document.getElementById("trim");
let year = document.getElementById("year"); // New element for year selection

// Option elements within the selection lists
let makeOptions = document.querySelectorAll("select#make option");
let modelOptions = document.querySelectorAll("select#model option");
let trimOptions = document.querySelectorAll("select#trim option");
let yearOptions = document.querySelectorAll("select#year option"); // New options for years

// Form button to generate the complete text of the selected vehicle
let selectVehicle = document.getElementById("selectVehicle");

// Paragraph containing the text of the selected vehicle
let vehicle = document.getElementById("vehicle");

// Event handler to modify the content of the Model selection list when the Make selection list changes
make.onchange = function() {
   let makeIndex = make.selectedIndex;
   let makeCategory = make.options[makeIndex].text;
   
   if (makeIndex === 0) {
      showAll(model);
   } else {
      filterSelect(model, makeCategory);
   }  
};

// Event handler to modify the content of the Trim selection list when the Model selection list changes
model.onchange = function() {
   let modelIndex = model.selectedIndex;
   let modelCategory = model.options[modelIndex].text;
   
   if (modelIndex === 0) {
      showAll(trim);
   } else {
      filterSelect(trim, modelCategory);
   }     
};

// Event handler for the "Select" button
selectVehicle.onclick = function() {
   let makeText = make.options[make.selectedIndex].text;
   let modelText = model.options[make.selectedIndex].text;
   let trimText = trim.options[trim.selectedIndex].text;
   let yearText = year.options[year.selectedIndex].text; // Capture selected year
   
   // Update the text of the paragraph with the selected vehicle information
   vehicle.textContent = `${makeText} ${modelText} ${trimText} ${yearText}`;
};

// Function to show all options in a selection list
function showAll(selectList) {
   let options = selectList.options;
   let optionLength = options.length;
   for (let i = 0; i < optionLength; i++) {
       options[i].style.display = "block";
   }
}

// Function to filter options in a selection list based on className
function filterSelect(selectList, category) {
   let options = selectList.options;
   let optionLength = options.length;
   for (let i = 0; i < optionLength; i++) {
       if (options[i].className === category || i === 0) {
           options[i].style.display = "block";
       } else {
           options[i].style.display = "none";
       }
   }
}

