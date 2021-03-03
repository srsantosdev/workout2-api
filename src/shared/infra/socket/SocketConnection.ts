/* eslint-disable global-require */
import { Server as HttpServer } from 'http';
import { Server as SocketServer } from 'socket.io';

let socketInstance: SocketServer;

export default class SocketConnection {
  private server: HttpServer;

  private socket: SocketServer;

  constructor(server: HttpServer) {
    this.server = server;
    this.socket = new SocketServer(this.server, { path: '/socket' });
  }

  public init(): void {
    socketInstance = this.socket;
    require('./modules');
  }

  public static getSocket(): SocketServer {
    return socketInstance;
  }
}
