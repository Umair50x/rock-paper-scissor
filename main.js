
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

//random computer choice
function computerChoice () {

    // return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]; do this in one line as told by ChatGPT hehe
    
    let choiceArray = ['rock', 'paper', 'scissor']; 
    //randomly take one string from the three options
    let randomChoice = Math.floor(Math.random() * choiceArray.length)
    console.log(choiceArray[randomChoice]);// this is just to make sure
    //execute the random selector inside the array to return a choice
    return choiceArray[randomChoice];
}

//one round of the game
function playRound (playerSelection, computer_choice) {

        // const computer_Choice = computerChoice();
        computer_choice = computer_choice.toLowerCase();
        playerSelection = playerSelection.toLowerCase();
        //if else if for comparison between the choices; Note: currently, the text needs to be accurately spelled.
        if (playerSelection === computer_choice) {

            return "Match Tied. Play again.";
        } else if (playerSelection === "rock" && computer_choice === "scissor") {

            return "You win! Rock thrashed scissor.";
        } else if (playerSelection === "paper" && computer_choice === "rock") {

            return "You win! Rock was contained by paper.";
        } else if (playerSelection === "scissor" && computer_choice === "paper") {

            return "You win! Scissor cut paper.";
        } else {
            //in every other case it automatically makes you the loser.
            return `You lose! ${computer_choice} beat ${playerSelection}`;
        }
}

//take input from the user/player
let playerSelection = prompt("Rock, paper or scissor?"); 
let computer_choice = computerChoice();

console.log(playRound(playerSelection, computer_choice));


