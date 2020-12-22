/* check if two diagonals, three horizontals and verticals are equal
if they are equal, player to get all of them equal will win, display player x won
if none of the player get the equal value, display the game was a draw

need to strat game over if previous game has ended
disable user from clicking if game is over or a tie
disable clicking on already used spots

check to see if any player clicks the button, if he is winning

make sure you have a link to your game in your first index.html file
*/

// let currentUser = "X";
// let nextUser = "O";


// const gameState = {
//     players: ["X", "O"],
//     board: [
//         [null, null, null],
//         [null, null, null],
//         [null, null, null],
//     ]
// }

// let win = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];

// function checkWinner () {
//     let gameWon = false;
//     for (let i = 0; i <= win.length; i++) {
//         let wincondition = win[i];
//         let a = gameState.board[win[0]];
//         let b = gameState.board[win[1]];
//         let c = gameState.board[win[2]];
//             if (a === "" || b === "" || c === "") {
//                 continue;
//             }
//             if (a === b && b === c) {
//                 gameWon = true;
//                 player1Score++;
//                 $('.player-1').text(player1Score);
//                 $('.cell').empty();
//             }
//         }
//     }

let turn = 1;
let player1Score = 0;
let player2Score = 0;
let draw = 0;
    

function checkWinner(val) {
    if ($('#cell_1').hasClass(val)
    && $('#cell_2').hasClass(val)
    && $('#cell_3').hasClass(val)
    || $('#cell_4').hasClass(val)
    && $('#cell_5').hasClass(val)
    && $('#cell_6').hasClass(val)
    || $('#cell_7').hasClass(val)
    && $('#cell_8').hasClass(val)
    && $('#cell_9').hasClass(val)
    || $('#cell_1').hasClass(val)
    && $('#cell_4').hasClass(val)
    && $('#cell_7').hasClass(val)
    || $('#cell_2').hasClass(val)
    && $('#cell_5').hasClass(val)
    && $('#cell_8').hasClass(val)
    || $('#cell_3').hasClass(val)
    && $('#cell_6').hasClass(val)
    && $('#cell_9').hasClass(val)
    || $('#cell_1').hasClass(val)
    && $('#cell_5').hasClass(val)
    && $('#cell_9').hasClass(val)
    || $('#cell_1').hasClass(val)
    && $('#cell_3').hasClass(val)
    && $('#cell_5').hasClass(val)
    && $('#cell_7').hasClass(val)
    ) {
        return true;
    }
}

function checkDraw() {
   if ($('.X').length + $('.O').length === 9) {
       $('.cell').empty()
       $('.X').removeClass("X")
       $('.O').removeClass("O")
       draw++;
       $('.draw').text(draw)
   }
}
    
$('.cell').click(function(){
    if (turn === 1 && !$(this).text()) {
        $(this).text("X")
        $(this).addClass("X")
        turn = 2
        
        if (checkWinner("X")) {
            player1Score++;
            $('.player-1').text(player1Score);
            alert("Player 1 wins!")
            $('.cell').empty();
            $('.X').removeClass("X")
        }
    } else if (!$(this).text()) {
        $(this).text("O")
        $(this).addClass("O")
        turn = 1

        if (checkWinner("O")) {
            player2Score++;
            $('.player-2').text(player2Score);
            alert("Player 2 wins!")
            $('.cell').empty();
            $('.O').removeClass("O")
        }
    }
    $('.turn').text(turn)
})

function restartGame() {
        $('.game-container .cell').text("")
        $('.game-container .cell').removeClass("X")
        $('.game-container .cell').removeClass("O")
}

$('.game-restart').click(restartGame)


// const gameState = {
//     players: ["X", "O"],
//     board: [
//         [null, null, null],
//         [null, null, null],
//         [null, null, null],
//     ]
// }

// let win = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
// ];


// function checkForWinner () {
//     let gameWon = false;
//     for (let i = 0; i <= win.length; i++) {
//         let winconsition = win[i];
//         let a = gameState[win[0]];
//         let b = gameState[win[1]];
//         let c = gameState[win[2]];
//             if (a === "" || b === "" || c === "") {
//                 continue;
//             }
//             if (a === b && b === c) {
//                 gameWon = true;
//                 player1Score++;
//                 $('.player-1').text(player1Score);
//                 $('.cell').empty();
//             }
//         }
//     }

// function checkForWinner(row, column) {
//     if ((row === "X") || (column === "X") || (row === "O") || (column === "O"))
// }
// function onClick(row, column) 

// object keys x and key y

