module.exports = io => {
    let games={};
    io.on('connection', socket => {
        console.log('New socket connection');
        
        let currentCode = null;
        
        socket.on('move', function(move) {
            console.log('Move received:', move);
            if (currentCode) {
                io.to(currentCode).emit('newMove', move);
                console.log(`Move ${move} emitted to game ${currentCode}`);
            }
        });
        
        socket.on('joinGame', function(data) {
            console.log(`Joining game with code: ${data.code}`);
            let currentCode = data.code;
            socket.join(currentCode);
            console.log(`Player ${socket.id} joined game: ${currentCode}`);

            if (!(currentCode in games)) {
                games[currentCode] = { players: [] }; // Store players and other game data
                console.log(`Game created with code: ${currentCode}`);
            }
console.log(games)
            games[currentCode].players.push(socket.id);
            
            // Ensure both players are in the game before starting
            if (games[currentCode].players.length === 2) {
                io.to(games[currentCode].players[0]).emit("ustawkolor",{ color: 'w'})
                io.to(games[currentCode].players[1]).emit("ustawkolor",{ color: 'b'})
                
                for (let i = 0; i<2;i++)
                {
                    io.to(games[currentCode].players[i]).emit("startGame",{mojawlasciwosc:currentCode});
                }
                //io.to(currentCode).emit('startGame');
                console.log(`Game started with code: ${currentCode}`);
            }
        });

        socket.on('disconnect', function() {
            console.log('Socket disconnected:', socket.id);
            if (currentCode) {
                io.to(currentCode).emit('gameOverDisconnect');
                games[currentCode].players = games[currentCode].players.filter(id => id !== socket.id);

                if (games[currentCode].players.length === 0) {
                    delete games[currentCode];
                    console.log(`Game ${currentCode} deleted after disconnect`);
                }
            }
        });
    });
};