let currentIndex = 0;
let currentScore = 0;

const questions = [
    { name: 'Is NBA Youngboy the GOAT?', property1: '1' },
    { name: 'Does YB have 11 kids?', property1: '0' },
    { name: 'Is YB on house arrest?', property1: '1' },
    { name: 'Is YBs Father in law Floyd Mayweather?', property1: '1' },
    { name: 'Is YBs Name Tione Jayden Merritt? ', property1: '0' },
    { name: 'Is this statement true: YB > Durk ', property1: '1' },
    { name: 'Has YB broken his neck? ', property1: '1' },


];

function showNextElement() {
    if (currentIndex < questions.length) {

        document.getElementById("question").textContent = questions[currentIndex].name;
        document.getElementById("button1").style.display = "inline-block";
        document.getElementById("button2").style.display = "inline-block";
        document.getElementById("gunga").textContent = "";

        currentIndex++;
    } else {
       

        document.getElementById("yes").textContent = "The Game is Done \n your score is " + currentScore;

        
    }
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentIndex - 1];
    const correctAnswer = currentQuestion.property1;

    if (correctAnswer === answer) {
        document.getElementById("gunga").textContent = "correct";

        currentScore++;
        document.getElementById("button1").style.display = "none";
        document.getElementById("button2").style.display = "none";
    } else {
        document.getElementById("gunga").textContent = "incorrect";

        // Disable the correct button
        document.getElementById("button1").style.display = "none";
        document.getElementById("button2").style.display = "none";

    }

    // Enable all buttons for the next question
 

    // Update score and button text
    document.getElementById("yes").textContent = currentScore;
    document.getElementById("start").textContent = "Click For Next Question";
}


document.getElementById("start").addEventListener("click", showNextElement);
document.getElementById("button1").addEventListener("click", () => checkAnswer('1'));
document.getElementById("button2").addEventListener("click", () => checkAnswer('0'));
