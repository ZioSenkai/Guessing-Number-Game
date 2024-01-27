'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// document.querySelector('.number').textContent = secretNumber;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    // When the player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'You won! 🏆';
    displayMessage('You won! 🏆');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '25rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When the player guess wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'The number is lower' : 'The number is higher';
      displayMessage(
        guess > secretNumber ? 'The number is lower' : 'The number is higher'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   'You lost the game (┬┬﹏┬┬)';
      displayMessage('You lost the game (┬┬﹏┬┬)');
      document.querySelector('.score').textContent = 0;
    }
  }

  // Refactoring the code here so it will take less line and more easy to maintaince and change in the future if need :D
  //   // When the nummber is too low
  //   else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'The number is lower';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'You lost the game (┬┬﹏┬┬)';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When the number is too high
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'The number is higher';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'You lost the game (┬┬﹏┬┬)';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }

  if (guess > 20 || guess < 1) {
    // document.querySelector('.message').textContent =
    //   'You must choose a number between 1 to 20';
    displayMessage('You must choose a number between 1 to 20');
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.number').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
});
