var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){	
    setUpModeButtons();
    setUpSquares();
    reset();
}

//reset button
resetButton.addEventListener("click", function(){
  reset();
});

//mode buttons
function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++) {
      modeButtons[i].addEventListener("click", function(){
	  modeButtons[0].classList.remove("selected");
	  modeButtons[1].classList.remove("selected");
	  this.classList.add("selected");
	  //check and change mode
	  if(this.textContent === "Easy") {
	    numSquares = 3;
	  } else {
	    numSquares = 6;
	  }
	  //reset to chosen mode
	  reset();
	  });
    }
}

//squares
function setUpSquares(){
    for(var i = 0; i < squares.length; i++) {
	  //add click listeners to squares
	  squares[i].addEventListener("click", function(){
	  //grab color of clicked square
	  var clickedColor = this.style.background;
	  //compare color to pickedColor
	  if (clickedColor === pickedColor) {
	    messageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?"
		changeColors (clickedColor);
		h1.style.background = clickedColor;
	  } else {
		this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
	  }
	  });
    }
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function reset(){
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color
  pickedColor = pickColor();
  //change colorDisplay
  colorDisplay.textContent = pickedColor;
  //clear message and reset the button
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
  	if(colors[i]) {
  		squares[i].style.display = "block";
  		squares[i].style.background = colors[i];
  	} else {
  		squares[i].style.display = "none";
  	}
  }
  h1.style.background = "steelblue";
}

//generate array of num colors
function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

//generate a random color
function randomColor() {
	// pick a red from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0-255
	var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b +")";
}

//pick the color being searched
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}