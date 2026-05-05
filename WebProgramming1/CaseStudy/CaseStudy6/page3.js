// This JS file is for page 3 of my casestudy and submitting a review

let userName = document.getElementById("username");
let email = document.getElementById("userEmail");
let reviewType = document.getElementById("review type");
let review = document.getElementById("review");
let validationBox = document.getElementById("reviewValidation");

//reset validationBox on page trans
window.addEventListener("pageshow", function(evt) {
  // If this page was restored from the back/forward cache
  if (evt.persisted) {
      //regrab errorBox
    const validationBox = document.getElementById("reviewValidation");
    if (validationBox) {
      //set content to blank
      validationBox.textContent = "";
      validationBox.style.visibility = "hidden";
    }
  }
});

userName.addEventListener("invalid", ShowValidationError);
email.addEventListener("invalid", ShowValidationError);
reviewType.addEventListener("invalid", ShowValidationError);
review.addEventListener("invalid", ShowValidationError);



function ShowValidationError(evt){
      console.log("invalid Input")

      evt.preventDefault();
      validationBox.textContent = "Complete All the Fields Denoted with an *";
      validationBox.style.backgroundColor = "red";
      validationBox.style.visibility = "visible";

}
