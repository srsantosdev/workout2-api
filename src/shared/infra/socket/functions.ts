import { Server as HttpServer } from 'http';
import { Server as SocketServer } from 'socket.io';

export function createSocketConnection(server: HttpServer): SocketServer {
  const socketInstance = new SocketServer(server, { path: '/socket' });

  return socketInstance;
}
