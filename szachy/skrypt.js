const socket = io("ws://localhost:3030", { // wss wskazuje na protokół zabezpieczony (podobnie jak https), lokalnie ciężko odtworzyć wss
  withCredentials:true, // to wymaga, żeby na serwerze były podane konkretne adresy, a nie *
  transportOptions:{
    pooling:{
      extraHeaders:{
        "x-h":"test"
      }
    }
  }
});

var board = null
var game = new Chess()
var $status = $('#status')
var $fen = $('#fen')
var $pgn = $('#pgn')

socket.emit("joinGame",{code:"test"});
socket.on("startGame",function(daneZServera){
  console.log(daneZServera);
})
socket.on("ustawkolor",function(color){
  console.log(color.color);
  if(color.color==="b"){
    var config = {
      draggable: true,
      position: 'start',
      onDragStart: onDragStart,
      onDrop: onDrop,
      onSnapEnd: onSnapEnd,
      
      orientation: "black"
    }
    board = Chessboard('board', config)
  }
})
function onDragStart (source, piece, position, orientation) {
  // do not pick up pieces if the game is over
  if (game.game_over()) return false

  // only pick up pieces for the side to move
  if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
    return false
  }
}

function onDrop (source, target) {
  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q', // NOTE: always promote to a queen for example simplicity
    
  })

  // illegal move
  if (move === null) return 'snapback'
  else
  socket.emit('move',move);
 

  updateStatus()
}
socket.on('move',function(msg){
  game.move(msg);
  board.position(game.fen());
})

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd () {
  board.position(game.fen())
}

function updateStatus () {
  var status = ''

  var moveColor = 'White'
  if (game.turn() === 'b') {
    moveColor = 'Black'
  }

  // checkmate?
  if (game.in_checkmate()) {
    status = 'Game over, ' + moveColor + ' is in checkmate.'
  }

  // draw?
  else if (game.in_draw()) {
    status = 'Game over, drawn position'
  }

  // game still on
  else {
    status = moveColor + ' to move'

    // check?
    if (game.in_check()) {
      status += ', ' + moveColor + ' is in check'
    }
  }

  $status.html(status)
  $fen.html(game.fen())
  $pgn.html(game.pgn())
}

var config = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd,
  
  orientation: "white"
}
board = Chessboard('board', config)

updateStatus()