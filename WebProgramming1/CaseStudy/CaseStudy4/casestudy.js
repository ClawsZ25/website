"use strict"
/*
 *  Author: Zachary Clawson
 *  Project: Case Study
 *  Date: 09/12/25
 * 
 * 
 * 
 * 
 * 
 * 
 */
// console.log(document.getElementById("ltaLogo"))

const logos = document.querySelectorAll(".logo")
const text = document.getElementById("leaguesSubcaption")

// for all logos add an event listerner for click
//I have to use an annymous function to maintain the scope of logos
logos.forEach(logo =>{
    logo.addEventListener("click", function(){
        switch(logo.id){
        case "ltaLogo":
            text.innerText = "This is the LTA (League of The Americas)."
            break;

        case "lecLogo":
            text.innerText = "This is the LEC (European championship league)."
            break;

        case "lckLogo":
            text.innerText = "This is the LCK (League of Legends Championc Korea)."
            break;

        case "lplLogo":
            text.innerText = "This is the LPL (League of Legends Pro League in China)."
            break;

        case "lcpLogo":
            text.innerText = "This is the LCP (League of Legends Champions Pacific)."
            break;

        default:
            text.innerText="These are the League of Legends esport Leagues."
    }
    })
})

// Ticket price calulator
const LTA_TICKET_PRICE = 23;
const LEC_TICKET_PRICE = 35;
const LCK_TICKET_PRICE = 16;
const COUPON_VALUE = .25;
// Here is the event listener
const ticketInput = document.getElementById("ticketAmount");
const selectedRegion = document.getElementById("regions");
const calcButton = document.getElementById("calculateButton");
const discountInput = document.getElementById("Discount");


//selectedRegion.addEventListener("change", calculateTotal);
//ticketInput.addEventListener("input", calcTicketTotal);
calcButton.addEventListener("click", calcTicketTotal)

function calcTicketTotal(){
    let amountOfTickets = ticketInput.value;
    let region = selectedRegion.value;
    //console.log(region)

    let totalCost = 0;

    switch(region){
        case "LTA":
            totalCost = LTA_TICKET_PRICE * amountOfTickets;
            break;
        case "LEC":
            totalCost = LEC_TICKET_PRICE * amountOfTickets;
            break;
        case "LCK":
            totalCost = LCK_TICKET_PRICE * amountOfTickets;
            break;
        default:

    }

    //Apply Discount if discount exists
    let coupon = discountInput.value;
    let pattern = /^[A-Za-z]{6}[0-9]{2}$/
    let couponCheck = false;

    // check if coupon was submitted
    if(coupon != ""){
        couponCheck = true;
    }

    try{
        // THis test is the discount input obeys the set pattern
        if(!pattern.test(coupon) && coupon != ""){
            throw new Error("Invalid Coupon Format! Must be 6 characters followed by two numbers");
        }

        // if coupon is valid 
        if(couponCheck === true){
            console.log("Coupon accepted: ", coupon, ".")
            window.alert("Good coupon")
            let discountTotalCost = totalCost * COUPON_VALUE;
            totalCost -= discountTotalCost;
            couponCheck = false;
        }      




    } catch(err){
        alert(err.message)
    }

   

    let totalPriceSpan = document.getElementById("totalPrice");
    totalPriceSpan.innerHTML = formatCurrency(totalCost);
}

function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

// **************************************************************************8
// coupon generation
function generateCoupon(bool){
    let couponSpan = document.getElementById("coupon");
    let coupon = "";
    if(bool === true){
        coupon = generateRandomGoodString();

    } else{
        coupon = generateRandomBadString();
    }

    couponSpan.innerHTML=coupon;
}
/*************************FOR GOOD STRING*/ 
function generateRandomGoodString(){
    //possible characters ot select from
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    //possible numbers to select from
    const numbers ="0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    // 2 random numbers
    for (let i = 0; i < 2; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    return result;
}

//*********************FOR BAD STRING */
function generateRandomBadString(){
    //possible characters ot select from
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    //possible numbers to select from
    const numbers ="0123456789";
    let result = "";
    for (let i = 0; i < 4; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    // 2 random numbers
    for (let i = 0; i < 2; i++) {
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    for (let i = 0; i < 2; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return result;
}









