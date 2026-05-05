//Timer in Class 11/13/2025






//Time calculations
const x = setInterval(function(){
    let todaysDate = new Date();
    let countdownDate = new Date("December 8, 2025 23:59:59").getTime();

    const dayDiv = 1000 * 60 * 60 * 24;
    const hourDiv = 1000 * 60 * 60;
    const minDiv = 1000 * 60;
    const secondDiv = 1000;

    let para = document.getElementById("currentDay");



    para.innerHTML = todaysDate.toLocaleString();




    const distance = countdownDate - todaysDate.getTime();

    let dayBox = document.getElementById("daysNum");
    let hourBox = document.getElementById("hoursNum");
    let minuteBox = document.getElementById("minutesNum");
    let secondBox = document.getElementById("secondsNum");

    const days = Math.floor(distance/ (dayDiv));
    const hours = Math.floor((distance % dayDiv)/hourDiv);
    const minutes = Math.floor((distance%hourDiv)/minDiv);
    const seconds = Math.floor((distance%minDiv)/secondDiv);

    dayBox.textContent = days;
    hourBox.textContent = hours;
    minuteBox.textContent = minutes;
    secondBox.textContent = seconds;




}, 1000)


// get the spot for the countdown time





