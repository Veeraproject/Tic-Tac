console.log("welcome to tic toc");
let music=new Audio("./Js/Assests/music.mp3");
let gameoverM=new Audio("./Js/Assests/gameover.mp3");
let audioTurn=new Audio("./Js/Assests/ting.mp3");
let turn = "X"
let gameover = false;

//function to chnage the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}




const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if( (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "" ) )
        
        {
            let wonLose = ""
            let val = "0"
            if(boxtext[e[0]].innerText == "0"){
                wonLose = "Won"
            }else{
                wonLose = "Lose"
            }
            document.querySelector(".info").innerText =
            "GAME OVER! " + val + wonLose;
          gameover = true;
          document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px"; // Adjust image size as needed
          gameoverM.play();
        
             
      // Update message with "Better luck next time" for the loser (moved inside the if block)
         turn === "X" ? "O" : "X";
        //  console.log(loser);
        document.querySelector(".info").innerText += ` Better luck next time, ${turn}`;

    } 
          
   
   
})
}

//Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
  let boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', (e) => {
    if (boxtext.innerText === '') {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play(); // Play sound on turn change
      checkwin();
      if (!gameover) {
        document.querySelector(".info").innerText = "Turn for " + turn;
     } 
    }
  });
});


//Resert button
document.getElementById("reset").addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
      element.innerText = "";
    });
    turn = "X";
    gameover = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

});    
