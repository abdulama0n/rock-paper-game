let userScore = 0;
let compScore = 0;

let gameDraw = function(){
    msg.innerText="game draw"

}

const showWing = (userWin) => {
    if(userWin){
        userScore ++;
       userscorebord.innerText=userScore;
       msg.innerText="congrats you WIN!"

     }
     else
    
    {
        compScore++
        compscorebord.innerText = compScore;
        msg.innerText="YOU lost!"

    }
    }



let choices= document.querySelectorAll(".choess")
let userscorebord=document.querySelector("#user")
let compscorebord=document.querySelector("#comp")

let msg=document.querySelector(".msg")
 let playGame = (userChs) => {



console.log("user choice =" ,userChs);
 const computerchee = computerch();
console.log("computer choice is =",computerchee);

 if ( userChs === computerchee){
   gameDraw(); 
 }
else{
    let userWin = true ;
    if(userChs === "rock"){
       userWin = computerchee == "paper" ? false : true;

    } 
    else if (userChs === "paper") {
        userWin = computerchee == "scissors" ? false : true;
    }
    else
    {
        userWin = computerchee == "rock" ? false : true;
    }
    showWing(userWin);
};
 
};

  const computerch = () => {
      
    const comchs = ["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return comchs[randIdx];
    
    }


 choices.forEach((choess) => {
     choess.addEventListener("click",function(){

     var userChs = choess.getAttribute("id");

     playGame(userChs);
     computerch()
     
     });
     
     
 });