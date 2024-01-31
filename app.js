let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const massage = document.querySelector("#msg ");

const compMassage = document.querySelector("#ShowImg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

let showImgs = (compChoice) => {
  if (compChoice === "rock") {
    compMassage.src = "rock.png";
  } else if (compChoice === "paper") {
    compMassage.src = "paper.png";
  } else {
    compMassage.src = "scissors.png";
  }
};



const drawGame  = () =>{
  console.log("game was draw")
  massage.innerText = "game was draw"
  massage.style.backgroundColor = "#081b31"
}

const showWinner = (userWin,userChoice,compChoice) =>{
  if(userWin){
    userScore++
    userScorePara.innerText = userScore
    // console.log("you win")
    massage.innerText = `you win! `;
    massage.style.backgroundColor = "green"
  
  }else{
    compScore++
    compScorePara.innerText = compScore
    // console.log("you lose")
    massage.innerText = `you lose  `;
    massage.style.backgroundColor = "red"
  }
}
const genComputerChoice = ()=>{
  const options = ["rock","paper","scissors"]
  const random = Math.floor(Math.random()*3)
  return options[random]

}

const playGame =(userChoice)=>{
  console.log("userChoice =",userChoice)
  const compChoice =genComputerChoice()

   showImgs(compChoice);
  
  console.log("compChoice =",compChoice)

  if(userChoice === compChoice){
    drawGame();

  }else{
    let userWin = true;
    if (userChoice === "rock"){
      userWin = compChoice === "paper" ? false : true;
    }else if(userChoice === "paper"){
      userWin = compChoice === "scissors" ? false : true;
    }else{
      userWin = compChoice === "rock" ? false : true ;
    }
    showWinner(userWin,userChoice,compChoice)
  }

  
}

choices.forEach((choice)=>{
  choice.addEventListener("click", ()=>{
    const userChoice = choice.getAttribute("id")
    
    playGame(userChoice)

  })
})
































