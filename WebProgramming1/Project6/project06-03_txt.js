"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Zachary Clawson
      Date:   10/6/2025

      Filename: project06-03.js
*/


let useShip = document.getElementById("useShip");

function CopyShippingToBilling(){

      const fNameShip = document.getElementById("firstnameShip");
      const fNameBill = document.getElementById("firstnameBill");
      const lNameShip = document.getElementById("lastnameShip");
      const lNameBill = document.getElementById("lastnameBill");
      const add1Ship = document.getElementById("address1Ship");
      const add1Bill = document.getElementById("address1Bill");
      const add2Ship = document.getElementById("address2Ship");
      const add2Bill = document.getElementById("address2Bill");
      const cityShip = document.getElementById("cityShip");
      const cityBill = document.getElementById("cityBill");
      const countryShip = document.getElementById("countryShip");
      const countryBill = document.getElementById("countryBill");
      const codeShip = document.getElementById("codeShip");
      const codeBill = document.getElementById("codeBill");
      const stateShip = document.getElementById("stateShip");
      const stateBill = document.getElementById("stateBill");

      if(useShip.checked === true){
            // console.log("fNameBill is ", fNameBill.value, " and fNameShip is ", fNameShip.value, ".");
            fNameBill.value = fNameShip.value;
            lNameBill.value = lNameShip.value;
            add1Bill.value = add1Ship.value;
            add2Bill.value = add2Ship.value;
            cityBill.value = cityShip.value;
            countryBill.value = countryShip.value;
            codeBill.value = codeShip.value;
            // for the state
            stateBill.selectedIndex = stateShip.selectedIndex;
            
      }

}

let formElements = document.querySelectorAll("input[type='text']");
let fieldCount = formElements.length;
let errorBox = document.getElementById("errorBox");
// This is a small fix to issue that was bothering me
window.addEventListener("pageshow", function(evt) {
  // If this page was restored from the back/forward cache
  if (evt.persisted) {
      //regrab errorBox
    const errorBox = document.getElementById("errorBox");
    if (errorBox) {
      //set content to blank
      errorBox.textContent = "";
    }
  }
});


// for loop for invalid input

for(let i = 0; i < formElements.length; i++){
      console.log(formElements[i]);
      formElements[i].addEventListener("invalid", ShowValidationError);
}

function ShowValidationError(evt){
      console.log("invalid Input")

      evt.preventDefault();
      errorBox.textContent = "Complete All the Highlighted Fields";

}


