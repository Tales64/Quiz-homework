var gameButton = document.createElement("Button");
// var gameStart = document.getElementById("myBtn");



gameButton.textContent ="Start Game";
// myBtn.textContent = "Start Game";



document.body.appendChild(li);
// document.button.append(myBtn);





// WHEN I click the start button
gameStart.addEventListener("click", function() {
    // If mode is dark, apply light background
    if (mode === "dark") {
      mode = "light";
      container.setAttribute("class", "light");
    }
    // If mode is light, apply dark background 
    else {
      mode = "dark";
      container.setAttribute("class", "dark");
    }
  });
  

// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
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




