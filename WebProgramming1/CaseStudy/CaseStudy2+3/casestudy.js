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

// Here is the event listener
const ticketInput = document.getElementById("ticketAmount");
const selectedRegion = document.getElementById("regions");
const calcButton = document.getElementById("calculateButton")


//selectedRegion.addEventListener("change", calculateTotal);
//ticketInput.addEventListener("input", calcTicketTotal);
calcButton.addEventListener("click", calcTicketTotal)

function calcTicketTotal(){
    amountOfTickets = ticketInput.value;
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

    let totalPriceSpan = document.getElementById("totalPrice");
    totalPriceSpan.innerHTML = formatCurrency(totalCost);
}

function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }









