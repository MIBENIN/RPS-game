const playingBtns=document.querySelectorAll(".rpsbtn");
const ComputerScore=document.getElementById("computerScore");
const PlayerScore=document.getElementById("userScore");
let userSelect=document.getElementById("userSelect");
let compSelect=document.getElementById("computerSelect");


const scores={computerScored:0,playerScored:0};

const getcomputerChoice=()=>{
    const gameElement=["rock","paper","scissor"];
    let compChoice=Math.floor(Math.random()*gameElement.length);
    return gameElement[compChoice];
}

const onClickRPS=(playerChoice)=>{
    userSelect.innerHTML=playerChoice;
    let computerChoice=getcomputerChoice();
    compSelect.innerHTML=computerChoice;
    let getScores=getResults(playerChoice,computerChoice);
    showResults(getScores);
} 

const getResults=(playerChoice,computerChoice)=>{
    let score;
    if(playerChoice == computerChoice){
        score=0;
    }
    else if(playerChoice == "rock" && computerChoice == "paper"){
        score=1;
    }
    else if(playerChoice == "paper" && computerChoice == "rock"){
        score=1;
    }
    else if(playerChoice == "scissor" && computerChoice == "paper"){
        score=1;
    }
    else if(playerChoice == "rock" && computerChoice == "scissor"){
        score=1;
    }
    else{
        score=-1;
    }
    return score;
}

const showResults=(score)=>{
    if(score == 1){
        scores.playerScored+=1;
        scores.computerScored-=1;
    }
    else if(score == -1){
        scores.playerScored-=1;
        scores.computerScored+=1;
    }
    else{
        scores.playerScored=scores.playerScored;
        scores.computerScored=scores.computerScored;
    }
    PlayerScore.innerHTML=scores.playerScored;
    ComputerScore.innerHTML=scores.computerScored;
}
const playGame=()=>{
    playingBtns.forEach(rpsbutton=>{
        rpsbutton.onclick=()=>onClickRPS(rpsbutton.value);
    })    
}

playGame();
