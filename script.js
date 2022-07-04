


function game()
{
var roundCounter = 0;

var playerscore = 0;

var computerScore = 0;

while ( computerScore < 3 && playerscore < 3)
{
let playerSelection = prompt('Rock,Paper, or Scissors')

let result = playerSelection.toUpperCase();

var ComputerSelection = computerPlay();

function computerPlay(){

var array= ["Rock", "Paper", "Scissors"];

const randomIndex = Math.floor(Math.random() * array.length);

const item= array[randomIndex];

return item;

}

function playRound(result, ComputerSelection) {
    if
        (result === "ROCK" && ComputerSelection === "Paper"){
        console.log ("Lost"); computerScore ++; roundCounter ++;
        }else if
        (result === "ROCK" && ComputerSelection==="Scissors"){
        console.log("Win"); playerscore ++; roundCounter ++;
        }else if
        (result === "ROCK" && ComputerSelection==="Rock")
        {console.log("Draw");
        }else if 
        (result === "SCISSORS" && ComputerSelection === "Paper")
        {console.log ("Win"); playerscore ++; roundCounter ++;
        }else if
        (result === "SCISSORS" && ComputerSelection==="Scissors"){
        console.log("Draw");
        }else if
        (result === "SCISSORS" && ComputerSelection==="Rock"){
        console.log("Lost"); computerScore ++; roundCounter ++;
        }else if 
        (result === "PAPER" && ComputerSelection === "Paper"){
        console.log ("Draw"); 
        }else if
        (result === "PAPER" && ComputerSelection==="Scissors"){
        console.log("Lost"); computerScore ++; roundCounter ++;
        }else if
        (result === "PAPER" && ComputerSelection==="Rock"){
        (console.log("Win")); playerscore ++; roundCounter ++;
        }else 
        (alert("Error"))
    }
    playRound(result,ComputerSelection);
    console.log("Round " + roundCounter);
    console.log(playerscore);
    console.log(computerScore);
}
    if
    (playerscore === 3 ) {console.log("you win");}
    else if 
    (playerscore === computerScore) {console.log("tie");}
    else if
    (computerScore === 3 ){console.log("Better luck next time");}}
  
   game();
