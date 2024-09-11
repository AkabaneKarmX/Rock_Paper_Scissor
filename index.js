const gameScores = JSON.parse(localStorage.getItem('scores')) || {Wins: 0, Loses: 0, Ties: 0};
displayGameScores();

function pickComputerMoves() {
   let computerMove = '';
   const randomNumber = Math.random();

   if (randomNumber > 0 && randomNumber < 1 / 3) {
      computerMove = 'Rock';
   }
   else if (randomNumber > 1 / 3 && randomNumber < 2/ 3) {
      computerMove = 'Paper';
   }
   else if (randomNumber > 2 / 3 && randomNumber < 1) {
      computerMove = 'Scissors';
   }

   return computerMove;
};

function mainGameFunction(playerMove) {
   let computerMove = pickComputerMoves();
   let gameResult = '';

   if (playerMove === 'Rock') {
      switch(computerMove) {
         case 'Rock':
            gameResult = 'Tie';
            break;
         case 'Paper':
            gameResult = 'You Lose';
            break;
         case 'Scissors':
            gameResult = 'You Win';
            break;
      };

   }
   else if (playerMove === 'Paper') {
      switch(computerMove) {
         case 'Rock':
            gameResult = 'You Win';
            break;
         case 'Paper':
            gameResult = 'Tie';
            break;
         case 'Scissors':
            gameResult = 'You Lose';
            break;
      };

   }
   else if (playerMove === 'Scissors') {
      switch(computerMove) {
         case 'Rock':
            gameResult = 'You Lose';
            break;
         case 'Paper':
            gameResult = 'You Win';
            break;
         case 'Scissors':
            gameResult = 'Tie';
            break;
      }

   }

   if (gameResult === 'You Win') {
      gameScores.Wins += 1;
   }
   else if (gameResult === 'You Lose') {
      gameScores.Loses += 1;
   }
   else if (gameResult === 'Tie') {
      gameScores.Ties += 1;
   }

   displayGameScores();
   document.getElementById('js-game-moves').innerHTML = `PlayerMove: ${playerMove} - ComputerMove: ${computerMove}`;
   document.getElementById('js-game-result').innerHTML = `${gameResult}`;
   localStorage.setItem('scores', JSON.stringify(gameScores));

}

function displayGameScores() {
   document.getElementById('js-game-scores').innerHTML = `Wins: ${gameScores.Wins}. Loses: ${gameScores.Loses}. Ties: ${gameScores.Ties}`;
};

const rockButton = document.getElementById('js-rock-button');
const paperButton = document.getElementById('js-paper-button');
const scissorsButton = document.getElementById('js-scissors-button');
const resetButton = document.getElementById('js-reset-button');

rockButton.addEventListener('click', function() {
   mainGameFunction('Rock');
});

paperButton.addEventListener('click', function() {
   mainGameFunction('Paper');
});

scissorsButton.addEventListener('click', function() {
   mainGameFunction('Scissors');
});

resetButton.addEventListener('click', function() {
   gameScores.Wins = 0;
   gameScores.Loses = 0;
   gameScores.Ties = 0;
   localStorage.removeItem('scores');
   displayGameScores();
});