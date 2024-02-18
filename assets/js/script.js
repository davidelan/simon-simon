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

