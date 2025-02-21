let games = {};
module.exports = io => {

    io.on('connection', socket => {
        console.log('New socket connection');


        let currentCode = null;

        socket.on('klientUstawiaNick', function (nazwa, currentCode) {

           
            
            if(!games[currentCode]){
                games[currentCode] = {players: []}; // Store players and other game data
            }
            games[currentCode].players.push({
                id: socket.id,
                transNick: "podpinany gracz" + socket.id
            });

            // Ensure both players are in the game before starting
            if (games[currentCode].players.length === 2) {
               
                console.log(JSON.stringify(games[currentCode]))

                io.to(games[currentCode].players[0].id).emit("ustawkolor", {
                    color: 'w',
                    // przeciwnik: games[currentCode].players[1].transNick
                    
                })
                console.log("Ustawiam czary kolor ")
                io.to(games[currentCode].players[1].id).emit("ustawkolor", {
                    color: 'b',
                    // przeciwnik: games[currentCode].players[0].transNick
                })

                for (let i = 0; i < 2; i++) {
                    io.to(games[currentCode].players[i]).emit("startGame", {mojawlasciwosc: currentCode});
                }
                //io.to(currentCode).emit('startGame');
                 console.log(`Game started with code: ${currentCode}`);
            }

            socket.emit('serwerUstawiaNick', nazwa)
            console.log("own nick")
            console.log(games);
        })
        socket.on('move', function (msg) {
            socket.broadcast.emit('move', msg)
            console.log("emit ruchu")
        })
        socket.on("newMove", function () {
            game.move(move);
            console.log("emit nowego ruchu ")
        });
        socket.on('joinGame', function (data) {
            console.log(`Joining game with code: ${data.code}`);
            let currentCode = data.code;
            socket.join(currentCode);
            console.log(`Player ${socket.id} joined game: ${currentCode}`);

            // if (!(currentCode in games)) {
            //     games[currentCode] = {players: []}; // Store players and other game data
            //     console.log(`Game created with code: ${currentCode}`);
            }

        //  }
        );

        socket.on('disconnect', function () {
            console.log('Socket disconnected:', socket.id);
            if (currentCode) {
                io.to(currentCode).emit('gameOverDisconnect');
                games[currentCode].players = games[currentCode].players.filter(id => id !== socket.id);

                if (games[currentCode].players.length === 0) {
                    delete games[currentCode];
                    console.log(`Game ${currentCode} deleted after disconnect`);
                    console.log(currentCode);
                }
            }
        });
    });
};