"use strict";


// grab the container from the html page
let containerBox = document.getElementById("container");


//Need an async function because file load/read is slow so it tells the interpreter to run this seperately
async function makeMusicTable(){
    // reads a json file from a webpage
    const response = await fetch("https://devweb1.cis.pennwest.edu/~dtucker/Music.json");
    const music = await response.json(); // this is our parsed json file
    // let music = JSON.parse(jsonData); --> what to do if you open a file from the computer to parse its

    let musicTable = document.createElement("table");
    let headerRow = document.createElement("tr");

    // look at the 1st element's titles
    // prop (properties) like an iterator
    for( let prop in music.music_data[0]){
        let headerCell = document.createElement("th"); // basically a table row but bolded and centered
        headerCell.textContent = prop;
        headerRow.appendChild(headerCell);
    }

    musicTable.appendChild(headerRow);

    //access the data
    // for each peice of data
    for(let i=0; i < music.music_data.length; i++){
        //create a row in the table
        let tableRow = document.createElement("tr"); // create the table row
        // for each property in each peice of data from music
        for(let prop in music.music_data[i]){
            let tableCell = document.createElement("td"); // create a cell

            if(prop == "artwork"){
                let img = document.createElement("img"); // make a blank img
                img.src = music.music_data[i][prop]; // fill the blank img with the album art
                img.alt ="Album Artwork"; //alt tag in case load fails
                img.width = 150; //make images all the same size
                tableCell.appendChild(img); // Add the image to the tableCell
            } else if(prop == "url"){
                let link = document.createElement("audio");
                link.controls = true;
                let sourceMp3 = document.createElement("source");
                sourceMp3.src = music.music_data[i][prop];
                sourceMp3.type= "audio/mpeg";
                link.appendChild(sourceMp3);
                tableCell.appendChild(link);

            }else{
                tableCell.textContent = music.music_data[i][prop]; // fill the cell with the property of the piece of music


            }


            tableRow.appendChild(tableCell); // appened the data to the row
        }
        musicTable.appendChild(tableRow); // appenend the row to the table
    }
    containerBox.appendChild(musicTable);




}