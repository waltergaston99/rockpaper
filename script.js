function playRound(playerSelection, computerSelection){
    playerSelection=playerSelection.toLowerCase();
    computerSelection=computerSelection.toLowerCase();
    
    changeComputerItem(computerSelection);

    if(playerSelection==computerSelection){
        changeResult("Resutl: TIES! Both selected "+playerSelection);
        return "ties";
    }

    if(playerSelection=="rock"){
        if(computerSelection=="paper"){
            changeResult("Result: You Lose! "+playerSelection+"is beaten by "+computerSelection,"lose");
            return "lose";
        }
        if(computerSelection=="scissors"){
            changeResult("Result: You Win! "+ playerSelection+" beats "+computerSelection,"win");
            return "win";
        }
    }
    if(playerSelection=="paper"){
        if(computerSelection=="scissors"){
            changeResult("Result: You Lose! "+playerSelection+"is beaten by "+computerSelection,"lose");
            return "lose";
        }
        if(computerSelection=="rock"){
            changeResult("Result: You Win! "+ playerSelection+" beats "+computerSelection,"win");
            return "win";
        }
    }
    if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            changeResult("Result: You Lose! "+playerSelection+"is beaten by "+computerSelection,"lose");
            return "lose";
        }
        if(computerSelection=="paper"){
            changeResult("Result: You Win! "+ playerSelection+" beats "+computerSelection,"win");
            return "win";
        }
    }

}
function changeComputerItem(computerSelection){
    const computerItem = document.querySelector("#computerSelection");
    let newUrl="images/"+computerSelection+".png";
    computerItem.firstElementChild.src=newUrl;
    computerItem.lastElementChild.innerHTML=computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1);
}
function changeResult(text, result){
    let result_div = document.querySelector(".result");
    result_div.innerHTML=text;
    let winColor = "#abee85";
    let loseColor = "#f09595";
    if(result=="win"){
        result_div.style.color=winColor;
    }else{
        result_div.style.color=loseColor;
    }

}

function game(playerSelection){
    
    const selections = ["rock","paper", "scissors"];
    let posSelection = Math.floor(Math.random()*3);
    let computerSelection = selections[posSelection];
    let result = playRound(playerSelection,computerSelection);

    let playerWins_div = document.querySelector(".playerWins");
    let playerWins = parseInt(playerWins_div.innerHTML);

    let computerWins_div = document.querySelector(".computerWins");
    let computerWins = parseInt(computerWins_div.innerHTML);

    let playerCount_div = document.querySelector(".playerCount");
    let computerCount_div = document.querySelector(".computerCount");
    let playerCount = parseInt(playerCount_div.innerHTML);
    let computerCount = parseInt(computerCount_div.innerHTML);
    if(result=="win"){        
        playerWins++;
        if(playerWins>=5){
            playerWins=0;
            changeResult("YOU WIN THE BATTLE! Starting a new one","win");
            computerWins=0;
            playerCount++;
        }
        
    }
    if(result=="lose"){
        computerWins++;
        if(computerWins>=5){
            computerWins=0;
            changeResult("YOU LOSE THE BATTLE! Starting a new one","lose");
            playerWins=0;
            computerCount++;
        }
        playerWins_div.innerHTML=playerWins;
        computerWins_div.innerHTML=computerWins;
    }
    playerWins_div.innerHTML=playerWins;
    computerWins_div.innerHTML=computerWins;
    playerCount_div.innerHTML=playerCount;
    computerCount_div.innerHTML=computerCount;
    
}
for(let i = 0; i<5;i++){
    game();
}