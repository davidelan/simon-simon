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