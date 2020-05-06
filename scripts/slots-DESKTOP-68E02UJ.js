// get elements
const reelOne = document.getElementById("reel1");
const reelTwo = document.getElementById("reel2");
const reelThree = document.getElementById("reel3");
const creditNum = document.getElementById("creditAmount");
let winNum = document.getElementById("winAmount");
const spinBtn = document.getElementById("spin");
const winBtn = document.getElementById("winningsBtn");
const moveBtn = document.getElementById("move");
const addCredBtn = document.getElementById("creditBtn");
//button event listeners
spinBtn.addEventListener("click",spin1);
spinBtn.addEventListener("click",spin2);
spinBtn.addEventListener("click",spin3);
addCredBtn.addEventListener("click",credit);
winBtn.addEventListener("click", winner);
moveBtn.addEventListener("click", transfer);
// if statements
// functions
function spin1(){
    let reels =Math.ceil(Math.random()*8);
    reelOne.setAttribute("src","slotImages/" + reels + ".png");
}
function spin2(){
        let reels2 =Math.ceil(Math.random()*8);
        reelTwo.setAttribute("src","slotImages/" + reels2 + ".png");
}
function spin3(){
        let reels3 =Math.ceil(Math.random()*8);
        reelThree.setAttribute("src","slotImages/" + reels3 + ".png");
}
function credit(){
    let creditTotal = parseInt(creditAmount.value);
    creditTotal++;
    creditnum.innerText =creditTotal; 
}
function winner(){

}
function transfer(){

}

