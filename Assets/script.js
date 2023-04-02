//define all questions and answers
var q1 = {
    question:'Who invented peanut butter?',
    answer1:'George Washington',
    answer2:'George Washington Carver',
    answer3:'Thomas Edison',
    answer4:'Abraham Lincoln',
    correct: 'b'
}
var q2 = {
    question:'What is the rarest M&M color',
    answer1:'Red',
    answer2:'Green',
    answer3:'Brown',
    answer4:'Blue',
    correct: 'c'
}
var q3 = {
    question:'Which country consumes the most chocolate per capita?',
    answer1:'USA',
    answer2:'Germany',
    answer3:'Switzerland',
    answer4:'Italy',
    correct: 'c'
}
var q4 = {
    question:'What was the first soft drink in space?',
    answer1:'Coca Cola',
    answer2:'Sprite',
    answer3:'Pepsi',
    answer4:'Ginger Ale',
    correct: 'a'
}
var q5 = {
    question:'Which is the only edible food that never goes bad?',
    answer1:'Pickles',
    answer2:'Butter',
    answer3:'Olive Oil',
    answer4:'Honey',
    correct: 'd'
}
var q6 = {
    question:'Which country invented ice cream?',
    answer1:'Italy',
    answer2:'USA',
    answer3:'Russia',
    answer4:'China',
    correct: 'd'
}
questions = [q1,q2,q3,q4,q5,q6]


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
    var choiceBox = document.querySelector('#choice')
    var highscores = document.querySelector('#scores')
    var scoreSubmit = document.querySelector('#submit')
    var currentQ = 0
    var savedScores = []
    var secondsLeft = 60
    var score = 1
    var savedScores= []

    //function
    //start quiz
        //hide start button
        //show the quiz container
        //display first question

    startGame.addEventListener("click",function(){
        if(!isPlaying){
            currentQ = 0
            isPlaying=true;
            answerBox.children.item(0).setAttribute('style', 'background-color: cornflowerblue; border: 3px solid black;')
            answerBox.children.item(1).setAttribute('style', 'background-color: cornflowerblue; border: 3px solid black;')
            answerBox.children.item(2).setAttribute('style', 'background-color: cornflowerblue; border: 3px solid black;')
            answerBox.children.item(3).setAttribute('style', 'background-color: cornflowerblue; border: 3px solid black;')
            nextQ(currentQ)
            Game()
             //start timer
            countdownTimer = setInterval(function(){
                secondsLeft--;
                //display counterdown on screen
                timerH3.textContent=secondsLeft
                if(secondsLeft<=0){
                    //if time runs out, lose
                    clearInterval(countdownTimer)
                    timerH3.textContent = "Times Up"
                    endgame()
                    isPlaying=false
                }
            },1000)
        }
        })
        function Game(){
            
            answerBox.addEventListener("click", function(event) {
                 var element = event.target;
                 console.log(isPlaying)
                if(secondsLeft != 0 && isPlaying != false){
                    if (element.matches("#choice")) {
                        var answer = element.getAttribute("data-answer");
                        if(answer === questions[currentQ].correct){
                            feedback.textContent = 'Correct'
                            currentQ++
                            nextQ(currentQ)
                        
                        }else{
                            feedback.textContent = 'Incorrect'
                            secondsLeft = secondsLeft - 5
                            timerH3.textContent=secondsLeft
                            currentQ++
                            nextQ(currentQ)
                            }
                        }
                
                }else{
                    timerH3.textContent = "End of Quiz"
                    isPlaying=false
                    clearInterval(countdownTimer)
                    endgame()
                    }
                }) 
            }

    function nextQ(index){
        if(index < questions.length){
            questionH3.textContent = questions[index].question
            answerBox.children.item(0).textContent = 'A.' + questions[index].answer1
            answerBox.children.item(1).textContent = 'B.' + questions[index].answer2
            answerBox.children.item(2).textContent = 'C.' + questions[index].answer3
            answerBox.children.item(3).textContent = 'D.' + questions[index].answer4
        }else{
            isPlaying = false
            endgame()
        }
    }

    function endgame(){
        isPlaying = false
        score = secondsLeft
        questionH3.setAttribute('style','display:none')
        answerBox.children.item(0).textContent = ''
        answerBox.children.item(1).textContent = ''
        answerBox.children.item(2).textContent = ''
        answerBox.children.item(3).textContent = ''
        feedback.textContent = ''
        answerBox.children.item(0).setAttribute('style', 'display:none;')
        answerBox.children.item(1).setAttribute('style', 'display:none;')
        answerBox.children.item(2).setAttribute('style', 'display:none;')
        answerBox.children.item(3).setAttribute('style', 'display:none;')
        scoreSubmit.addEventListener("click", function() {
            initials = document.querySelector('#initials').value
            var namedScore = initials + ": " + score
            savedScores.push(namedScore)
            localStorage.setItem("highscores", JSON.stringify(savedScores));
            console.log(JSON.parse(localStorage.getItem('savedScores')))
            storageScore = JSON.parse(localStorage.getItem('highscores'))
            questionH3.setAttribute('style','display:flex')
            questionH3.textContent = 'HighScores ' + storageScore
        })
        
    }
    
    document.querySelector("#highscores").addEventListener("click",function(){
        storageScore = JSON.parse(localStorage.getItem('highscores'))
        questionH3.textContent = 'HighScores ' + storageScore
    })


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
