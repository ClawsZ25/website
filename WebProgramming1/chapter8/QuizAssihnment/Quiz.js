"use strict";

// grab the container from the html page
let containerBox = document.getElementById("QuizContainer");
let answerBox = document.getElementById("ContainerQuestion");

// GLOBAL so checkAnswer() can use it
let correctAnswer = "";

async function makeQuizQuestion() {

    const response = await fetch("https://opentdb.com/api.php?amount=1&type=multiple");
    const question = await response.json();

    // Clear old question
    containerBox.innerHTML = "";

    let questionTable = document.createElement("table");
    let headerRow = document.createElement("tr");

    // create the header row
    for (let category in question.results[0]) {
        if (category === "correct_answer" || category === "incorrect_answers") {
            continue;
        }

        let headerCell = document.createElement("th");
        headerCell.textContent = category;
        headerRow.appendChild(headerCell);
    }

    // Add header for answer dropdown
    let answerCell = document.createElement("th");
    answerCell.textContent = "Answer Options";
    headerRow.appendChild(answerCell);

    questionTable.appendChild(headerRow);

    // Build data row
    question.results.forEach(result => {
        let tableRow = document.createElement("tr");

        // Create dropdown once
        let answers = document.createElement("select");
        answers.id = "answerSelect";

        // save correct answer globally
        correctAnswer = decodeHTMLEntities(result.correct_answer);

        // Add correct answer option
        let optCorrect = document.createElement("option");
        optCorrect.textContent = correctAnswer;
        optCorrect.value = correctAnswer;
        answers.appendChild(optCorrect);

        // Add incorrect answer options
        result.incorrect_answers.forEach(wrong => {
            let wrongDecoded = decodeHTMLEntities(wrong);
            let opt = document.createElement("option");
            opt.textContent = wrongDecoded;
            opt.value = wrongDecoded;
            answers.appendChild(opt);
        });

        // Fill row with non-answer properties
        for (let prop in result) {
            if (prop === "correct_answer" || prop === "incorrect_answers") continue;

            let tableCell = document.createElement("td");
            tableCell.textContent = decodeHTMLEntities(result[prop]);
            tableRow.appendChild(tableCell);
        }

        // Answer dropdown cell
        let tdSelect = document.createElement("td");
        tdSelect.appendChild(answers);
        tableRow.appendChild(tdSelect);

        questionTable.appendChild(tableRow);
    });

    // put table on page
    containerBox.appendChild(questionTable);
}



// Check user answer
function checkAnswer() {
    const select = document.getElementById("answerSelect");
    const selected = select.value;

    let correctAnswerNumber = document.getElementById("AnswersCorrect");
    let totalQuestionsAsked = document.getElementById("TotalQuestions");

    let numberOfCorrect = parseInt(correctAnswerNumber.textContent);
    let numberOfQuestions = parseInt(totalQuestionsAsked.textContent);
    numberOfQuestions++;

    if (selected === correctAnswer) {
        numberOfCorrect++;
        correctAnswerNumber.textContent = numberOfCorrect;
        console.log("Correct");
        
    } else {
        console.log("Incorrect.");
    }

    totalQuestionsAsked.textContent = numberOfQuestions;
}


// Decode HTML entities from trivia API
function decodeHTMLEntities(text) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
}






