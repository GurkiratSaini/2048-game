var gridDisplay = document.getElementById("grid");
var scoreDisplay = document.getElementById("score");
var resultDisplay = document.getElementById("result");

var squares = [];
const width = 4;
var score = 0;


function createBoard() {
    for(var i = 0; i < width*width; i++){
        var square = document.createElement("div");
        square.innerHTML = 0;
        gridDisplay.appendChild(square);
        squares.push(square);
    }
}

function gameEngine() {
    createBoard();
    generateRandom();
    generateRandom();

}

function generateRandom() {
    var random = Math.floor(Math.random() * squares.length);
    if(squares[random].innerHTML === "0") {
        squares[random].innerHTML = 2;

        // stop generating when game is over.
    }
    else {
        generateRandom();
    }
}

function moveLeft() {
    if (parseInt(squares[i].innerHTML) === parseInt(squares[i+1].innerHTML)) {
        for(var i = 0; i<width*width; i++) {
            var sum = squares[i]
        }
}
}


document.addEventListener('DOMContentLoaded', gameEngine);