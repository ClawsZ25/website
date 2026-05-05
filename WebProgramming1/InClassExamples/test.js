/*************************************
 * 
 * 
 * 
 * 
 * 
 * 
 ********************************/
let scores = [];

let form = document.getElementById("testForm");
let button = document.getElementById("enterButton");
// let score = document.getElementById("score");

// document.getElementById("score").addEventListener("click", AddScore);


function AddScore() {
    let testScore = document.getElementById("score");

    // Push the number value into scores
    scores.push(Number(testScore.value));

    console.log(scores);

    // Reset the input field
    
    testScore.value = "";
}

function CalculateAverage(){
    let scoreTotal = 0;
    let average = 0;
    for(i = 0; i < scores.length; i++){
        scoreTotal += scores[i];
    }
    var min = scores[0];
    //drop the lowest score
    for(k = 0; k < scores.length; k++){
        
        if(min > scores[k]){
            min = scores[k]
        }
        
    }
    console.log(min)

    if(scores.length > 1){
        //drops the minimum score
        let index = scores.indexOf(min);

        scoreTotal -= scores[index];

        scores.splice(index, 1);

    }
    
    console.log(scores)
    
    

    average = scoreTotal/scores.length;
    console.log(scoreTotal, "/", scores.length)

    let avgSpan = document.getElementById("testAverage")
    avgSpan.innerHTML = average.toFixed(2);



}
