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
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    })
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
}}

function pickColor(){
    // pick random number 0-5
    // math.random
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(){
    
}
// get random colors
// assign to squares
// click squares
// if wrong, hide
// if right, confirm
