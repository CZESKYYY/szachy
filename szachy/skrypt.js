let socket;
window.isInitialized = false;
window.isJoined = false;
window.getSocket = () => {

    if (!socket) {
        socket = io("ws://localhost:3030", { // wss wskazuje na protokół zabezpieczony (podobnie jak https), lokalnie ciężko odtworzyć wss
            withCredentials: true, // to wymaga, żeby na serwerze były podane konkretne adresy, a nie *
            transportOptions: {
                pooling: {
                    extraHeaders: {
                        "x-h": "test"
                    }
                }
            }
        });

    }


    return socket;
}

// socket.on("playerWait", function (playerWaitToken) {
//     if (playerWaitToken === "a") {
//     let wrapper_hide = document.getElementById("wrapper3");
//     let wait_show = document.getElementById("wait");
//     wrapper_hide.style.display = "none";
//     wait_show.style.display = "block";
//     }
// })

function inicjalizacja() {
    if (window.isInitialized) return
    window.isInitialized = true;

    const socket = window.getSocket();

    let game = null
    let board = null

    // socket.on("nick",)

    socket.on("startGame", function (daneZServera) {
        console.log(daneZServera);
        console.log("daneZServera");
    })


    socket.on("ustawkolor", function (obj) {
        let config=null;
        if (obj.color === "b") {
             config = {
                draggable: true,
                position: 'start',
                 orientation: "black",
                showNotation: true
            }
        } else{
            config = {
                draggable: true,
                position: 'start',
                orientation: "white",
                shownNotation: true
            }
        }

            
        setTimeout(()=>{
            document.querySelector("#wrapper3").classList.toggle("hide")
            document.querySelector("#wait").classList.toggle("hide")

        let tmp = getboard(config)
        game = tmp.game
        board = tmp.board
        },100)


            var enemy = obj.przeciwnik;
            let sentnick2 = document.getElementById("nick1");
            if(sentnick2){
            sentnick2.innerHTML = "<span style='color: white'>" + enemy + "</span>";

            }else{
                window.enemy=enemy
            }

    })

    socket.on('move', function (msg) {
       
        game.move(msg);
        board.position(game.fen());
        console.log("ruch klient");
    })

    // update the board position after the piece snap
    // for castling, en passant, pawn promotion
    


}

function getboard(config){
    
    var board = null
    var game = new Chess()
    var $status = $('#status')
    var $fen = $('#fen')
    var $pgn = $('#pgn')
    function onDragStart(source, piece, position, orientation) {

        if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
            (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
            return false
        }
        // do not pick up pieces if the game is over
        if (game.game_over()) return false

        if ((orientation === 'white' && piece.search(/^w/) === -1) ||
            (orientation === 'black' && piece.search(/^b/) === -1)) {
            e.preventDefault();
        }
        console.log("src, piece, position, orientation");
    }

    function onDrop(source, target) {
        // see if the move is legal
        var move = game.move({
            from: source,
            to: target,
            promotion: 'q', // NOTE: always promote to a queen for example simplicity

        })

        // illegal move
        if (move === null) return 'snapback'
        else
            socket.emit('move', move);


        updateStatus()
        console.log("on drop");
    }
    function onSnapEnd() {
        board.position(game.fen())
        console.log("board position");
    }

    function updateStatus() {
        var status = ''

        var moveColor = 'White'
        if (game.turn() === 'b') {
            moveColor = 'Black'
            console.log("move black");
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

    board = Chessboard('board', {
        ...config,
        onDragStart: onDragStart,
        onDrop: onDrop,
        onSnapEnd: onSnapEnd,
})

    
    updateStatus()

    return{
        board,game
    }
}

window.inicjalizacja = inicjalizacja;
window.getboard = getboard;
console.log("test")