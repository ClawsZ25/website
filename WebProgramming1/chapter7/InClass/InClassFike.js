// In class chapter 7
// 11/4/2025





function OutputWord(){

    console.log("In the OutputWord function.");

    const word = document.getElementById("wordInput").value;

    const file = document.getElementById("fileInput").files[0]; //Grabbing the first instance of some file
                                                                // In this case what the user inputs is the ontl instance of a file
    const output = document.getElementById("result"); // This is where we will output what we need to output

    if (!file) {
        output.innerHTML = "Please select a text file.";
        return;
    }


    const reader = new FileReader(); // File Reader API
    reader.onload = function (event){ // onload is run after the file is read in
        console.log("In reading from file function");
        const text = event.target.result; //

        const regex = new RegExp("\\b" + word + "\\b", "gi"); // gi means look throught the entire file for instance of word regardless of case
        const matches = text.match(regex);

        //This outputs matches

        if (matches) {
            const count = matches.length;
            output.textContent = `The word appeared ${count} times.`
        } else {
            output.textContent = `No appearences of the word found.`
        }


        //This is going to output each sentence of the text file
        const regex2 = new RegExp(/(\S)\s/g);  // this reg expression is capturing every character before the space
        const matches2 = text.match(regex2); // get all charcaters before the spaces from file

        if(matches2){
            let charsBeforeSpaces = matches2.map(matches2 => matches2.charAt(0)); //gets the character before each spaces
            // if each charcter before the space is a

            let sentenceEndings = charsBeforeSpaces.filter(char => char === "." || char === "?" || char === "!");

            if(sentenceEndings.length > 0){
                console.log(sentenceEndings);
                let sentences = text.split(/[.?!]+/); // turns the text file into an array

                let sentenceOutput = document.getElementById("sentences");
                let reverseSentenceOutput = document.getElementById("reverseSentences");
                let randomSentenceOutput = document.getElementById("randomSentences");

                // for(let i = 0; i < sentences.length; i++){
                //     sentenceOutput.innerHTML = sentences.filter(s => s.trim()).join("<br>");
                // }
                
                sentenceOutput.innerHTML = sentences.filter(s => s.trim()).join("<br>");

                window.alert("Randomizing sentences");
                let randSentences = sentences.slice();
                randSentences = RandomizeArray(randSentences);
                window.alert("sentences are randomized");

                let divisorString = "***************************************************";

                console.log("randomSentenceOutput:", randomSentenceOutput);

                randomSentenceOutput.innerHTML = divisorString + "<br><br>";

                // for(let i = 0; i < sentences.length; i++){
                //     randomSentenceOutput.innerHTML += sentences.filter(s => s.trim()).join("<br><br>");
                // }

                randomSentenceOutput.innerHTML += randSentences.filter(s => s.trim()).join("<br><br>");

                let reverseSentences = sentences.filter(s => s.trim()).reverse(); // reverses an array

                reverseSentenceOutput.innerHTML = divisorString + "<br><br>";

                reverseSentenceOutput.innerHTML += reverseSentences.filter(s => s.trim()).join("<br><br>");


            



            }

            
        }

        
    };

    // ✅ This actually starts reading the file as text
    reader.readAsText(file);
    

}

//function to randomize the array
function RandomizeArray(array){
    for(let i = array.length -1; i > 0; i--){
        let temp;
        let randomPos = Math.floor(Math.random() * (i+1));

        temp = array[i];
        array[i] = array[randomPos];
        array[randomPos] = temp;
    }
    
    return array;

}