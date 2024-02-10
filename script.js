console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
// let a = prompt("Enter the name of player first")
// let turn1= document.write(a)
// let b = prompt("Enter the name of player second")
// let turn2=document.write(b)
let gameovers  =false 

//function to change a turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}


//function to cheack for a win
const checkWin =() =>{
    let boxtext =document.getElementsByClassName('boxtext') 
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== "")){
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " Won" 
            gameovers  = true
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "200px"
            //set line
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
}  

//Game logic
// music.play()
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(Element =>{
    let boxtext = Element.querySelector(".boxtext")
    Element.addEventListener('click',(e)=>{
        if(boxtext.innerText ===''){
            boxtext.innerText = turn;
             turn = changeTurn();
            audioturn.play()
            checkWin()
            if(!gameovers){
                document.getElementsByClassName("Info")[0].innerText = "turn for " + turn
            }
        }
    })
})

// reset button
reset.addEventListener('click',( )=>{
    let boxtexts = document.querySelectorAll(".boxtext")
    Array.from(boxtexts).forEach(Element =>{
        Element.innerText = ""
    })
    turn = "X"
    gameovers = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("Info")[0].innerText = "turn for " + turn
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width = "0px"
    
})
