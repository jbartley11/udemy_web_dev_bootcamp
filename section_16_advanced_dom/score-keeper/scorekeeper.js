// alert("Connected!");

// use boolean to manage game state
var gameOver = false;
var winningScore = 5;

// get buttons
var btnP1 = document.querySelector("#playerOne");
var btnP2 = document.querySelector("#playerTwo");
var btnReset = document.querySelector("#reset");

// get input
var input = document.querySelector("input");

// scoreboard
var scoreboardP1 = document.querySelector("#playerOneScore");
var scoreboardP2 = document.querySelector("#playerTwoScore");

// scores
var scoreP1 = 0;
var scoreP2 = 0;

// winning score
var winningScoreDisplay = document.querySelector("#winningScore")
winningScoreDisplay.textContent = winningScore;

// check if there is a winner
var checkScore = function(playerScore){
    if(playerScore === winningScore) {
        gameOver = true;
        console.log("Game Over!");
    }
}

// listener for playerOne button
btnP1.addEventListener("click", function(){
    if(!gameOver) {
        // add one to score
        scoreP1++;
        checkScore(scoreP1);
        // change scoreboard text
        scoreboardP1.textContent = scoreP1;
        // check to see if winner
        if(scoreP1 === winningScore){
            scoreboardP1.classList.add("green");
        }
    }
});

// listener for playerTwo button
btnP2.addEventListener("click", function(){
    if(!gameOver) {
        // add one to score
        scoreP2++;
        checkScore(scoreP2);
        // change scoreboard text
        scoreboardP2.textContent = scoreP2;
        // check to see if winner
        if(scoreP2 === winningScore){
            scoreboardP2.classList.add("green");
        }
    }
});

// listener for reset button
btnReset.addEventListener("click", function() {
    reset();

});

function reset() {
    // reset score variables
    scoreP1 = 0;
    scoreP2 = 0;
    // reset scoreboard text
    scoreboardP1.textContent = scoreP1;
    scoreboardP2.textContent = scoreP2;
    // remove green color from winner
    scoreboardP1.classList.remove("green");
    scoreboardP2.classList.remove("green");
    // reset game state to active
    gameOver = false;
}

// listener for input
// click won't work when entering numbers in
// input is in string format, must convert to number
input.addEventListener("change", function(){
    winningScore = Number(input.value);
    winningScoreDisplay.textContent = winningScore;
    reset()
})