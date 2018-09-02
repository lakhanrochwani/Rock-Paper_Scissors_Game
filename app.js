var userScore = 0;
var computerScore = 0;
var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("PC-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");
var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");
function getComputerchoice(){
  var choices =['r','p','s'];
  var randomNumber = (Math.floor(Math.random()*3));
  return choices[randomNumber];
}
function convertToWord(letter) {
  if(letter == "r") return "Rock";
  if(letter == "s") return "Scissors";
  if(letter == "p") return "Paper";
}
function wins(userchoice,computerchoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML =computerScore;
  var userWord = "user".fontsize(3).sub();
  var compWord = "comp".fontsize(3).sub();
  result_p .innerHTML = `${convertToWord(userchoice)} ${userWord} beats ${convertToWord(computerchoice)} ${compWord} . You win &#9996;.`;
  document.getElementById(userchoice).classList.add('green-glow');
  setTimeout(function(){document.getElementById(userchoice).classList.remove('green-glow')},500);
}
function lose(userchoice,computerchoice){
  computerScore++;
  computerScore_span.innerHTML =computerScore;
  userScore_span.innerHTML = userScore;
  var userWord = "user".fontsize(3).sub();
  var compWord = "comp".fontsize(3).sub();
  result_p .innerHTML = `${convertToWord(userchoice)} ${userWord} loses to ${convertToWord(computerchoice)} ${compWord} . You lost &#9785;.`;
  document.getElementById(userchoice).classList.add('red-glow');
  setTimeout(function(){document.getElementById(userchoice).classList.remove('red-glow')},500);
}
function draw(userchoice,computerchoice){
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML =computerScore;
  var userWord = "user".fontsize(3).sub();
  var compWord = "comp".fontsize(3).sub();
  result_p .innerHTML = `${convertToWord(userchoice)} ${userWord} similar to ${convertToWord(computerchoice)} ${compWord} . Game tied &#9834;.`;
  document.getElementById(userchoice).classList.add('gray-glow');
  setTimeout(function(){document.getElementById(userchoice).classList.remove('gray-glow')},500);

}
function game(userchoice){
  var computerchoice = getComputerchoice();
  switch(userchoice + computerchoice){
    case "rs":
    case "sp":
    case "pr":
      wins(userchoice,computerchoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      lose(userchoice,computerchoice);
      break;
    case "ss":
    case "pp":
    case "rr":
      draw(userchoice,computerchoice);
      break;
  }
}
game("c");
// any random alphabet inside game()

function main(){
rock_div.addEventListener('click',function(){
  game("r");
})
paper_div.addEventListener('click',function(){
  game("p");
})
scissors_div.addEventListener('click',function(){
  game("s");
})
}
main();
