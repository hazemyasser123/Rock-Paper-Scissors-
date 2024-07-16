const RockImg = document.getElementById("rock")
const PaperImg = document.getElementById("paper")
const scissorsImg = document.getElementById("scissors")
let userImg = document.getElementById("userImg")
let botImg = document.getElementById("BotImg")
const DisplayResault = document.getElementById("resault")
let UserImgSpan = document.getElementById("userResault")
let BotImgSpan = document.getElementById("botResault")
let RockOption = document.getElementById("RockOption");
let PaperOption = document.getElementById("PaperOption");
let ScissorsOption = document.getElementById("ScissorsOption");


let rock = false;
let paper = false;
let scissors = false;


 function IsRock() {
    rock = true;
    DisplayResault.textContent = "WAIT!!"
    // console.log(RockOption)
    RockOption.onclick = null;
    PaperOption.onclick = null;
    ScissorsOption.onclick = null;
    botImg.src = "rock.png";
    userImg.src = "rock.png";

    Game();

     setTimeout(() => {
        
    UserImgSpan.classList.remove("UserAnimation");
    BotImgSpan.classList.remove("BotAnimation");

    RockOption.onclick = IsRock;
    PaperOption.onclick = IsPaper;
    ScissorsOption.onclick = IsScissors;
    }, 1400);
    rock = false;
}
 function IsPaper() {
    paper = true;
    DisplayResault.textContent = "WAIT!!"
    RockOption.onclick = null;
    PaperOption.onclick = null;
    ScissorsOption.onclick = null;
    botImg.src = "rock.png";
    userImg.src = "rock.png";
    Game();

     setTimeout(() => {
        
    UserImgSpan.classList.remove("UserAnimation");
    BotImgSpan.classList.remove("BotAnimation");
    RockOption.onclick = IsRock;
    PaperOption.onclick = IsPaper;
    ScissorsOption.onclick = IsScissors;
    }, 1400);
    paper = false;
}
 function IsScissors() {
    scissors = true;
    DisplayResault.textContent = "WAIT!!"
    RockOption.onclick = null;
    PaperOption.onclick = null;
    ScissorsOption.onclick = null;
    botImg.src = "rock.png";
    userImg.src = "rock.png";
    Game();

     setTimeout(() => {
        
    UserImgSpan.classList.remove("UserAnimation");
    BotImgSpan.classList.remove("BotAnimation");
    RockOption.onclick = IsRock;
    PaperOption.onclick = IsPaper;
    ScissorsOption.onclick = IsScissors;
    }, 1400);
    scissors = false;
}

async function Game() {
    UserImgSpan.classList.add("UserAnimation");
    BotImgSpan.classList.add("BotAnimation");
    let BotNumber = Math.floor(Math.random() * 3) + 1;
    let BotChoice = null;
    let UserChoice = null;
    if(BotNumber === 1){
        setTimeout(() => {
            
            botImg.src = "rock.png";
        }, 1400);
        BotChoice = "rock";
    } else if(BotNumber === 2){
        setTimeout(() => {
            
            botImg.src = "paper.png";
        }, 1400);
        BotChoice = "paper";
    } else{
        setTimeout(() => {
            
            botImg.src = "scissors.png";
        }, 1400);
        BotChoice = "scissors";
    }
    if(rock === true)
    {
        setTimeout(() => {
            
            userImg.src = "rock.png";
        }, 1400);
        UserChoice = "rock";
    }
    else if(paper === true){
        setTimeout(() => {
            
            userImg.src = "paper.png";
        }, 1400);
        UserChoice = "paper";
    }
    else if(scissors === true){
        setTimeout(() => {
            
            userImg.src = "scissors.png";
        }, 1400);
        UserChoice = "scissors";
    }
     setTimeout(() => {
        if(BotChoice === UserChoice){
            DisplayResault.textContent = "DRAW!!"
        } 
        else if(UserChoice === "rock" &&BotChoice === "scissors" ){
            DisplayResault.textContent = "YOU WON!!"
        }
        else if(UserChoice === "paper" &&BotChoice === "rock" ){
            DisplayResault.textContent = "YOU WON!!"
        }
        else if(UserChoice === "scissors" &&BotChoice === "paper" ){
            DisplayResault.textContent = "YOU WON!!"
        } 
        else if(UserChoice === "scissors" && BotChoice === "rock" ){
            DisplayResault.textContent = "BOT WON!!"
        } 
        else if(UserChoice === "paper" && BotChoice === "scissors" ){
            DisplayResault.textContent = "BOT WON!!"
        } 
        else if(UserChoice === "rock" && BotChoice === "paper" ){
            DisplayResault.textContent = "BOT WON!!"
        } 
        
    }, 1400);
        
    

}