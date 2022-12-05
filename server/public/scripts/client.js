const player1results = require("../../modules/player1results");

$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!");
  $('#submit-btn').on('click', player1Guesses);
  $('#submit-btn').on('click', player2Guesses);
  $('#submit-btn').on('click', player3Guesses);
}

let randomNumber = Math.floor(Math.random() * (1 + 25- 1) + 1);
console.log(randomNumber)

// alternate code for randomization vvv
  // int randomWithMathRandom = (int) ((Math.random() * (max - min)) + min);

function player1Guesses() {
  console.log('in player1results function');
  let newGuess = $('#player-one-guesses').val();
  $.ajax({
      method: 'POST',
      url: '/player1Guesses',
      data: newGuess,
  }).then(function(response){
      console.log('post request response', response);
      getPlayerOneGuesses();
  }).catch(function(error){
      alert(error.responseText);
  });
}  