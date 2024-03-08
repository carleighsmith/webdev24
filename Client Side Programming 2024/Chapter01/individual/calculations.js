
/*    JavaScript 7th Edition
      Chapter 2
      Case Project

      Application to test for completed form
      Author: Carleigh Smith
      Date:   2/6/2024

      Filename: calculations.js
 */
function verifyForm() {
    // Get the values of the input fields
    let age = document.getElementById("age").value;
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;

    // Check if all fields are filled out
    let estimate = 0;
    let average = 0;

    try {
        if ((age) && (min) && (max))
        {
            if (age < 5)
                estimate += 50;
            
            average = max-min;
            estimate += average
            estimate = Math.round(estimate) 
            window.alert("Your estimated total is $"+ estimate)
            addPetPhotos();
        } else {
            window.alert("Please fill in all fields");
        }

    } catch (err)
    {
        window.alert(err)
    }

    //(age) && (min) && (max)
    // ? window.alert("Your estimated total would be $" + estimate) :
    // window.alert("Please fill in all fields");


}


// Attach an event listener to the "Submit" button
document.getElementById("submit").addEventListener("click", verifyForm);



//need to add pictures and tabs of the available animals one the submit button is pressed
function addPetPhotos()
{   //will add other info such as dog breed and price
    let name = new Array(14); //will add more
    name[0]= "Stacy";
    name[1]= "Bobby";
    name[2]= "Clair";
    name[3]= "Gizmo";
    name[4]= "Phoebe";
    name[5]= "Tommy";
    name[6]= "Shane";
    name[7]= "Elizabeth";
    name[8]= "Chris";
    name[9]= "Sydney";
    name[10]= "Eli";
    name[11]= "Anthony";
    name[12]= "May";
    name[13]= "Sky";

    let age = new Array(14);// will add more
    age[0] = "2 years";
    age[1] = "4 years";
    age[2] = "2 months";
    age[3] = "1 years";
    age[4] = "6 months";
    age[5] = "4 years";
    age[6] = "2 years";
    age[7] = "2 years";
    age[8] = "9 months";
    age[9] = "2 years";
    age[10] = "3 years";
    age[11] = "1 year";
    age[12] = "4 years";
    age[13] = "6 years";


    let htmlCode = "";


    for (let i = 1; i < 15; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("gallery").innerHTML = htmlCode;

}