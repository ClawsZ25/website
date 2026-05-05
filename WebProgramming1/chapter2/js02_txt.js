/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: 
      Date:   

      Filename: js02.js
 */

//declare constants
const EMP_COST = 100;
const BOOK_COST = 350;
const REPO_COST = 1250;
const TRAVEL_COST = 2;

window.addEventListener("load", setupForm)

function setupForm(){
      document.getElementById("photoNum").value = 1;
      document.getElementById("photoHrs").value = 2;
      document.getElementById("makeBook").checked = false;
      document.getElementById("photoRights").checked = false;
      document.getElementById("photoDist").value = 0;

      getEstimate();
      // automatically recalculate the estimate
      let photographers = document.getElementById("photoNum").onchange = getEstimate;
      let hours = document.getElementById("photoHrs").onchange = getEstimate;
      let distance = document.getElementById("photoDist").onchange = getEstimate;
      let butBook = document.getElementById("makeBook").onchange = getEstimate;
      let buyRights = document.getElementById('photoRights').onchange = getEstimate;

}

function getEstimate(){
      let totalCost = 0;
      let photographers = document.getElementById("photoNum").value;
      let hours = document.getElementById("photoHrs").value;
      let distance = document.getElementById("photoDist").value;
      let buyBook = document.getElementById("makeBook").checked;
      let buyRights = document.getElementById('photoRights').checked;

      totalCost = totalCost + photographers * hours * EMP_COST;
      totalCost = totalCost + photographers * distance * TRAVEL_COST;
      totalCost = totalCost + (buyBook ? BOOK_COST: 0);
      totalCost = totalCost + (buyRights ? REPO_COST: 0);

      // display
      document.getElementById("estimate").innerHTML = "$" + totalCost; // concate totalCost onto $ string

}
