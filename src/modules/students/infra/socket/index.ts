import SocketConnection from '@shared/infra/socket/SocketConnection';

interface Data {
  document: string;
}

const io = SocketConnection.getSocket();

io.on('connection', socket => {
  const startTime = new Date();
  let endTime: Date;
  let document: string;

  socket.on('online-student', (data: Data) => {
    document = data.document;
  });

  socket.on('disconnect', async () => {
    endTime = new Date();

    console.log({
      startTime,
      endTime,
      document,
    });
  });
});
