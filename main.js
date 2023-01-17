
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

Afterwards, we need another function we'll call 'game()'
this function is going to let us play 5 times and keep track of the score
and outputs the result of the matches

pseudocode for game():
initialize three variables for computer win, player win and ties at 0 Zero.
    initiate a for() loop for a counter of 5
        place the prompt or any user input method, 
        use the functions of playround and computerchoice by either assigning them to new variables or if possible directly use them
        log the result to the console on every round while also calculate the wins and ties with counter variables
compare the counters and decide a winner
post the total results i.e. user wins, comp wins and ties.

*/

//random computer choice
function computerChoice () {

    // return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)]; do this in one line as told by ChatGPT; hehe
    
    let choiceArray = ['rock', 'paper', 'scissors']; 

    //randomly take one string from the three options
    let randomChoice = Math.floor(Math.random() * choiceArray.length)

    console.log('FYI the computer choice was' + ' ' + choiceArray[randomChoice]);// this is just to make sure

    //execute the random selector inside the array to return a choice
    return choiceArray[randomChoice]; //remember this is going to return an array
}

//one round of the game
function playRound (player_selection, computer_choice) {

        // const computer_Choice = computerChoice();
        // computer_choice = computer_choice.toLowerCase(); //lowercase only for consistency
        // player_selection = player_selection.toLowerCase();
        
        //if else if for comparison between the choices; Note: currently, the text needs to be accurately spelled.
        if ( player_selection === computer_choice) {
            return `Match tied! You both chose ${computer_choice}.`;
        } else if ( player_selection === 'rock' ) {
            if ( computer_choice === 'scissors' ) {
                return 'You win! your rock thrashed scissors.' ;
            } else {
                return 'You lose! Paper contained your rock.' ;
            }
        } else if ( player_selection === 'paper' ) {
            if ( computer_choice === 'rock' ) {
                return 'You win! Your Paper contained rock.' ;
            } else {
                return 'You lose! Scissors cut your paper.' ;
            }
        } else if ( player_selection === 'scissors' ) {
            if ( computer_choice === 'paper' ) {
                return 'You win! scissors cut paper.' ;
            } else {
                return 'You lose! Rock thrashed your scissors.' ;
            }
        } else {
            return 'Invalid choice. Please only select rock, paper or scissors.';
        }

        // if (player_selection === computer_choice) {
        //     return "Match Tied. Play again.";

        // } else if (player_selection === "rock" && computer_choice === "scissors") {
        //     return "You win! Rock thrashed scissors.";

        // } else if (player_selection === "paper" && computer_choice === "rock") {
        //     return "You win! Rock was contained by paper.";

        // } else if (player_selection === "scissors" && computer_choice === "paper") {
        //     return "You win! Scissor cut paper.";

        // } else {
        //     //in every other case it automatically makes you the loser.
        //     return `You lose! ${computer_choice} beat ${player_selection}`;
        // }

}

function game() {

        //initializing the counters
    let userWins = 0;
    let computerWins = 0;
    let ties = 0;
    let i = 0;

        //looping a single round several times to make a whole game
    for ( let i = 1; i <= 3; i++ ) {

        let player_selection = prompt('Round ' + i + ': Rock, Paper or Scissors?', '').toLowerCase();
        let computer_choice = computerChoice().toLowerCase();

            //a single round will be played and saved in the variale result
        let result = playRound(player_selection, computer_choice);
        
                //ifelse{} will find a particular word from the result of the ifelse{} of the playround() to decide & icrement the relevant counter

            if (result.indexOf('win!') !== -1 ) {
                userWins++;
            } else if ( result.indexOf('lose!') !== -1 ) {
                computerWins++;
            } else if ( result.indexOf('tied!') !== -1 ) {
                ties++;
            // } else {
            //     return 'none of the above.';    // may not work, try logging it to console
            // }
        }
        console.log(result);
    }
            //print the data to the console
        console.log('Player wins: ' + userWins);
        console.log('Computer wins: ' + computerWins);
        console.log('Ties: ' + ties);
        
            // two line ternary-checking decides the winner
        userWins > computerWins ? console.log(`You win! ${userWins} out of ${i} total rounds .`) : userWins < computerWins ? 
        console.log(`Computer won the game with ${computerWins} out of ${i} total rounds.`) : console.log(`Game tied with ${ties}.`);
        console.log();
}

console.log(game());






//take input from the user/player
// let player_selection = prompt("Rock, paper or scissors?", ""); 
// let computer_choice = computerChoice();

// console.log(playRound(player_selection, computer_choice));
// console.log('Your choice was' + ' ' + player_selection); //just to check any problem


