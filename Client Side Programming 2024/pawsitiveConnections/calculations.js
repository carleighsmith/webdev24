
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
            if (age<=0 || min <=0 || max <= 0 || max <= min)
            {
                window.alert("Make sure every field entry is a number over 0, make sure the Maximum balance is more than the minimum, and make sure only numbers are entered.")
            }else
            {
                if (age < 5){
                    estimate += 50;
            
                    average = max-min;
                    estimate += average
                    estimate = Math.round(estimate) 
                    window.alert("Your estimated total is $"+ estimate)
                    addPetPhotos();
                } else 
                {window.alert("Please fill in all fields");}
            }      
        }
        else {
            window.alert("Please fill in all fields");
        
        }
    } catch (err)
    {
        window.alert(err)
    }

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
    name[14]= "Monet";

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
    age[14] = "4 months";


    let htmlCode = "";


    for (let i = 1; i < 2; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("gallerya").innerHTML = htmlCode;

    htmlCode = "";

    for (let i = 2; i < 3; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("galleryb").innerHTML = htmlCode;

    htmlCode = "";

    for (let i = 3; i < 4; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("galleryc").innerHTML = htmlCode;

    htmlCode = "";

    for (let i = 4; i < 5; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg"/>' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("galleryd").innerHTML = htmlCode;

    htmlCode = "";

    for (let i = 5; i < 6; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("gallerye").innerHTML = htmlCode;

    htmlCode = "";

    for (let i = 6; i < 7; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("galleryf").innerHTML = htmlCode;

    htmlCode = "";

    for (let i = 7; i < 8; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("galleryg").innerHTML = htmlCode;

    htmlCode = "";

    for (let i = 8; i < 9; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("galleryh").innerHTML = htmlCode;

    htmlCode = "";

    for (let i = 9; i < 10; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("galleryi").innerHTML = htmlCode;

    htmlCode = "";

    for (let i = 10; i < 11; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("galleryj").innerHTML = htmlCode;


    htmlCode = "";

    for (let i = 11; i < 12; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("galleryk").innerHTML = htmlCode;

    htmlCode = "";

    for (let i = 12; i < 13; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("galleryl").innerHTML = htmlCode;

    htmlCode = "";

    for (let i = 13; i < 14; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("gallerym").innerHTML = htmlCode;

    htmlCode = "";

    for (let i = 14; i < 15; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("galleryn").innerHTML = htmlCode;

    htmlCode = "";

    for (let i = 15; i < 16; i++)
    {
        htmlCode += '<figure>' + 
        '<img alt ="" src="images/slide' + i + '.jpg" />' +
                '<figcaption> Name: ' +name[i-1] +'</figcaption>' +
                '<figcaption> Age: ' +age[i-1] +'</figcaption>'+
                '</figure>';
    }

    document.getElementById("galleryo").innerHTML = htmlCode;
}