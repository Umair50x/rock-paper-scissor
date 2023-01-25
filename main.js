
function computerChoice () {    
    let choiceArray = ['rock', 'paper', 'scissors']; 
    let randomChoice = Math.floor(Math.random() * choiceArray.length)
    return choiceArray[randomChoice];
}

//one round of the game rock paper scissors
function playRound (player_selection, computer_choice) {

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
}

//the full game for i amount of times 
function game() {

    //explain here why initialized the variales
    let userWins = 0;
    let computerWins = 0;
    let ties = 0;
    let rounds = 5;

    for ( let i = 1; i <= rounds; i++ ) {

        let player_selection = prompt('Round ' + i + ': Rock, Paper or Scissors?', '').toLowerCase();
        let computer_choice = computerChoice().toLowerCase();

        let result = playRound(player_selection, computer_choice);

        if (result.indexOf('win!') !== -1 ) {
            userWins++;
        } else if ( result.indexOf('lose!') !== -1 ) {
            computerWins++;
        } else if ( result.indexOf('tied!') !== -1 ) {
            ties++;
        console.log(result);
    }
    console.log('Player wins: ' + userWins);
    console.log('Computer wins: ' + computerWins);
    console.log('Ties: ' + ties);
    
    if ( userWins > computerWins && userWins > ties) {
        console.log('You won the game.');
    } else if ( computerWins > userWins && computerWins > ties ) {
        console.log('You lost the game to Computer.');
    } else {
        console.log('Game tied. Play again.');
    }
    //score comparison logic needs to be refined here for several different test cases.

    console.log();
}

console.log(game());

