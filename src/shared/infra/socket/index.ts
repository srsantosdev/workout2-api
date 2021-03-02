import app from '@shared/infra/http/app';
import io from 'socket.io';

const socket = new io.Server(app);

export default socket;
