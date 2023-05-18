let wins = 0;
let ties = 0;
let losses = 0;

// Create users options of choice
let options = ['R', 'P', 'S'];

let playTheGame = () => {
  let useChoice = window.prompt('Enter: R, P, or S');

  // if the user does'nt make a choice we will return/ end the game
  if (!useChoice) {
    return;
  }

  // let's convert the user's choice to upperCase regardless of how the enter R P S
  useChoice = useChoice.toUpperCase();

  // lets use Math.floor and Math.random to choice random index from the options array for the computer.
  let randomIndex = Math.floor(Math.random() * options.length);
  let computerChoice = options[randomIndex];

  window.alert('The Computer Choice ' + computerChoice);

  // If the user's choice is the same as the computer lets increment ties
  if (useChoice === computerChoice) {
    ties++;
    window.alert("it's a tie!");
  } else if (
    (useChoice === 'R' && computerChoice === 'S') ||
    (useChoice === 'P' && computerChoice === 'R') ||
    (useChoice === 'S' && computerChoice === 'P')
  ) {
    wins++;
    window.alert('You Won!');
    // If above conditions failed, assume player lost
  } else {
    losses++;
    window.alert('You lost!');
  }

  // lets print stats with line breaks
  window.alert('Stats:\n Wins: ' + wins + '\nLosses: ' + losses + '\nTies: ' + ties);

  let playAgain = window.confirm('Play Again?');
  if (playAgain) {
    playTheGame()
  }
};
// Run the game for the first time
playTheGame()
