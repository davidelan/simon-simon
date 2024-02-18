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

