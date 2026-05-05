"use strict"


//Need to validate the form


function validate(){
    let fname = document.getElementById("firstname");
    let lname = document.getElementById("lastname");
    let email = document.getElementById("email");

    // let emailPattern = /^[A-Za-z]+@[A-Za-z]+.edu/;

    //validate first name
    if(fname.validity.valueMissing){
        fname.setCustomValidity("Please enter your firstname.")
    } else{
        fname.setCustomValidity("");
    }
    // validate the lastname for no missing value
    if(lname.validity.valueMissing){
        lname.setCustomValidity("Please enter your lastname.")
    } else{
        lname.setCustomValidity("");
    }

    console.log(email.value);

    if(email.validity.valueMissing){
        email.setCustomValidity("Please enter your email.");
    
    // } else if(email.value.patternMismatch){
    //     email.setCustomValidity("Please enter your email that matches the required pattern Any # of Letters + @ + Any # of Letter + .edu.");
    //My pattern mismatching is not working
        
    } else{
        email.setCustomValidity("");
    }

    //Validate a radio button was selected

    //my radio button validation is not working

    let state = document.forms.Exam2Form.elements.state[0]; //pennsylvania
    console.log(state);
    if(state.validity.missingValue){
        state.setCustomValidity("Select your State");

    } else{
        state.setCustomValidity("");
    }


    

    
}