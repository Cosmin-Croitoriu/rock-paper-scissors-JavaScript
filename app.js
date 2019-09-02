var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board");
const result_div_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  var randomComputerChoice = Math.floor(Math.random() * 3);
  return choices[randomComputerChoice];
}

function changeNames(letter) {
  if(letter === 'r'){ return "Rock"}
  else if(letter === 'p'){ return "Paper"}
  else if(letter === 's'){ return "Scissors"}
}

function win(userChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div_p.innerHTML = changeNames(userChoice) + " beats " + changeNames(computerChoice) + ". You win!";
}

function lose(userChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_div_p.innerHTML = changeNames(userChoice) + " is beaten by " + changeNames(computerChoice) + ". You lose!";
}

function draw(userChoice, computerChoice){
  result_div_p.innerHTML = changeNames(userChoice) + " is equal with " + changeNames(computerChoice) + ". It's a Draw!";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice) {
    case 'rs':
    case 'sp':
    case 'pr':
     win(userChoice, computerChoice);
     break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'ss':
    case 'pp':
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', function(){
    game("r");
  })

  paper_div.addEventListener('click', function(){
    game("p");
  })

  scissors_div.addEventListener('click', function(){
    game("s");
  })
}

main();

