function game(){   
    const resetButton = document.getElementsByClassName('reset')
    const userChoiceDisplay = document.getElementById('playerChoice')
    const computerChoiceDisplay = document.getElementById('computerChoice')
    const possibleChoices = document.querySelectorAll('button.play')
    const roundDisplay = document.getElementById('round')
    const computerScoreDisplay = document.getElementById('computerScore')
    const playerScoreDisplay = document.getElementById('playerScore')
    const consoleLog = document.getElementsByClassName('console')
    let computerChoice
    let result
    const choices = ['Rock', 'Paper', 'Scissors']
    var playerscore = 0;
    var computerScore = 0;
    var roundCounter = 0;

resetButton[0].addEventListener('click',reset)
function reset(e){
    console.log('reset');
    roundDisplay.innerHTML = roundCounter;
    computerScoreDisplay.innerHTML = computerScore;
    playerScoreDisplay.innerHTML = playerscore;

    game();
    
}
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',doSomething))
    
    function doSomething(e){  
        computerPlay();
        getResult();
        roundDisplay.innerHTML = roundCounter; 
        computerScoreDisplay.innerHTML = computerScore;
        playerScoreDisplay.innerHTML = playerscore; 
        result = e.target.id
        userChoiceDisplay.innerHTML = result
    if (playerscore === 5 || computerScore === 5){
        success();
        possibleChoices.forEach(possibleChoice => possibleChoice.removeEventListener('click',doSomething));
        resetButton[0].addEventListener('click',reset)
    
    }
    }
    
    function computerPlay(){

        const randomIndex = choices[Math.floor(Math.random() * choices.length)]
        computerChoice = randomIndex
        computerChoiceDisplay.innerHTML = computerChoice;
       
    }
    
    function getResult(){
        if
        (result === "Rock" && computerChoice === "Paper"){
        console.log ("Lost"); computerScore ++; roundCounter ++;
        }else if
        (result === "Rock" && computerChoice ==="Scissors"){
        console.log("Win"); playerscore ++; roundCounter ++;
        }else if
        (result === "Rock" && computerChoice ==="Rock")
        {console.log("Draw"); roundCounter ++;
        }else if 
        (result === "Scissors" && computerChoice === "Paper")
        {console.log ("Win"); playerscore ++; roundCounter ++;
        }else if
        (result === "Scissors" && computerChoice ==="Scissors"){
        console.log("Draw");roundCounter ++;
        }else if
        (result === "Scissors" && computerChoice ==="Rock"){
        console.log("Lost"); computerScore ++; roundCounter ++;
        }else if 
        (result === "Paper" && computerChoice === "Paper"){
        console.log ("Draw"); roundCounter ++;
        }else if
        (result === "Paper" && computerChoice ==="Scissors"){
        console.log("Lost"); computerScore ++; roundCounter ++;
        }else if
        (result === "Paper" && computerChoice ==="Rock"){
        (console.log("Win")); playerscore ++; roundCounter ++;
        }}
   
   
        function success(){
        if(
        playerscore = 5 ) {alert("you win"); 
    } 
        else if
        (computerScore = 5 ){alert("Better luck next time");
}}}
  game();