"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project Review Exam 6

      Project to validate a form used for setting up a new account
      Author: 
      Date:   

      Filename: project06-01.js
*/

let submitbutton = document.getElementById("submitButton");
let pwd = document.getElementById("pwd");
let pwd2 = document.getElementById("pwd2");

// pattern is reh expression defined with start and end / (backslahses)

// submitbutton.addEventListener("click", function(){})       ANNOTYMOUS FUNCTION DEF FOR ONCLICK EVENT FOR SUBMI

let pattern = /^\d{4}@[a-zA-Z]{4}/;

function Submit(){
      
      pwd.setCustomValidity("");
      pwd.setCustomValidity("");

      //BELOW CODE IS FRO IF DEFAULT DOES NOT CHECK FOR MISSING VALUE
      // WILL NEED ON TEST 2

      // if(user.validity.valueMissing){
      //       user.setCustomValidity("enter a user name");
      //       user.focus();
      // } else {
      //       //clear custom Validity
      //       user.setCustomValidity("");
      // }



      //if(pwd.checkValidty()) // this will check if password is valiud on pattern because pattern is required
      // can also do pwd.validity.patternMismatch
      if(!pattern.test(pwd.value)){

            // alert("Password must be at least 8 characters with at least 1 letter and number");
            pwd.setCustomValidity("Password must be at least 8 characters with at least 1 letter and number")
            // return false;
      } else if(pwd.value != pwd2.value) {

            // alert("Passwords must match");
            pwd2.setCustomValidity("Passwords must match");
            // return false;

      }



}


