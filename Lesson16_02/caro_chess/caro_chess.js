var chess = document.getElementById('chess');
let board = [];

for (var row = 0; row < 20; row++) {
    let rowArray = [];
  for (var col = 0; col < 20; col++) {
    let cell = document.createElement('div');
    rowArray.push(cell)
    cell.className = 'cells';
    chess.appendChild(cell);
    
    cell.addEventListener('click', function(){
        if (this.textContent === '' ){
            this.textContent = Player;
            if (checkWin(Player)) {
               setTimeout(function(){
                alert(Player + ' wins!');
                resetBoard();
               }, 0);
               
                return;
              }
            Player = Player === 'x' ? 'o' : 'x';
        }
    }
    
    );
  }
  board.push(rowArray)
}
var Player = 'x'
function checkWin(Player) {
    for (let row = 0; row < 20; row++){
        for ( let col = 0 ; col < 16 ; col++){
            if(
                board[row][col].textContent === Player &&
                board[row][col+1].textContent === Player &&
                board[row][col+2].textContent === Player &&
                board[row][col+3].textContent === Player &&
                board[row][col+4].textContent === Player 
            )
            { return true ;}
        }
    }
        for (let row = 0; row < 16; row++){
            for ( let col = 0 ; col < 20 ; col++){
                if(
                    board[row][col].textContent === Player &&
                    board[row+1][col].textContent === Player &&
                    board[row+2][col].textContent === Player &&
                    board[row+3][col].textContent === Player &&
                    board[row+4][col].textContent === Player 
                )
                { return true ;}
            }
        }
        return false ;
    }
function resetBoard(){
    for ( let col = 0; col < 20; col++ ){
        for ( let row = 0; row < 20; row++){
            board[col][row].textContent= '';
        }
    }
    var Player = 'x' 
}
var xCells = document.getElementsByClassName('cells');
for (var i = 0; i < xCells.length; i++) {
  xCells[i].style.color = 'red';
}



