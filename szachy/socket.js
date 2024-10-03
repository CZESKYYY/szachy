app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
  });
  
  io.on('connection', (socket) => {
    console.log('a user connected');
  });
  
  server.listen(5500, () => {
    console.log('server running at http://localhost:3000');
  });