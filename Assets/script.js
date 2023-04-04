//define all questions and answers
var q1 = {
    question:'What was the first message sent by morse code?',
    answer1:'Hello World',
    answer2:'Hello',
    answer3:'SOS',
    answer4:'What hath God wrought',
    correct: 'd'
}
var q2 = {
    question:'WWhich Italian town is the setting for Shakespeare’s Romeo and Juliet?',
    answer1:'Rome',
    answer2:'Milan',
    answer3:'Verona',
    answer4:'Florance',
    correct: 'c'
}
var q3 = {
    question:'How many moons does Neptune have?',
    answer1:'10',
    answer2:'14',
    answer3:'7',
    answer4:'2',
    correct: 'b'
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
    question:'How many Billboard #1 hits did Elvis have?',
    answer1:'2',
    answer2:'20',
    answer3:'5',
    answer4:'18',
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
var q7 = {
    question:'What year was the first “Batman” comic book published?',
    answer1:'1999',
    answer2:'1972',
    answer3:'1939',
    answer4:'1921',
    correct: 'c'
}
var q8 = {
    question:'What color is a giraffe’s tongue?',
    answer1:'purple',
    answer2:'yellow',
    answer3:'blue',
    answer4:'green',
    correct: 'a'
}
var q9 = {
    question:'What is the maximum number of points someone can achieve on Pac-Man?',
    answer1:'9999',
    answer2:'33333360',
    answer3:'2000000',
    answer4:'9999998',
    correct: 'b'
}

var q10 = {
    question:'What is a single strand of spaghetti called?',
    answer1:'spaghetto',
    answer2:'spaghetta',
    answer3:'spaghet',
    answer4:'spaghetti',
    correct: 'a'
}

var questions = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10]


//define variables for tracking 
    //track time
    //track questions
    //currently playing
    var isPlaying = false
//create variables to reference DOM elements
    //timer
    var timerH3 = document.querySelector("#timer");
    timerH3.setAttribute('style','display:none')
    //questions
    var questionH3 = document.querySelector("#question")
    //answers
    var answerBox = document.querySelector("#answers")
    answerBox.setAttribute('style','display:none')
    //feedback on answer choice
    var feedback = document.querySelector("#feedback")
    //
    var startGame = document.querySelector("#start")
    var choiceBox = document.querySelector('#choice')
    choiceBox.setAttribute('style','display:none')
    var highscores = document.querySelector('#scores')
    highscores.setAttribute('style','display:none')
    var scoreSubmit = document.querySelector('#submit')
    var scoreClear = document.querySelector('#clear')
    var homeScreen = document.querySelector('#homeScreen')
    var scoreP = document.querySelector('#viewScores')
    var showHighScores = document.querySelector('#showHighscores')
    var gameOver = document.querySelector('#gameOver')
    showHighScores.setAttribute('style','display:none')
    var currentQ;
    var savedScores = []
    var secondsLeft;
    var score = 0
    var quizSection = document.querySelector('.quiz')
    var initials = document.querySelector('#initials')
    // quizSection.setAttribute('style','display:none')

    //event listner on the start button which will then set up the quiz layout,start the timer,resets all tracked variables and then calls the render question function to get the first question.
    startGame.addEventListener("click",function(){
        if(!isPlaying){
            isPlaying=true;
            quizSection.setAttribute('style','display:flex')
            homeScreen.setAttribute('style','display:none')
            showHighScores.setAttribute('style','display:none')
            feedback.setAttribute('style','display:flex')
            secondsLeft = 60
            currentQ = 0
            quizLayout()
            renderQ(currentQ)
            // Game()
             //start timer
            countdownTimer = setInterval(function(){
                secondsLeft--;
                //display counterdown on screen
                timerH3.textContent='time left: ' + secondsLeft
                if(secondsLeft<=0){
                    //if time runs out, lose
                    clearInterval(countdownTimer)
                    // timerH3.textContent = "Times Up"
                    endgame()
                    isPlaying=false
                }
            },1000)
        }
        })
    
    //listener to which multiple choice the user selected and checks to see if that answer matches the given answer in the questions objects and then calls the renderquestion function to get the next question
    answerBox.addEventListener("click", function(event) {
            var element = event.target;
        if(secondsLeft != 0 && isPlaying != false){
            if (element.matches("#choice")) {
                var answer = element.getAttribute("data-answer");
                if(answer === questions[currentQ].correct){
                    feedback.textContent = 'Correct'
                    currentQ++
                    renderQ(currentQ)
                
                }else{
                    feedback.textContent = 'Incorrect'
                    secondsLeft = secondsLeft - 5
                    timerH3.textContent= 'time left: ' + secondsLeft
                    currentQ++
                    renderQ(currentQ)
                }
            }
        }else{
            // timerH3.textContent = "End of Quiz"
            isPlaying=false
            endgame()
            }
        }) 

    //function that puts all the text for the questions and the multiple choice into thier box so that the next questions is displayed
    function renderQ(index){
        if(index < questions.length){
            questionH3.textContent = questions[index].question
            answerBox.children.item(0).textContent = 'A.' + questions[index].answer1
            answerBox.children.item(1).textContent = 'B.' + questions[index].answer2
            answerBox.children.item(2).textContent = 'C.' + questions[index].answer3
            answerBox.children.item(3).textContent = 'D.' + questions[index].answer4
            
            
        }else{
            isPlaying = false
            currentQ = 0
            endgame()
        }
    }

    //function that changes the layout and saves the score once the game is over by either timer ending or all questions answered
    function endgame(){
        isPlaying = false
        score = secondsLeft
        gameOver.textContent = 'Quiz Complete! your score was: ' + score
        clearInterval(countdownTimer)
        // timerH3.textContent = "End of Quiz"
        quizSection.setAttribute('style','display:none')
        highscores.setAttribute('style','display:block')
        feedback.textContent = ''
        choiceBox.setAttribute('style','display:none')
        answerBox.setAttribute('style','display:none')
        timerH3.setAttribute('style','display:none')
        
        
    }

    scoreSubmit.addEventListener("click", function() {
        
        var namedScore = initials.value + ": " + score
        savedScores = JSON.parse(localStorage.getItem("highscores"))||[]
        savedScores.push(namedScore)
        localStorage.setItem("highscores", JSON.stringify(savedScores))
        storageScore = JSON.parse(localStorage.getItem('highscores'))
        // scoreP.setAttribute('style','display:block')
        scoreP.textContent = 'HighScores ' + storageScore.join(' ')
        initials.value = ''
    })
    
    
    document.querySelector("#highscores").addEventListener("click",function(){
        if(!isPlaying){
            highscores.setAttribute('style','display:none')
            homeScreen.setAttribute('style','display:none')
            showHighScores.setAttribute('style','display:flex')
            storageScore = JSON.parse(localStorage.getItem('highscores'))||[]
            console.log(typeof storageScore)
            showHighScores.textContent = 'HighScores ' + storageScore.join(' ')
        
        }
    })
    //listener for clear button to be clicked and then clears local storage
    scoreClear.addEventListener("click",function(){
            localStorage.clear()
            storageScore = JSON.parse(localStorage.getItem('highscores'))||[]
            scoreP.textContent = 'HighScores ' + storageScore.join(' ')
    })

    //sets up the layout for the quiz to be called once start is pressed
    function quizLayout(){
        choiceBox.setAttribute('style','display:flex')
        answerBox.setAttribute('style','display:flex')
        highscores.setAttribute('style','display:none')
        timerH3.setAttribute('style','display:flex')
    }



