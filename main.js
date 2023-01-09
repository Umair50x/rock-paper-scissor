
/* 

create a rock paper scissors game played on browser's console

first we need to take input from the user
the input should be case-insensitive


since We are going to play against the computer
we need a function to return a rock, paper or scissor for computer
this function will be called 'computerChoice'

we need another function to play one round of the game
this function will take two parameters; one for the player and one for the computer
and return the result of the match round
we'll call this function 'playRound'

Afterwards, we need another function we'll call 'game'
this function is going to let us play 5 times and keep track of the score
and outputs the result of the matches

*/


//take input from the user/player
var rps = prompt("Rock, paper or scissor?");

//random computer choice
function computerChoice () {
    let choiceArray = ['rock', 'paper', 'scissor']; 
    //randomly take one string from the three options
    let randomChoice = Math.floor(Math.random() * choiceArray.length)
    console.log(choiceArray[randomChoice]);
    //execute the random selector inside the array to return a choice
    return choiceArray[randomChoice];
}

// computerChoice();

//one round of the game
function playRound (playerSelection) {
    
        const computer_Choice = computerChoice();
        playerSelection = rps;
        if (playerSelection === computer_Choice) {

            return "Match Tied. Play again.";
        } else if (playerSelection == "rock" && computer_Choice === "scissor") {

            return "You win! Rock thrashed scissor.";
        } else if (playerSelection == "paper" && computer_Choice === "rock") {

            return "You win! Rock was contained by paper.";
        } else if (playerSelection == "scissor" && computer_Choice === "paper") {

            return "You win! Scissor cut paper.";
        } else {

            return `You lose! ${computer_Choice} beat ${playerSelection}`;
        }
}

console.log(playRound());


