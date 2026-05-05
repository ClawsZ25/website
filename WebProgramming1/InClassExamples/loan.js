// document.getElementById("interestRate").onchange = calcLoan;
// document.getElementById("amtBorrowed").onchange = calcLoan;
// document.getElementById("numberOfMonths").onchange = calcLoan;
// document.getElementById("numOfCompunds").onchange = calcLoan;


function calcLoan(){
    console.log("Goober")
    let payment = 0;
    let rate = document.getElementById("interestRate").value
    let borrow = document.getElementById("amtBorrowed").value
    let months = document.getElementById("numberOfMonths").value
    // let compounds = document.getElementById("numOfCompounds").value


    //calculating the loan
    // payment = borrow * 1+(rate/100) * (months/compounds);
    rate = rate/12;
    console.log(rate);

    let x = (1 + rate) ** months;
    console.log(x)
    console.log(borrow * rate * x)
    console.log(x-1)
    payment = (borrow * rate * x) / (x-1);
    

    document.getElementById("calculatedLoan").innerHTML = "$" + payment.toFixed(2);


    
}