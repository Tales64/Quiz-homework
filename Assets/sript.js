 
// var correctAnswer = 

var startButton = document.querySelector("#start")
var timer = document.querySelector("#timeLeft")
var secondsLeft = 10
const question = [
    {
        quest: "How many woodchucks?",
        corr: 3,
       choices: [35,46,3,12]
    },
    {
        quest: "How many bears?",
        corr: 3,
       choices: [35,46,3,12]
    },
    {
        quest: "How many ducks?",
        corr: 3,
       choices: [35,46,3,12]
    },
    {
        quest: "How many chimps?",
        corr: 3,
       choices: [35,46,3,12]
    },
    {
        quest: "How many dogs?",
        corr: 3,
       choices: [35,46,3,12]
    }
]
startButton.addEventListener("click", function() {
    console.log("Hello")
    setTime();
    startQuiz();
});

function startQuiz(){
}

for (let i = 0; i < question.length; i++) {
    // the questions and answers in their own boxes
    var currentQuest = document.querySelector("#question");
    var answer1 = document.querySelector("#answer1");
    var answer2 = document.querySelector("#answer2");
    var answer3 = document.querySelector("#answer3");
    var answer4 = document.querySelector("#answer4");
    currentQuest.textContent = question[i].quest;
    answer1.textContent = question[i].choices[0];
    answer2.textContent = question[i].choices[1];
    answer3.textContent = question[i].choices[2];
    answer4.textContent = question[i].choices[3];
    
}

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

// // WHEN I answer a question
// // THEN I am presented with another question
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




