  
    
function restart(){
    let playAgain= prompt("Play again? Yes or No");
    let mayBe = playAgain.toUpperCase();
    if(
        mayBe === "YES"
        ){
        game();
        }
    else if(
        mayBe === "NO"
        ){ 
        alert ("Okay");
        }
}

 


    
    function game(){
        
    var roundCounter = 0;

    var playerscore = 0;

    var computerScore = 0;
    
    const userChoiceDisplay = document.getElementById('playerChoice')
    const computerChoiceDisplay = document.getElementById('computerChoice')
    const possibleChoices = document.querySelectorAll('button')
    
    function computerPlay(){

        var array = ["Rock", "Paper", "Scissors"];

        const randomIndex = Math.floor(Math.random() * array.length);

        const item= array[randomIndex];

        item.toString();

        computerChoiceDisplay.innerHTML = item;        

}

    possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>
    {   userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        computerPlay();
        playRound();
    }))
   
     
 
    while(computerScore < 1 && playerscore < 1)
{       

        let result = userChoiceDisplay.toString().toUpperCase();

        var ComputerSelection = item;
        
     
   

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
        }
    }
}
    if
    (playerscore === 3 ) {console.log("you win"); restart();} 
    else if 
    (playerscore === computerScore) {console.log("tie"); restart();;}
    else if
    (computerScore === 3 ){console.log("Better luck next time"); restart();;}
    
    }
    game();