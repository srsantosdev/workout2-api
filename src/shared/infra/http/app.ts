import 'reflect-metadata';
import 'dotenv/config';

import { Server } from 'http';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';

import AppError from '@shared/errors/AppError';
import '@shared/container';

import '../typeorm';
import routes from './routes';

const app = express();
const server = new Server(app);

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  (error: Error, _request: Request, response: Response, _: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.error(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error.',
    });
  },
);

export default server;
