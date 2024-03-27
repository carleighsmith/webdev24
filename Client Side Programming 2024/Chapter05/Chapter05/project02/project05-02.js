"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Carleigh Smith
      Date:   3/26/2024

      Filename: project05-02.js
*/
// Declare the following variables
var images = document.getElementsByTagName("img"); 
var photoBucket = document.getElementById("photo_bucket"); 
var photoList = document.getElementById("photo_list");


for (let i = 0; i < images.length; i++) {
  
    images[i].onclick = function() {

        if (this.parentElement.id === "photo_bucket") {
       
            let newItem = document.createElement("li");
         
            photoList.appendChild(newItem);
            newItem.appendChild(this);
        } else {
            let oldItem = this.parentElement;
            photoBucket.appendChild(this);
            oldItem.parentElement.removeChild(oldItem);
        }
    };
}