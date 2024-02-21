let win;            // when win is true the player has passed all rounds
let illuminate;     // to assess flashing of colors 
let count;          // keeps count of rounds     
let correct;        // if true the player has clicked the right color
let randomSequence = []; // array that contains random colors order
let playerSequence = []; // array that keeps track of player clicked sequence
let winRound = 3;   // number of rounds to win game
let machineTurn;    // if true it's the computer turn
let flashInterval;  // contains the the setinterval() for the gameturn() function
let buzz = true;    // when true allow sounds associated with each color

// colors
const green = document.querySelector("#green");     // contains div id green from html page
const red = document.querySelector("#red");         // contains div id red from html page
const yellow = document.querySelector("#yellow");   // contains div id yellow from html page
const blue = document.querySelector("#blue");       // contains div id blue from html page

const counter = document.querySelector("#count");               // contains div id count from html page
const startButton = document.querySelector("#start-button");    // contains button id start-button from html page
const maxScore = document.querySelector("#max-score");          // contains div id max-score from html page

//* When the play button is pressed the play() function is called *//
startButton.addEventListener('click', (event) => {
    play();
});

//* Play function that initialises main variables and creates random sequence *//
function play() {
    console.log("play function started");
    win = false;
    randomSequence = [];
    playerSequence = [];
    illuminate = 0;
    count = 1;
    counter.innerHTML = 1;
    correct = true;
    machineTurn = true;

    /* for loop to generate n random numbers between 1 and 4 (the four colors)  */
    for (var i = 0; i < winRound; i++) {
      randomSequence.push(Math.floor(Math.random() * 4) + 1);
    }

    // sets interval to run gameTurn() every 800ms
    flashInterval = setInterval(gameTurn, 800);
    
    // creates eventListeners for each color button to detect button click
    red.addEventListener('click', redButton);
    green.addEventListener('click', greenButton);
    yellow.addEventListener('click', yellowButton);
    blue.addEventListener('click', blueButton);
}

// main function to determine machine or player turn + behaviour
function gameTurn() {

    if (illuminate == count) {
      clearInterval(flashInterval);
      machineTurn = false;
      clearColor();
    }
  
    if (machineTurn) {
      clearColor();
      setTimeout(() => {
        if (randomSequence[illuminate] == 1) redPlay();
        if (randomSequence[illuminate] == 2) greenPlay();
        if (randomSequence[illuminate] == 3) yellowPlay();
        if (randomSequence[illuminate] == 4) bluePlay();
        illuminate++;
      }, 200);
    }
  }

  // to bring buttons color back to base color
function clearColor() {
  green.style.backgroundColor = "darkgreen";
  red.style.backgroundColor = "darkred";
  yellow.style.backgroundColor = "goldenrod";
  blue.style.backgroundColor = "darkblue";
}

// function to to illuminate and play sound for green button
function greenPlay() {
  if (buzz) {
    let audio = document.getElementById("sound-green");
    audio.play();
  }
  buzz = true;
  green.style.backgroundColor = "lightgreen";
}

// function to to illuminate and play sound for red button
function redPlay() {
  if (buzz) {
    let audio = document.getElementById("sound-red");
    audio.play();
  }
  buzz = true;
  red.style.backgroundColor = "tomato";
}

// function to to illuminate and play sound for yellow button
function yellowPlay() {
  if (buzz) {
    let audio = document.getElementById("sound-yellow");
    audio.play();
  }
  buzz = true;
  yellow.style.backgroundColor = "yellow";
}

// function to to illuminate and play sound for blue button
function bluePlay() {
  if (buzz) {
    let audio = document.getElementById("sound-blue");
    audio.play();
  }
  buzz = true;
  blue.style.backgroundColor = "lightskyblue";
}

// function to manage behaviour when green button is clicked
function greenButton() {
  playerSequence.push(2);
  evaluate();
  buzz = true;
  greenPlay();
  if(!win) {
    setTimeout(() => {
      clearColor();
    }, 300);
  }
}

// function to manage behaviour when red button is clicked
function redButton() {
  playerSequence.push(1);
  evaluate();
  buzz = true;
  redPlay();
  if(!win) {
    setTimeout(() => {
      clearColor();
    }, 300);
  }
}

// function to manage behaviour when yellow button is clicked
function yellowButton() {
  playerSequence.push(3);
  evaluate();
  buzz = true;
  yellowPlay();
  if(!win) {
    setTimeout(() => {
      clearColor();
    }, 300);
  }
}

// function to manage behaviour when blue button is clicked
function blueButton() {
  playerSequence.push(4);
  evaluate();
  buzz = true;
  bluePlay();
  if(!win) {
    setTimeout(() => {
      clearColor();
    }, 300);
  }
}

// function to evaluate rounds and if player has lost or won 
function evaluate() {
  if (playerSequence[playerSequence.length - 1] !== randomSequence[playerSequence.length - 1]) {
    correct = false;
    }

  if (playerSequence.length == winRound && correct) {
    win = true;
    illuminateColor();
    setTimeout(() => {
      clearColor();
      endGame();
    }, 800);
  }

  if (correct == false) {
    illuminateColor();
    counter.innerHTML = "WRONG!";
    setTimeout(() => {
      counter.innerHTML = count;
      count--;
      clearColor();
      endGame();
    }, 800);
  }
  
  buzz = false;

  if (count == playerSequence.length && correct && !win) {
    playerSequence = [];
    machineTurn = true;
    illuminate = 0;
    count++;
    counter.innerHTML = count;
    flashInterval = setInterval(gameTurn, 800);
  }
}

// function which is called when the player has won or lost
function endGame() {
  clearInterval(flashInterval);
  
  if (win) {
      counter.innerHTML = "WIN!";
  } else {
      counter.innerHTML = "OVER";
  }

  if (count > maxScore.innerHTML) {
     maxScore.innerHTML = count; 
  }
  
  clearColor();
  
  // in order to prevent the user from being able to still click the buttons when game is over
  red.removeEventListener("click", redButton);
  green.removeEventListener("click", greenButton);
  yellow.removeEventListener("click", yellowButton);
  blue.removeEventListener("click", blueButton);
}
