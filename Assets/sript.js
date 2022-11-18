 
// var correctAnswer = 

var startButton = document.querySelector("#start")
var timer = document.querySelector("#timeLeft")
var scorePlace = document.querySelector("#scorePlace")
var questionIndex = 0
var score = 0
const question = [
    {
        quest: "How many woodchucks?",
        corr: 3,
       choices: [35,46,3,12]
    },
    {
        quest: "How many bears?",
        corr: 16,
       choices: [35,46,16,12]
    },
    {
        quest: "How many ducks?",
        corr: 17,
       choices: [35,46,17,12]
    },
    {
        quest: "How many chimps?",
        corr: 18,
       choices: [35,46,18,12]
    },
    {
        quest: "How many dogs?",
        corr: 19,
       choices: [35,46,19,12]
    }
]
startButton.addEventListener("click", function() {
    console.log("Hello")
    setTime();
    startQuiz();
});
var secondsLeft = (question.length*10)
function startQuiz(){
nextQuestion()
}

function nextQuestion(){
    console.log(question[questionIndex].corr)
     
        // the questions and answers in their own boxes
        var currentQuest = document.querySelector("#question");
        var answer1 = document.querySelector("#answer1");
        var answer2 = document.querySelector("#answer2");
        var answer3 = document.querySelector("#answer3");
        var answer4 = document.querySelector("#answer4");
        currentQuest.textContent = question[questionIndex].quest;
        answer1.textContent = question[questionIndex].choices[0];
        answer2.textContent = question[questionIndex].choices[1];
        answer3.textContent = question[questionIndex].choices[2];
        answer4.textContent = question[questionIndex].choices[3];
        
    }
    // // WHEN I answer a question
    // // THEN I am presented with another question
    function questionClick (event){
        var clickbutton = event.target
        if (clickbutton.textContent == question[questionIndex].corr){
            document.getElementById("feedback").textContent = "Right"
            var points = (questionIndex + 1)
            var currentPoints = parseInt(points)
            score += currentPoints  
            scorePlace.textContent = score
            console.log(points)
            console.log(currentPoints)
            console.log(score)
        questionIndex++
        if (secondsLeft <=0 || questionIndex === question.length){
            endQuiz();
        }
        else{
            nextQuestion();
        }
    }
    else{
        secondsLeft -= 10
        if (secondsLeft <= 0){
            secondsLeft = 0
        }
        timer.textContent = secondsLeft;
        document.getElementById("feedback").textContent = "Wrong"
        questionIndex++
        if (secondsLeft <=0 || questionIndex === question.length){
            endQuiz();
        }
        else{
            nextQuestion();
        }
    }
        
    }
    // setTimeout(function () {
    //     document.getElementById("feedback").setAttribute("style", "display: none")
    // },)

function endQuiz(){
    // to be completed
}
document.querySelector("#answer1").addEventListener("click", questionClick)
document.querySelector("#answer2").addEventListener("click", questionClick)
document.querySelector("#answer3").addEventListener("click", questionClick)
document.querySelector("#answer4").addEventListener("click", questionClick)
// answer1.addEventListener("click", startQuiz)
// WHEN I click the start button
// gameStart.addEventListener("click", function() {
//     if (mode === "dark") {
//       mode = "light";
//       container.setAttribute("class", "light");
//     }
    
//     else {
//       mode = "dark";
//       container.setAttribute("class", "dark");
//     }
//   });
  

// // THEN a timer starts and I am presented with a question
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft ;
        
      if(secondsLeft === 0) {
    //     // Stops execution of action at set interval
        clearInterval(timerInterval);
    //     // Calls function to create and append image
    //     sendMessage();
      }
  console.log(secondsLeft)
    }, 1000);
  }

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

    
// }
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// THEN I can save my initials and my score
// 
// 
// 
// 
// create variables for all the questions in an array
// create an array for all the potential answers 
// create variables for all the correct answers
// create a randomizer to choose questions to dissplay optional
// create a for loop to continue choosing questions 




