// colors for squares
// var colors = ["rgb(255, 0, 0)",
//           "rgb(255, 255, 0)",
//           "rgb(0, 255, 0)",
//           "rgb(0, 255, 255)",
//           "rgb(0, 0, 255)",
//           "rgb(255, 0, 255)"];

var colors = generateRandomColors(6);

// picked color
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy")
var hardButton = document.querySelector("#hard")
var numSquares = 6;

easyButton.addEventListener("click", function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#232323";  
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
})
hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "#232323";  
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
})

// reset
resetButton.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        // colors
        squares[i].style.backgroundColor = colors[i];
        h1.style.backgroundColor = "#232323";  
}})

colorDisplay.textContent = pickedColor;

// squares
for(var i = 0; i < squares.length; i++) {
    // colors
    squares[i].style.backgroundColor = colors[i];
    // event listeners
    squares[i].addEventListener("click", function(){
        // grab color of clicked square and compare to picked color
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}

function pickColor(){
    // pick random number 0-5
    // math.random
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        randomColor = generateColor();
        arr.push(randomColor);
    }
    return arr;
}

function generateColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
// get random colors
// assign to squares
// click squares
// if wrong, hide
// if right, confirm
