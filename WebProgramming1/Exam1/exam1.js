/************************************
 * 
 *  name: Zachary Clawson
 *  date: 9/25/2025
 *  exam 1
 *  dice roller
 * 
 ***********************************/

let rolls = [];
let sides = document.getElementById("dieSides").value;
// let amountOfRolls = document.getElementById("amountOfRoles").value;


function GenerateRolls(){
    console.log("in GenerateRolls");
    
    let amountOfRolls = document.getElementById("amountOfRoles").value;
    let sides = document.getElementById("dieSides").value;

    console.log(amountOfRolls);

    for(let i=0; i < amountOfRolls; i++){
        console.log("adding elemnts to rolls");
        rolls.push(Math.floor(Math.random() * sides)+1);
    }

    console.log(rolls)

    let outputRolls = document.getElementById("rollSpan");
    outputRolls.innerHTML = rolls;

}


function ClearRolls(){
    while(rolls.length != 0){
        rolls.pop();
    }

    console.log(rolls)
    let outputRolls = document.getElementById("rollSpan");
    outputRolls.innerHTML = rolls;

}