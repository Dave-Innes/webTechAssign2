// get elements
const reelOne = document.getElementById("reel1");
const reelTwo = document.getElementById("reel2");
const reelThree = document.getElementById("reel3");
const creditNum = document.getElementById("creditAmount");
const outputTxt = document.getElementById("output");
const winNum = document.getElementById("winAmount");
const spinBtn = document.getElementById("spin");
const winBtn = document.getElementById("winningsBtn");
// const transferBtn = document.getElementById("transfer");
const addCredBtn = document.getElementById("creditBtn");
let reels;
let reels2;
let reels3;
let winTotal;
let creditTotal;
//button event listeners
spinBtn.addEventListener("click",spin1,);
addCredBtn.addEventListener("click",credit);
winBtn.addEventListener("click", winner);
// transferBtn.addEventListener("click", transfer);
disableBtn();
randomise();
// functions
function randomise(){
    reels =Math.ceil(Math.random()*8);
    reelOne.setAttribute("src","slotImages/" + reels + ".png");
    reels2 =Math.ceil(Math.random()*8);
    reelTwo.setAttribute("src","slotImages/" + reels2 + ".png");
    reels3 =Math.ceil(Math.random()*8);
    reelThree.setAttribute("src","slotImages/" + reels3 + ".png");
}
function spin1(){
    randomise()
    if(reels == reels2 && reels == reels3){
        winTotal = parseInt(winNum.innerText);
        winTotal += 10;
        winNum.innerText = winTotal;
        document.getElementById("reel1").style.borderColor = "green";
        document.getElementById("reel2").style.borderColor = "green";
        document.getElementById("reel3").style.borderColor = "green";
        outputTxt.innerText = `WINNER!! YOU HAVE WON 10 CREDITS`;
    }else if(reels2==reels3){
        winTotal = parseInt(winNum.innerText);
        winTotal += 5;
        winNum.innerText = winTotal;
        document.getElementById("reel2",).style.borderColor = "green";
        document.getElementById("reel3").style.borderColor = "green";
        outputTxt.innerText = `WINNER!! YOU HAVE WON 5 CREDITS`;
    }else{
        document.getElementById("reel1").style.borderColor = "red";
        document.getElementById("reel2").style.borderColor = "red";
        document.getElementById("reel3").style.borderColor = "red";
        outputTxt.innerText = ``;
    }
    creditTotal = parseInt(creditNum.innerText);
    creditTotal -= 1 ;
    creditNum.innerText = creditTotal;
    disableBtn();
 }
function credit(){
    creditTotal = parseInt(creditNum.innerText);
    creditTotal++ ;
    creditNum.innerText = creditTotal;
    disableBtn();
}
function winner(){
        outputTxt.innerText = `YOU HAVE COLLECTED ${winNum.innerText} CREDITS`
        winTotal= winTotal-winTotal;
        winNum.innerText = winTotal;
        disableBtn()
        ;
}
// function transfer(){
//     if(winTotal>=5){
//         winTotal-=5;
//         winNum.innerText = winTotal;
//     creditTotal = parseInt(creditNum.innerText);
//     creditTotal += 5 ;
//     creditNum.innerText = creditTotal;
//     outputTxt.innerText = ``;
//     }
//     disableBtn();
// }
function disableBtn(){
    creditTotal = parseInt(creditNum.innerText);
    winTotal = parseInt(winNum.innerText);
    if(creditTotal<=0){
        document.getElementById("spin").disabled =true;
        document.getElementById("spin").style.background = "grey";
    }else{
        document.getElementById("spin").disabled =false;
        document.getElementById("spin").style.background = "blue";
    }

    if(winTotal<=0){
        document.getElementById("winningsBtn").disabled =true;
        document.getElementById("winningsBtn").style.background = "grey";
        // document.getElementById("transfer").disabled =true;
        // document.getElementById("transfer").style.background = "grey";
    }else{
        document.getElementById("winningsBtn").disabled =false;
        document.getElementById("winningsBtn").style.background = "purple";
        // document.getElementById("transfer").disabled =false;
        // document.getElementById("transfer").style.background = "rgba(255, 94, 0, 0.911)";
    }
}
