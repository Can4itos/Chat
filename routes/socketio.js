function main(socket, io) {
    console.log('a user connected');
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    socket.on('disconnect', () => {
      console.log('user disconnected 2');s
    });
}
module.exports = main;


