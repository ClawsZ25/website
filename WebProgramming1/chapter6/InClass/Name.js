/**************************************************
 * 
 * 
 * Author: Zachary Clawson
 * 
 * 
 * 
 * 
 * 
 ******************************************************/


function setLabels(){
    alert("in the set labels");

    const firstNameLabel = document.getElementById("firstName");
    const hiddemFirstNameLabel = document.getElementById("hiddenLabel");
    hiddemFirstNameLabel.value = firstNameLabel.textContent;

}

