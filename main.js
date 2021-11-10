

let randArr = ["papir", "kamen", "makaze"];
let btn = document.querySelector('.play-btn');
let player1 = document.querySelector('.game-pic-1');
let player2 = document.querySelector('.game-pic-2');
let result1 = document.querySelector('.result-1');
let result2 = document.querySelector('.result-2');
btn.addEventListener("click", shakingFists);

function playTheGame(){
    player1.classList.remove('fist');
    player2.classList.remove('fist');
    let rand1= Math.ceil(Math.random() * 3);
    let rand2= Math.ceil(Math.random() * 3);
    console.log(rand1, rand2);
    player1.setAttribute("src",rand1 + ".svg");
    player2.setAttribute("src",rand2 + ".svg");
    gameResult(rand1, rand2);
}

function shakingFists(){
    setTimeout(playTheGame, 3000);
    player1.classList.add('fist')
    player1.setAttribute('src', '3.svg');
    player2.classList.add('fist');
    player2.setAttribute('src', '3.svg');
}

function gameResult(param1, param2){
    console.log(param1, param2);
    if(param1 == param2 - 1 || param1 == param2 + 2) {
        // result1.innerHTML = "WINNER";
        // result2.innerHTML = "LOOSER";
        result1.innerHTML = "DARA SHARES SCREEN";
        result2.innerHTML = "ANDJELA AND DAVID REST";
    }else if(param2 == param1 - 1 || param1 == param2 - 2){
        // result1.innerHTML = "LOOSER";
        // result2.innerHTML = "WINNER";
        result1.innerHTML = "ANDJELA SHARES SCREEN";
        result2.innerHTML = "DARA AND DAVID REST";
    }else{
        // result1.innerHTML = "PLAY";
        // result2.innerHTML = "AGAIN";
        result1.innerHTML = "ALMOST DAVID";
        result2.innerHTML = "PLAY AGAIN";
    }
}