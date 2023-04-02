//define all questions and answers
// var q1 = {
//     question:'Who invented peanut butter?',
//     answer1:'George Washington',
//     answer2:'George Washington Carver',
//     answer3:'Thomas Edison',
//     answer4:'Abraham Lincoln',
//     correct: 'b'
// }
// var q2 = {
//     question:'Who invented peanut butter?',
//     answer1:'George Washington',
//     answer2:'George Washington Carver',
//     answer3:'Thomas Edison',
//     answer4:'Abraham Lincoln',
//     correct: 'b'
// }

// var q2 = {
//     question:'Who invented peanut butter?',
//     answer1:'George Washington',
//     answer2:'George Washington Carver',
//     answer3:'Thomas Edison',
//     answer4:'Abraham Lincoln',
//     correct: 'b'
// }

// var q3 = {
//     question:'Who invented peanut butter?',
//     answer1:'George Washington',
//     answer2:'George Washington Carver',
//     answer3:'Thomas Edison',
//     answer4:'Abraham Lincoln',
//     correct: 'b'
// }

// var q1 = {
//     question:'Who invented peanut butter?',
//     answer1:'George Washington',
//     answer2:'George Washington Carver',
//     answer3:'Thomas Edison',
//     answer4:'Abraham Lincoln',
//     correct: 'b'
// }

// var q1 = {
//     question:'Who invented peanut butter?',
//     answer1:'George Washington',
//     answer2:'George Washington Carver',
//     answer3:'Thomas Edison',
//     answer4:'Abraham Lincoln',
//     correct: 'b'
// }

import {questions} from './questions'
console.log(questions)
//define variables for tracking 
    //track time
    //track questions
    //currently playing
    var isPlaying = false
//create variables to reference DOM elements
    //timer
    var timerH3 = document.querySelector("#timer");
    //questions
    var questionH3 = document.querySelector("#question")
    //answers
    var answerBox = document.querySelector("#answers")
    //feedback on answer choice
    var feedback = document.querySelector("#feedback")
    //
    var startGame = document.querySelector("#start")


    answerBox.addEventListener("click", function(event) {
        var element = event.target;
      
        if (element.matches("#choice")) {
          var answer = element.getAttribute("data-answer");
          console.log(answer)
      
        }

        if(answer === q1.correct){
            feedback.textContent = 'Correct'
        }else{
            feedback.textContent = 'Incorrect'
            
        }
      });


    startGame.addEventListener("click",function(){
        if(!isPlaying){
            //startGame();
        }
    })
      
    //start button
    //name/iniitals
    //save button
    //high scores container

//function
    //start quiz
        //hide start button
        //show the quiz container
        //start timer
        //display counterdown on screen
        //display first question

 
//function
    //rendering a question
        //clearing/remove previous question 
        //getting first question 
        //add question to the question container
        //make a button for each answer
        //add answers to the answer container

//function
    //handle answer clicks

    //if 
    //answer is wrong
    //subtract time from the countdown timer
    //maker sure time is displayed correctly on page
    //flash wrong answer message (setTimeout)


    //update current question
    //display question on page 
    
    //if question is the last question
        //trigger quiz completion

//function
    //handle quiz completion
        //stop timer
        //hide quiz container
        //show end screen
        //show time remaining as score

//function
    //tracking time 
        //subtract time 
        //update the page
        

    //if time hits zero
    //trigger quiz completion

//function
    //saving high scores
    //get value of user input (name/initials)
    //validiate input 
    //retreive exisiting data from local storage
    //save updated data back to local storage
    //redirect to start screen 

//function
    //listening for key press
        //check if the key pressed was 'Enter' for saving scores
        //OPTIONAL check if the key pressed was a b c d for answers

//event listeners
    //click start
    //click answers
    //saving scores
    //keyups