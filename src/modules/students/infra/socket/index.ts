import SocketConnection from '@shared/infra/socket/SocketConnection';

const io = SocketConnection.getSocket();

io.on('connection', socket => {
  console.log('Usuário online.');

  socket.on('disconnect', () => {
    console.log('Usuário offline.');
  });
});
