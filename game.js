let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw. Play again."
    msg.style.backgroundColor = "#673f54";
};

const showWinner =(userWin, Userchoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${Userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost. ${compChoice} beats  Your ${Userchoice}`;
        msg.style.backgroundColor = "Red";
    }
};

const playGame = (Userchoice) => {
    const compChoice = genCompChoice();

    if(Userchoice === compChoice) {
    drawGame();
    } else {
        let userWin = true;
        if(Userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (Userchoice === "paper"){
             userWin = compChoice === "scissors" ? false : true;
        } else {
          userWin = compChoice === "rock" ? false: true;
        }
        showWinner(userWin,Userchoice, compChoice);
    }
};



choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const Userchoice = choice.getAttribute("id");
        playGame(Userchoice);
    });
});
    
    
