"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Carleigh Smith
      Date:   4/23/2024

      Filename: project12-01.js
*/

//step 3: insert jQuery code that runs an anonymous function when the page is loaded and ready.
$(document).ready(function () {

      //step 4: add mouseover and mouseout event on the submenu class
      $('li.submenu').mouseover((e)=>{
            // show the specific submenu
            $(e.currentTarget).children("ul").show();
      }).mouseout((e)=> {
            // hide the specific submenu
            $(e.currentTarget).children("ul").hide(); 
      });

});



                                                