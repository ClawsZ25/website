"use strict";


// grab the container from the html page
let containerBox = document.getElementById("container");


//Need an async function because file load/read is slow so it tells the interpreter to run this seperately
async function makeCarTable(){
    // reads a json file from a webpage
    const response = await fetch("https://devweb1.cis.pennwest.edu/~dtucker/Fall2025_FinalExam/cars.json");
    const car = await response.json(); // this is our parsed json file
    // let music = JSON.parse(jsonData); --> what to do if you open a file from the computer to parse its

    let carTable = document.createElement("table");
    let headerRow = document.createElement("tr");

    // look at the 1st element's titles
    // prop (properties) like an iterator
    for( let prop in car.cars_data[0]){
        let headerCell = document.createElement("th"); // basically a table row but bolded and centered
        headerCell.textContent = prop;
        headerRow.appendChild(headerCell);
    }

    carTable.appendChild(headerRow);

    //access the data
    // for each peice of data
    for(let i=0; i < car.cars_data.length; i++){
        //create a row in the table
        let tableRow = document.createElement("tr"); // create the table row
        // for each property in each peice of data from music
        for(let prop in car.cars_data[i]){
            let tableCell = document.createElement("td"); // create a cell

            if(prop == "image"){
                let img = document.createElement("img"); // make a blank img
                img.src = car.cars_data[i][prop]; // fill the blank img with the album art
                img.alt ="Car Artwork"; //alt tag in case load fails
                img.width = 150; //make images all the same size
                tableCell.appendChild(img); // Add the image to the tableCell
            }

            else{
                tableCell.textContent = car.cars_data[i][prop]; // fill the cell with the property of the piece of music


            }


            tableRow.appendChild(tableCell); // appened the data to the row
        }
        carTable.appendChild(tableRow); // appenend the row to the table
    }
    containerBox.appendChild(carTable);




}